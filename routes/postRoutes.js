const express = require("express");

const postRouter = express.Router();


const { getPost, createPost, updatePost, deletePost } = require("../controllers/postController");
const project = require("../middleware/authMiddleware");



postRouter.get("/", getPost);

postRouter.post("/", project, createPost);

postRouter.put("/:id",project, updatePost);

postRouter.delete("/:id",project, deletePost);

module.exports = postRouter;