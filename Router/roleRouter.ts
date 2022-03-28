import express from 'express';
import { Router } from "express";
import { RoleController } from "../Controllers/Role"
const bodyParser = require('body-parser');


const roleController = new RoleController();


export class RoleRouter {
    public RoleRouter: Router;

    constructor() {
        this.RoleRouter = Router();
        this.routers();
        this.config();
    }

    routers() {
        this.RoleRouter.get('/findall', roleController.findAllRole);
        this.RoleRouter.post('/create', roleController.createRole);


    }
    public config(): void {
        this.RoleRouter.use(express.json());
        this.RoleRouter.use(bodyParser.urlencoded({ extended: true }));
    }
}