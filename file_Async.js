const fs = require('fs');

path1 ="file1.txt"
path1 ="file2.txt"
path1 ="file3.txt"

let a=10
let b=20

fs.writeFile("file2.txt","data to be written",()=>{
    console.log("in file 1")
})

console.log(a+b);

console.log("Finish reading file");