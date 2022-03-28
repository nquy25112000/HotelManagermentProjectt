import { Connect } from '../Config/connect'
import Bookshelf from 'bookshelf';


const knex = new Connect().knex;
const bookshelf = Bookshelf(knex)

export class Users extends bookshelf.Model<Users> {

    get tableName() { return 'users'; }


    bookrome(): Bookshelf.Collection<Users> {
        return this.hasMany(Users, 'roleId');
    }
}
