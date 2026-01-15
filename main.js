const express = require("express");
const app = express();
const port = 3000;

app.use("/",(req,res,next)=>{
    console.log("hello babay hamdan")
    next();
})
app.get("/", (req, res) => {
    res.send("Hello Papa");
})

app.listen(port, () => {
    console.log("App is running ")
})