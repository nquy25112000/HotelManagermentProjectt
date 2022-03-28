"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const connect_1 = require("../Config/connect");
const bookshelf_1 = __importDefault(require("bookshelf"));
const BookRoom_1 = require("./BookRoom");
const knex = new connect_1.Connect().knex;
const bookshelf = (0, bookshelf_1.default)(knex);
class Room extends bookshelf.Model {
    get tableName() { return 'Room'; }
    bookrome() {
        return this.hasMany(BookRoom_1.BookRoom, 'roomId');
    }
}
exports.Room = Room;
