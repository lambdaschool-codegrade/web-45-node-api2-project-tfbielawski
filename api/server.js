// implement your server here
const express = require("express");
// require your posts router and connect it here
const server = express();
server.use(express.json());


//Landing page
server.get("/", (req,res) => {
    res.send(`<h2> API2 </h2>`)
})

//Export the server
module.exports = server;
