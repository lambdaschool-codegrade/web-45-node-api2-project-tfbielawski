// implement your server here
const express = require("express");
// require your posts router and connect it here
const postsRouter = require("./posts/posts-router");
const server = express();

server.use(express.json());

server.use("/api/posts", postsRouter);
//Landing page
server.get("*", (req,res) => {
    res.status(404).json({message: "not found"})
})

//Export the server
module.exports = server;
