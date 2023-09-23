const fs = require('fs')

//reading files

// fs.readFile(path of the file to read , what to do when we read file)

// fs.readFile(`./docs/${__filename}` , (err , shivi) => {
//     if(err){
//         console.log(err)
//     }
//     else
//         console.log(shivi.toString())
// })


// function(args)

//sort(begin , end , (){}

// fs.readFile('./docs/blogs1.txt' , (error, data) =>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString())
// })

// console.log('Last')

//Writing files 
// let mydata = "hellos";
// fs.readFile('./docs/blog3.txt' , (err , data) =>{
//     if(err){
//         console.log(err)
//     }else{
//         mydata = data.toString()
//         console.log(mydata)
//     }
// })

// // let letsee = ""
// setTimeout(
//     () => {
//         fs.writeFile('./docs/blogs1.txt' , mydata, ()=>{
//             console.log('Wrting 3 to 1 done')
//         }
//         )
//     } 
// , 10000)

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






fs.readFile("./docs/blogs1.txt" , (err , data)=>{
    console.log(data.toString())
})

fs.writeFile("./docs/blogs1.txt" , "ifhuw" , (err)=>{
    console.log(err);
})