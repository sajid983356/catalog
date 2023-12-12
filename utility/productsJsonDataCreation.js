const fs = require('fs');
const path = require('path');

const inputFolder = '/Users/e123914/Desktop/project/learning/reactjs/catalog/public/img/products';
const outputfolder = '/Users/e123914/Desktop/project/learning/reactjs/catalog/src/data/category'

function readProductDescription(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n').map(line => line.trim());
  
      const descriptionIndex = lines.findIndex(line => line.startsWith('Finish'));
      const sizesIndex = lines.findIndex(line => line.startsWith('Size'));
      const materialIndex = lines.findIndex(line => line.startsWith('Material'));
  
      const description = descriptionIndex !== -1 ? lines[descriptionIndex] : '';
      let sizes = sizesIndex !== -1 ? lines.slice(sizesIndex, materialIndex !== -1 ? materialIndex : undefined).join(' ') : '';
      const material = materialIndex !== -1 ? lines.slice(materialIndex).join(' ') : '';

      // console.log("sizes -> ", sizes)
      if (!sizes.includes('sizes:') && !sizes.includes('Sizes:') && !sizes.includes('size:')) {
        // console.log("inside true before size", sizes)
        sizes = 'Sizes: ' + sizes;
        // console.log("inside true after size", sizes)
      }
  
      return { description, sizes, material };
    } catch (error) {
      console.error(`Error reading product description file: ${filePath}`);
      return { description: '', sizes: '', material: '' };
    }
  }

function createFolderStructure(folderPath) {
  const parentFolderName = path.basename(folderPath);

  const parentObject = {
    parentFolder: parentFolderName,
    childList: [],
  };

  const childFolders = fs.readdirSync(folderPath, { withFileTypes: true });

  childFolders.forEach((child) => {
    if (child.isDirectory()) {
      const childFolderPath = path.join(folderPath, child.name);
      const grandChildFolders = fs.readdirSync(childFolderPath, {
        withFileTypes: true,
      });

      const childObject = {
        childName: child.name,
        grandChildList: grandChildFolders
          .filter((grandChild) => grandChild.isDirectory())
          .map((grandChild) => {
            const grandChildPath = path.join(childFolderPath, grandChild.name);
            const images = fs.readdirSync(grandChildPath)
              .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file)); // Filter images only

            //   console.log(grandChildPath,images)
            const txtFiles = fs.readdirSync(grandChildPath)
            .filter((file) => /\.txt$/i.test(file)); // Filter .txt files only
    
            // console.log("file -> ", txtFiles[0]);
            const grandChildObject = {};
            if (txtFiles.length > 0) {
                const productDescriptionPath = path.join(grandChildPath, txtFiles[0]);
                // console.log(grandChildPath, productDescriptionPath)
                const { description, sizes, material } = readProductDescription(productDescriptionPath);
                // console.log("description -> ",description);
                // console.log("sizes -> ", sizes);
                // console.log("material -> ", material);
                
                grandChildObject.grandChildName = grandChild.name,
                grandChildObject.images = images;
                grandChildObject.title = parentFolderName;
                grandChildObject.description = description;
                grandChildObject.sizes = sizes;
                grandChildObject.material = material;

              } else {
                console.error(`No .txt file found in grandchild folder: ${childFolderPath}`);
              }
            return grandChildObject;
          }),
      };

      parentObject.childList.push(childObject);
    }
  });

  // Create a JSON file for the parent folder
  const parentJsonContent = JSON.stringify([parentObject], null, 2);
  fs.writeFileSync(path.join(outputfolder, `${parentFolderName}.json`), parentJsonContent);

  return parentObject;
}

function createMasterJsonFile(productsFolderPath) {
  const masterObject = []

  const productFolders = fs.readdirSync(productsFolderPath, { withFileTypes: true });

  productFolders.forEach((product) => {
    if (product.isDirectory()) {
      const productFolderPath = path.join(productsFolderPath, product.name);
      const parentFolderJson = createFolderStructure(productFolderPath);
      masterObject.push(parentFolderJson);
    }
  });

  const masterJsonContent = JSON.stringify(masterObject, null, 2);
  fs.writeFileSync(path.join(outputfolder, 'view_all.json'), masterJsonContent);
}

// Example usage: Provide the path to the products folder
createMasterJsonFile(inputFolder);

