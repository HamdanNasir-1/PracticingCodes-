const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("router middleware running");
    next();
})
router.get("/", (req, res) => {
    res.send("route is running");
})
router.get("/about", (req, res) => {
    res.send("about is running");
})

module.exports = router;