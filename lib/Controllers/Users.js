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
exports.UsersController = void 0;
const Users_1 = require("../Services/Users");
const uuid_1 = require("uuid");
const service = new Users_1.UsersService();
class UsersController {
    constructor() {
        this.findAllRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield service.getRoles();
            res.status(200).json(result);
        });
        this.createRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const item = req.body;
            item.id = (0, uuid_1.v4)();
            const roleId = item.roleId;
            const hotelId = item.hotelId;
            if (roleId == '' && hotelId == '') {
                res.status(200).json("Thiếu dữ liệu");
            }
            yield service.createRoles(item);
            res.status(201).json({ messager: "sucsess" });
        });
    }
}
exports.UsersController = UsersController;
