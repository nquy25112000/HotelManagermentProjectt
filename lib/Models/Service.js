"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const connect_1 = require("../Config/connect");
const bookshelf_1 = __importDefault(require("bookshelf"));
const ServiceOrders_1 = require("./ServiceOrders");
const knex = new connect_1.Connect().knex;
const bookshelf = (0, bookshelf_1.default)(knex);
class Service extends bookshelf.Model {
    get tableName() { return 'service'; }
    serviceOrders() {
        return this.hasMany(ServiceOrders_1.ServiceOrders, 'serviceId');
    }
}
exports.Service = Service;
