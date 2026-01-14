const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/route",routes);

app.get("/", (req, res) => {
    res.send("hello")
})
app.get("/profile/:username/:age", (req, res) => {
    res.send("papa " + req.params.username + " of age " + req.params.age);

})
app.get("/index", (req, res) => {
    res.send("Get request running ");

})
app.listen(3000);