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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelController = void 0;
const Hotel_1 = require("../Services/Hotel");
const uuid_1 = require("uuid");
const service = new Hotel_1.HotelService();
class HotelController {
    constructor() {
        this.findAllRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield service.getHotel();
            res.status(200).json(result);
        });
        this.createRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const item = req.body;
            item.id = (0, uuid_1.v4)();
            yield service.createHotel(item);
            res.status(201).json({ messager: "sucsess" });
        });
    }
}
exports.HotelController = HotelController;
