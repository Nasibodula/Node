// const { write } = require('fs');

const fs = require('fs')
//read file
fs.readFile('./docs/blog.txt', (err , data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
} 
)
console.log("Last line")

//writefile
// fs.writeFile('./docs/blog1.txt','i love Nasibo', (err, data)=>{
//     console.log('file was written')
// })

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// }
// else{
//     fs.rmdir('./assets',(err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

//deletefile
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted')
//     })
// }