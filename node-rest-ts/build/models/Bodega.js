"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BodegaSchema = new mongoose_1.Schema({
    user: {
        type: new mongoose_1.Schema({
            name: String,
            username: String
        }),
        ref: 'User',
        required: true
    },
    ruc: String,
    address: String,
    latitude: Number,
    longitude: Number,
    name: { type: String, required: true },
    celphone: { type: String, min: 9 },
    phone: String,
    image: String,
    status: Boolean,
    createAt: { type: Date, default: Date.now() },
    upadteAt: Date
});
exports.default = mongoose_1.model('Bodega', BodegaSchema);
//# sourceMappingURL=Bodega.js.map