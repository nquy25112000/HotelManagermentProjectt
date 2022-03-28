"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Role_1 = require("./Router/Role");
const Users_1 = require("./Router/Users");
const Hotel_1 = require("./Router/Hotel");
const body_parser_1 = __importDefault(require("body-parser"));
const roleRouter = new Role_1.RoleRouter();
const usersRouter = new Users_1.UsersRouter();
const holtelRouter = new Hotel_1.HotelRouter();
class Server {
    constructor() {
        this.PORT = 3000;
        this.app = (0, express_1.default)();
        this.config();
        this.router();
        this.start();
    }
    config() {
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    router() {
        this.app.use('/role', roleRouter.RoleRouter);
        this.app.use('/users', usersRouter.UsersRouter);
        this.app.use('/hotel', holtelRouter.HotelRouter);
    }
    start() {
        this.app.listen(3000, () => {
            console.log(`server running at port: ${this.PORT}`);
        });
    }
}
new Server();
