const fs = require('fs');
const path = require('path');

const inputFolder = '/Users/e123914/Desktop/project/learning/reactjs/catalog/public/img/products';
const outputfolder = '/Users/e123914/Desktop/project/learning/reactjs/catalog/src/data/category'


// const inputFolder = '/Users/e123914/Desktop/project/learning/reactjs/catalog/public/img/inputTest';
// const outputfolder = '/Users/e123914/Desktop/project/learning/reactjs/catalog/public/img/outputTest'


function readProductDescription(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n').map(line => line.trim());
   
      let materialData = '';
      let colorData = '';
    
      let readingMaterial = true;
    
      // Loop through each line
      lines.forEach(line => {
    
        if(line.length === 0) {
            return
        }
        if (line.toLocaleLowerCase().includes("color")) {
            readingMaterial = false;
            colorData += line.trim() + ' ';
            return
        }
        if (readingMaterial) {
            materialData += line.trim() + ' ';
        } else {
            colorData += line.trim() + ' ';
        }
      });
    
      return { material: materialData.trim(), color: colorData.trim() };
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
                const { material, color } = readProductDescription(productDescriptionPath);
                // console.log("description -> ",description);
                // console.log("sizes -> ", sizes);
                // console.log("material -> ", material);
                
                grandChildObject.grandChildName = grandChild.name,
                grandChildObject.images = images;
                grandChildObject.title = parentFolderName;
                grandChildObject.material = material;
                grandChildObject.color = color;

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

  const folderName = parentFolderName.split(' ');

  // Capitalize the first letter of each word except the first one
  const camelCaseFolderName = folderName.map((name, index) =>
    index === 0 ? name.toLowerCase() : name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );

  // Join the words together
  camelCaseParentsName = camelCaseFolderName.join('');

  fs.writeFileSync(path.join(outputfolder, `${camelCaseParentsName}.json`), parentJsonContent);

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

