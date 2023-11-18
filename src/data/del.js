const data = require('./product.json');

let imageCount = 0;
let boxCount = 0
data.view_all.map((categoyObj, index) => {
    // console.log(categoyObj.category)
    categoyObj.category.map((obj, index) => (
        boxCount++,
        imageCount += obj.imageName.length
        // console.log(obj.imageName.length)
    ))
//     return categoyObj.imageName.map((image, index) => {
//         return count ++
// })
})

console.log(boxCount, imageCount)