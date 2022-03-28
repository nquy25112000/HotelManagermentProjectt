"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const KnexRepository_1 = require("../Repositories/KnexRepository");
const connect_1 = require("../Config/connect");
const knex = new connect_1.Connect().knex;
class RoleService extends KnexRepository_1.KnexRepository {
    constructor() {
        super('role');
    }
}
exports.RoleService = RoleService;
