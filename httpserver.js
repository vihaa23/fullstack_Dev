require('dotenv').config();
const http = require ('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) =>{
    console.log(req.url)
    if(req.url == '/')
    {
        res.end('<h1> This is HP PARAM SOlUTION</h1> <i> WELCOME TO THE DEVELOPER WORLD!</i>');
    }
    else if(req.url =='/home')
    {
        res.end('<h1> This is HP PARAM SOlUTION</h1> <i> home Page!</i>');
    }
    res.statusCode = 200;
    // res.setHeader('COntent-Type','text/html')
    // res.end('<h1> This is HP PARAM SOlUTION</h1> <i> WELCOME TO THE DEVELOPER WORLD!</i>');

})

server.listen(port, ()=>{
    console.log(`server is listening on part ${port}`);
});