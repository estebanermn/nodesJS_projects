import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import indexRoutes from './routes/indexRoutes';
import AuthRoutes from './routes/AuthRoutes';
import UserRoutes from './routes/UserRoutes';
import PostsRoutes from './routes/PostsRoutes';
import BodegaRoutes from './routes/BodegaRoutes';


import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';


class Server{
    public app: express.Application;
    
    constructor()
    {
        this.app = express();
        this.config();
        this.routes();
        
    }

    config(){
        const MONGO_URI = 'mongodb://localhost/restapi';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        .then(db => console.log('DB is connected'))
        .catch(err => console.log(err));

        //Settings
        this.app.set('port', process.env.PORT || 3000);
       
        //Middleware
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/auth', AuthRoutes);
        this.app.use('/api/users',UserRoutes);
        this.app.use('/api/posts',PostsRoutes);
        this.app.use('/api/bodega',BodegaRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();