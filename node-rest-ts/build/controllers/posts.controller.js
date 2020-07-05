"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = exports.getAllPosts = void 0;
const express_validator_1 = require("express-validator");
const Post_1 = __importDefault(require("../models/Post"));
exports.getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield Post_1.default.find();
    res.json(posts);
});
exports.getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post_1.default.find({ url: req.params.url });
    res.json(post);
});
exports.createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield express_validator_1.check('title').isLength({ min: 5 }).run(req);
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { title, url, content, image } = req.body;
    const newPost = new Post_1.default({ title, url, content, image });
    yield newPost.save();
    res.json({ data: newPost });
});
exports.updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.params;
    const post = yield Post_1.default.findOneAndUpdate({ url }, req.body, { new: true });
    res.json(post);
});
exports.deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url } = req.params;
    yield Post_1.default.findOneAndDelete({ url });
    res.json({ response: 'Post Deleted successfully' });
});
//# sourceMappingURL=posts.controller.js.map