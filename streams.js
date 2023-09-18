const fs = require('fs');


// fs.writeFile('./docs/blog3.txt', 'Hello krishna', (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('written')
//     }
// })

const readStream = fs.createReadStream('./docs/blog3.txt' , {encoding : 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog5.txt');
// readStream.on('data', (chunk) => {
//     console.log('----New Chunck---')
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNCK \n');
//     writeStream.write(chunk)
// })


//Piping

readStream.pipe(writeStream)