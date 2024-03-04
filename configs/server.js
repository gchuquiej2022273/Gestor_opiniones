'use strict'

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnection } from "./mongo.js";
import userRouter from "../src/user/user.routes.js"
import authRouter from "../src/auth/auth.routes.js"
import postRouter from "../src/post/post.routes.js"


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/GestorOpiniones/v1/users';
        this.authPath = '/GestorOpiniones/v1/auth';
        this.postPath = '/GestorOpiniones/v1/post'

        this.middlewares();
        this.dbConnection();
        this.routes();
    }

    async dbConnection(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }
    
    routes(){
        this.app.use(this.userPath, userRouter);
        this.app.use(this.authPath, authRouter);
        this.app.use(this.postPath, postRouter);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }
}

export default Server;