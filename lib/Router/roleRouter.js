"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const Role_1 = require("../Controllers/Role");
const bodyParser = require('body-parser');
const roleController = new Role_1.RoleController();
class RoleRouter {
    constructor() {
        this.RoleRouter = (0, express_2.Router)();
        this.routers();
        this.config();
    }
    routers() {
        this.RoleRouter.get('/findall', roleController.findAllRole);
        this.RoleRouter.post('/create', roleController.createRole);
    }
    config() {
        this.RoleRouter.use(express_1.default.json());
        this.RoleRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}
exports.RoleRouter = RoleRouter;
