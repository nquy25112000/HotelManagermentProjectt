"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const Role_1 = require("../Controllers/Role");
const body_parser_1 = __importDefault(require("body-parser"));
const Controller = new Role_1.RoleController();
class RoleRouter {
    constructor() {
        this.RoleRouter = (0, express_2.Router)();
        this.routers();
        this.config();
    }
    routers() {
        this.RoleRouter.get('/getAll', Controller.findAllRole);
        this.RoleRouter.post('/create', Controller.createRole);
    }
    config() {
        this.RoleRouter.use(express_1.default.json());
        this.RoleRouter.use(body_parser_1.default.urlencoded({ extended: true }));
    }
}
exports.RoleRouter = RoleRouter;
