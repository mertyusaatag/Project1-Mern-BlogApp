import express from "express";
import {getPosts,createPost,getSinglePost} from "../controllers/post.js"
const router=express.Router();

//GET POST DELETE UPDATE

router.get("/",getPosts)
router.get("/:id",getSinglePost)
router.post("/",createPost)
router.delete("/:id",deletePost)

export default router;