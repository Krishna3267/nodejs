const fs = require('fs')

//reading files

// fs.readFile('./docs/blogs1.txt' , (error, data) =>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString())
// })

// console.log('Last')

//Writing files 

// fs.writeFile('./docs/blogs1.txt' , 'Dont this instead', ()=>{
//     console.log('Wrting done')
// })

// fs.writeFile('./docs/blogs2.txt' , 'Dont this instead', (err)=>{
//     console.log('Wrting done')
//     if(err){
//         console.log(err)
//     }
// })

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets' , (error) => {
//         if(error){
//             console.log(error)
//         }
//         console.log("Folder created")
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log('folder deleted')
// }

//delete files

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt' , (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// } 




