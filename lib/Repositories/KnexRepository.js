"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexRepository = void 0;
const connect_1 = require("../Config/connect");
const knex = new connect_1.Connect().knex;
class KnexRepository {
    constructor(tableName) {
        this.tableName = tableName;
        this.tableName = tableName;
    }
    delete(id) {
        return knex(this.tableName)
            .where('uuid', id)
            .del();
    }
    findAll() {
        return knex(this.tableName)
            .select();
    }
    create(item) {
        return knex(this.tableName)
            .insert(item);
    }
    update(id, item) {
        return knex(this.tableName)
            .where('uuid', '=', id)
            .update(item);
    }
    findOne(id) {
        return knex(this.tableName)
            .where({
            uuid: id
        })
            .select();
    }
    findItem(item) {
        return knex(this.tableName)
            .where(item)
            .select();
    }
}
exports.KnexRepository = KnexRepository;
