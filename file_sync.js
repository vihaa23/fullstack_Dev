const {readFileSync, writeFileSync}= require('fs')

const first = readFileSync("read.txt")
console.log(first.toString())
writeFileSync("write.txt"," ahsbiwebiwu written in the second file lkegnt3iwptn oejgioejowe") //without flag the text gets overwrite//{flag:'a'} ->used to append the next entered data