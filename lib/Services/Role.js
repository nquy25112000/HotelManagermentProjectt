"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const Role_1 = require("../Repositories/Repository/Role");
const Repository = new Role_1.RoleRepository();
class RoleService {
    constructor() {
        this.getRoles = () => __awaiter(this, void 0, void 0, function* () {
            const rs = yield Repository.findAll();
            return rs;
        });
        this.createRoles = (item) => __awaiter(this, void 0, void 0, function* () {
            const rs = yield Repository.create(item);
            return rs;
        });
    }
}
exports.RoleService = RoleService;
