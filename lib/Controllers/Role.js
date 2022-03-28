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
exports.RoleController = void 0;
const Role_1 = require("../Services/Role");
const service = new Role_1.RoleService();
class RoleController {
    constructor() {
        this.findAllRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield service.findAll();
            res.status(200).json(result);
        });
        this.createRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const item = req.body;
            const result = yield service.create(item);
            if (!result) {
                res.status(500);
            }
            res.status(201).json({ messager: "sucsess" });
        });
    }
}
exports.RoleController = RoleController;
