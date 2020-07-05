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
exports.createBodega = exports.getAllBodega = void 0;
const Bodega_1 = __importDefault(require("../models/Bodega"));
const User_1 = __importDefault(require("../models/User"));
exports.getAllBodega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodegas = yield Bodega_1.default.find();
    res.json(bodegas);
});
exports.createBodega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // await check('title').isLength({min: 5}).run(req);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }
    const user = yield User_1.default.findById(req.body.userId);
    if (!user)
        return res.status(400).send('Usuario no existe');
    const { ruc, address, latitude, longitude, name, celphone, phone, image, status } = req.body;
    const newBodega = new Bodega_1.default({
        user: {
            _id: user._id,
            name: user.name,
            username: user.username
        },
        ruc, address, latitude, longitude,
        name, celphone, phone, image, status
    });
    yield newBodega.save();
    res.json({ data: newBodega });
});
//# sourceMappingURL=bodega.controller.js.map