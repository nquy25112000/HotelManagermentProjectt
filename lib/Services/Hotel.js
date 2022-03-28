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
exports.HotelService = void 0;
const Hotel_1 = require("../Repositories/Repository/Hotel");
const Repository = new Hotel_1.HotelRepository();
class HotelService {
    constructor() {
        this.getHotel = () => __awaiter(this, void 0, void 0, function* () {
            const rs = yield Repository.findAll();
            return rs;
        });
        this.createHotel = (item) => __awaiter(this, void 0, void 0, function* () {
            const rs = yield Repository.create(item);
            return rs;
        });
    }
}
exports.HotelService = HotelService;
