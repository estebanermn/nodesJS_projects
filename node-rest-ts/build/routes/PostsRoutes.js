"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controllers/posts.controller");
class PostRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', posts_controller_1.getAllPosts);
        this.router.get('/:url', posts_controller_1.getPost);
        this.router.post('/', posts_controller_1.createPost);
        this.router.put('/:url', posts_controller_1.updatePost);
        this.router.delete('/:url', posts_controller_1.deletePost);
    }
}
const postRoutes = new PostRoutes();
exports.default = postRoutes.router;
//# sourceMappingURL=PostsRoutes.js.map