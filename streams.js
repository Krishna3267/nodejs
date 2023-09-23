const fs = require('fs');
// const xyz = require("something")

// fs.writeFile('./docs/blog3.txt', 'Hello krishna', (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('written')
//     }
// })

const readStream = fs.createReadStream('./docs/blog4.txt' , {encoding : 'utf8'})
const writeStream = fs.createWriteStream('./docs/pipefile.txt');

// readStream.on('data', (chunk) => {
//     console.log('----New Chunck---')
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNCK \n');
//     writeStream.write(chunk)
// })


//Piping

readStream.pipe(writeStream)