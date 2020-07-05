import {Router} from 'express';
import {getAllPosts, getPost, createPost, updatePost, deletePost } from '../controllers/posts.controller';

class PostRoutes{
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', getAllPosts);
        this.router.get('/:url', getPost);
        this.router.post('/', createPost);
        this.router.put('/:url', updatePost);
        this.router.delete('/:url', deletePost);
    }
}

const postRoutes = new PostRoutes();
export default postRoutes.router;