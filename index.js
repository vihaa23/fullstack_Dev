const express = require("express")
const app = express();
app.use(express.json())
//API's
const books =[
    {
        id:1,
        name: "book1",
        author: "author1"
    },
    {
        id:2,
        name: "book2",
        author: "author2"
    },
    {
        id:3,
        name: "book3",
        author: "author3"
    }
]
app.get("/",(req,res)=>{
    res.send("Welcome to my API")
})
app.get("/home",(req,res)=>{
    res.send("Home Page")
})
app.get("/api/books",(req,res)=>{
    res.send(books)
})
//: is used to define a variable which would be seen on the server
app.get("/api/books/:bookId",(req,res)=>{
    const reqID = req.params.bookId;
    let book = books.filter((item)=> item.id == reqID)
    if(book.length == 0){
        res.status(404).send("Book not found")
    }
    res.send(book)
})
//params will show bith the parameters on server but to access only year use .year
app.get("/api/books/:year/:month",(req,res)=>{
    res.send(req.params)
})

//to post on api
app.post("/api/books",(req,res)=>{
    // let data = (req.body)
    // console.log(data.name,data.author)
    // console.log(data.author)
    //or
    let{name,author}=req.body
    console.log(name,author)

    //to add new book
    const newBook ={
        id : books.length + 1,
        name : name,
        author : author,
    }
    books.push(newBook)
    res.send(newBook) //or instead or newbook "book added" could also be written
})

//to delete

app.delete("/api/books/:bookId",(req,res)=>{
    const reqID = req.params.bookId;
    let book = books.find((item)=> item.id == reqID)
    console.log(book)
    if(!book){
        res.status(404).send("Book is not available")
        return
    }
const index = books.indexOf(book)
console.log(index)
books.splice(index,1)
res.send(book)
})

app.put("/api/books/:bookId",(req,res)=>{
    const reqID = req.params.bookId;
    let book = books.find((item)=>item.id==reqID)
    console.log(book)
    if(!book){
        res.status(404).send("Books is not available")
        return;
    }
    book.name = req.body.name;
    book.author = req.body.author
    res.send(book)
})


app.listen(3000)

