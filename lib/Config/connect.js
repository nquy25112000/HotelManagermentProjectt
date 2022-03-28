"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
class Connect {
    constructor() {
        this.knex = require('knex')({
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'testhotel',
                charset: 'utf8'
            }
        });
    }
}
exports.Connect = Connect;
