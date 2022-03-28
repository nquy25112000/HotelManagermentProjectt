import { RoleService } from '../Services/Role'
import { Request, Response, NextFunction } from 'express';

const service = new RoleService();

export class RoleController {

    public findAllRole = async (req: Request, res: Response, next: NextFunction) => {
        const result = await service.findAll();
        res.status(200).json(result)
    }

    public createRole = async (req: Request, res: Response, next: NextFunction) => {
        const item = req.body
        const result = await service.create(item);
        if (!result) {
            res.status(500)
        }
        res.status(201).json({ messager: "sucsess" })
    }

}


