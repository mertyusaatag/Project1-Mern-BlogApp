import express from "express";
import {getPosts} from "../controllers/post.js"
const router=express.Router();

//GET POST DELETE UPDATE

router.get("/",getPosts)

export default router;