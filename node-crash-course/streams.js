const fs= require("fs");

// const readStream= fs.createReadStream('./docs/blog1.txt',{encoding:'utf8'});
// const writeStream= fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data',(chunk)=>{
//     console.log('----NEW CHUNK ----')
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK\n');
//     writeStream.write(chunk)
// })

//piping

// readStream.pipe(writeStream)

if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err) => {
    if (err){
        console.log(err);
    }
    console.log('file deleted');
 } )
}