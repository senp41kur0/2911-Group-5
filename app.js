const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

// Tell the app to use /CSS directory for CSS files
app.use("/CSS", express.static(path.join(__dirname, "CSS")));

// Tell app to use /Assets for logo files
app.use("/Assets", express.static(path.join(__dirname, "Assets")));

// Default route for home page
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

// Tell app to listen on port
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// For Testing
module.exports = app