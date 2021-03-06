import { Repository } from './Repository'
import { Connect } from '../Config/connect'
const knex = new Connect().knex;

export abstract class KnexRepository<T> implements Repository<T> {
    constructor(
        public tableName: string
    ) { this.tableName = tableName; }

    delete(id: string): Promise<boolean> {
        return knex(this.tableName)
            .where('uuid', id)
            .del()
    }
    findAll(): Promise<boolean> {
        return knex(this.tableName)
            .select()
    }
    create(item: T[]): Promise<T[]> {
        return knex(this.tableName)
            .insert(item)
    }
    update(id: string, item: T[]): Promise<T[]> {
        return knex(this.tableName)
            .where('uuid', '=', id)
            .update(item)
    }
    findOne(id: string): Promise<boolean> {
        return knex(this.tableName)
            .where({
                uuid: id
            })
            .select()
    }
    findItem(item: Partial<T>): Promise<T[]> {
        return knex(this.tableName)
            .where(item)
            .select()
    }
}