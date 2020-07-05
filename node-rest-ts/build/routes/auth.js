"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../libs/verifyToken");
const auth_controller_1 = require("../controllers/auth.controller");
class Auth {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/signup', auth_controller_1.signup);
        this.router.post('/signin', auth_controller_1.signin);
        this.router.get('/profile', verifyToken_1.TokenValidation, auth_controller_1.profile);
        this.router.get('/testing', verifyToken_1.TokenValidation, auth_controller_1.testing);
    }
}
const authRoutes = new Auth();
exports.default = authRoutes.router;
//# sourceMappingURL=auth.js.map