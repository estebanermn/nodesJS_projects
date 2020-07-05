"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodega_controller_1 = require("../controllers/bodega.controller");
class BodegaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', bodega_controller_1.getAllBodega);
        this.router.post('/', bodega_controller_1.createBodega);
    }
}
const bodegaRoutes = new BodegaRoutes();
exports.default = bodegaRoutes.router;
//# sourceMappingURL=BodegaRoutes.js.map