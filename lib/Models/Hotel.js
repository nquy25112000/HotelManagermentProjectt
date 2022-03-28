"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
const connect_1 = require("../Config/connect");
const bookshelf_1 = __importDefault(require("bookshelf"));
const Users_1 = require("./Users");
const Room_1 = require("./Room");
const Service_1 = require("./Service");
const knex = new connect_1.Connect().knex;
const bookshelf = (0, bookshelf_1.default)(knex);
class Hotel extends bookshelf.Model {
    get tableName() { return 'hotel'; }
    users() {
        return this.hasMany(Users_1.Users, 'hotelId');
    }
    room() {
        return this.hasMany(Room_1.Room, 'idHotel');
    }
    service() {
        return this.hasMany(Service_1.Service, 'idHotel');
    }
}
exports.Hotel = Hotel;
