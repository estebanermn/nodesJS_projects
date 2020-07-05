import {Router} from 'express';

import {TokenValidation} from '../libs/verifyToken'
import {signup, signin, profile, testing} from '../controllers/auth.controller'

class Auth{
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
           
        this.router.post('/signup', signup);
        this.router.post('/signin', signin);

        this.router.get('/profile', TokenValidation, profile);
        this.router.get('/testing', TokenValidation, testing); 
    }
}
const authRoutes = new Auth();
export default authRoutes.router;