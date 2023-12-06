const fs = require('fs');
const path = require('path');

function convertToObjects(rootFolder) {
  const result = [];

  const processFolder = (folderPath) => {
    const folderName = path.basename(folderPath);
    const link = folderName.replace(/\s+/g, '').toLowerCase();
    const componentName = folderName.replace(/(\s+\w|^\w)/g, (match) => match.trim().toUpperCase());


    const childFolders = fs.readdirSync(folderPath, { withFileTypes: true });

    childFolders.forEach((child) => {
      if (child.isDirectory()) {
        const childFolderPath = path.join(folderPath, child.name);
        const childLinkLowerCase = child.name.replace(/\s+/g, '').toLowerCase();
        const childComponentName = child.name.replace(/(\s+\w|^\w)/g, (match) => match.trim().toUpperCase());

        result.push({
          link: child.name,
          to: `/category/${link}/${childLinkLowerCase}`,
          componentName: childComponentName,
        });
      }
    });

    // result.push(dropdown);
  };

  processFolder(rootFolder);

  return result;
}

const rootFolder = 'public/img/products'; // Replace with the actual path
const resultArray = convertToObjects(rootFolder);

const outputPath = 'test.json'; // Replace with the desired output path
fs.writeFileSync(outputPath, JSON.stringify({ "dropdown" :resultArray } , null, 2));

console.log(`menu.json has been saved to: ${outputPath}`);
