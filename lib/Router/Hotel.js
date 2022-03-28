"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const Hotel_1 = require("../Controllers/Hotel");
const body_parser_1 = __importDefault(require("body-parser"));
const Controller = new Hotel_1.HotelController();
class HotelRouter {
    constructor() {
        this.HotelRouter = (0, express_2.Router)();
        this.routers();
        this.config();
    }
    routers() {
        this.HotelRouter.get('/getAll', Controller.findAllRole);
        this.HotelRouter.post('/create', Controller.createRole);
    }
    config() {
        this.HotelRouter.use(express_1.default.json());
        this.HotelRouter.use(body_parser_1.default.urlencoded({ extended: true }));
    }
}
exports.HotelRouter = HotelRouter;
