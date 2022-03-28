"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roleRouter_1 = require("./Router/roleRouter");
const bodyParser = require('body-parser');
class Server {
    constructor() {
        this.PORT = 3000;
        this.app = (0, express_1.default)();
        this.config();
        this.router();
        this.start();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    router() {
        this.app.use('/api/role', new roleRouter_1.RoleRouter().RoleRouter);
    }
    start() {
        this.app.listen(3000, () => {
            console.log(`server running at port: ${this.PORT}`);
        });
    }
}
new Server();
