"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepository = void 0;
const Role_1 = require("../../Models/Role");
const KnexRepository_1 = require("../KnexRepository");
const role = new Role_1.Role();
class RoleRepository extends KnexRepository_1.KnexRepository {
    constructor() {
        super(role.tableName);
    }
}
exports.RoleRepository = RoleRepository;
