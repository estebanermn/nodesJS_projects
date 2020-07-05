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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUsers = void 0;
const express_validator_1 = require("express-validator");
const User_1 = __importDefault(require("../models/User"));
exports.getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.find();
    res.json(users);
});
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ username: req.params.username })
        .populate('posts');
    res.json(user);
});
/*export const createUser =  async (req: Request, res: Response)=>{
    const newUser = new User(req.body);
    await newUser.save();
    res.json({data: newUser});
}*/
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield express_validator_1.check('posts').isEmpty().run(req);
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { username } = req.params;
    const user = yield User_1.default.findOneAndUpdate({ username }, req.body, { new: true });
    if (!user) {
        return res.status(404).json({ response: 'Username no valid' });
    }
    res.json(user);
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const user = yield User_1.default.findOneAndDelete({ username });
    if (!user) {
        return res.status(404).send('Username no valid');
    }
    res.status(200).json({ response: 'User Deleted successfully' });
});
//# sourceMappingURL=user.controller.js.map