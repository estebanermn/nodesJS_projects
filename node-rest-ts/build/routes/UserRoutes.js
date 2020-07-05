"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
// import {getAllUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/user.controller'
const verifyToken_1 = require("../libs/verifyToken");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', verifyToken_1.TokenValidation, user_controller_1.getAllUsers);
        // this.router.get('/', getAllUsers);
        this.router.get('/:username', user_controller_1.getUser);
        //this.router.post('/', createUser);
        this.router.put('/:username', user_controller_1.updateUser);
        this.router.delete('/:username', user_controller_1.deleteUser);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=UserRoutes.js.map