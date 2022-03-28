"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const Users_1 = require("../../Models/Users");
const KnexRepository_1 = require("../KnexRepository");
const users = new Users_1.Users();
class UsersRepository extends KnexRepository_1.KnexRepository {
    constructor() {
        super(users.tableName);
    }
}
exports.UsersRepository = UsersRepository;
