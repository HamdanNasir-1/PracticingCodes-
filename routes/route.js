const express = require("express");
const router = express.Router();

router.get("/route",(req,res)=>{
    res.send("route is running");
})

module.exports = router;