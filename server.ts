import express from 'express';
import { RoleRouter } from './Router/roleRouter';
const bodyParser = require('body-parser');

class Server {
    public app: express.Application
    PORT: number = 3000;

    constructor() {
        this.app = express();
        this.config();
        this.router();
        this.start();
    }


    public config(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }

    public router(): void {
        this.app.use('/api/role', new RoleRouter().RoleRouter)

    }
    public start(): void {
        this.app.listen(3000, () => {
            console.log(`server running at port: ${this.PORT}`);
        });
    }
}

new Server();
