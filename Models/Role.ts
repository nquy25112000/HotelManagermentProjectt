import { Connect } from '../Config/connect'
import Bookshelf from 'bookshelf';
import { Users } from './Users'


const knex = new Connect().knex;
const bookshelf = Bookshelf(knex)

export class Role extends bookshelf.Model<Role> {
    get tableName() { return 'role'; }

    users(): Bookshelf.Collection<Users> {
        return this.hasMany(Users, 'roleId');
    }

}
