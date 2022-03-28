import { Role } from '../Models/Role'
import { KnexRepository } from '../Repositories/KnexRepository'
import { Connect } from '../Config/connect'

const knex = new Connect().knex;


export class RoleService extends KnexRepository<Role> {
    constructor() {
        super('role')
    }


}
