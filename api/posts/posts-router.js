// implement your posts router here
const express = require("express");
const Post = require("./posts-model");
const router = express.Router();

//GET    | /api/posts
router.get("./api/posts", (req, res) => {
    Post.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log("GET /API/POSTS", error)
            res.status(500).json({  message: "The posts information could not be retrieved"})
        })
})
module.exports = router;