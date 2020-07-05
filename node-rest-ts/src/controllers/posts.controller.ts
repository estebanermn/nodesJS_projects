import {Request, Response} from 'express';
import {check, validationResult} from 'express-validator';
import Post from '../models/Post';


export const getAllPosts =  async (req: Request, res:Response)=>{
    const posts = await Post.find();
    res.json(posts);
}

export const getPost = async (req: Request, res: Response)=>{
    const post =  await Post.find({url:req.params.url});
    res.json(post);
}

export const createPost = async (req: Request, res: Response)=>{
    
    await check('title').isLength({min: 5}).run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {title , url, content, image} = req.body;
    const newPost = new Post({title , url, content, image});
    await newPost.save();
    res.json({data: newPost});
}

export const updatePost = async (req:Request, res:Response)=>{
    const {url} = req.params;
    const post = await Post.findOneAndUpdate({url}, req.body, {new: true});
    res.json(post);
}

export const deletePost = async (req:Request, res:Response)=>{
    const {url} = req.params;
    await Post.findOneAndDelete({url});
    res.json({response: 'Post Deleted successfully'});
}