"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const Users_1 = require("../Controllers/Users");
const body_parser_1 = __importDefault(require("body-parser"));
const Controller = new Users_1.UsersController();
class UsersRouter {
    constructor() {
        this.UsersRouter = (0, express_2.Router)();
        this.routers();
        this.config();
    }
    routers() {
        this.UsersRouter.get('/getAll', Controller.findAllRole);
        this.UsersRouter.post('/create', Controller.createRole);
    }
    config() {
        this.UsersRouter.use(express_1.default.json());
        this.UsersRouter.use(body_parser_1.default.urlencoded({ extended: true }));
    }
}
exports.UsersRouter = UsersRouter;
