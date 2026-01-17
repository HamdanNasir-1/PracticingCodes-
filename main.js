const express = require("express");
const app = express();
const port = 3000;
const route = require('./routes/route');

app.use(express.static(Path2D.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/route",route)
app.use("/about",(req,res,next)=>{
    console.log("about section wala middleware chal rha hai")
    next();
})
app.get("/", (req, res) => {
    res.send("Hello Papa");
})

app.get("/about",(req,res)=>{
    res.send("aa gayila about section me")
})

app.listen(port, () => {
    console.log("App is running ")
})