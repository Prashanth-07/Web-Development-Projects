import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req,res) =>{
    res.send("<h1>About Me</h1><p>My name is Bunny!</p>");
});

app.get("/Contact", (req,res) =>{
    res.send("<h1>Contact me : <p>+91 8187828176</h1></p>");
});

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
});