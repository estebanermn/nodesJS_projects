import {Router} from 'express';
import {getAllUsers, getUser, updateUser, deleteUser} from '../controllers/user.controller'
// import {getAllUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/user.controller'
import {TokenValidation} from '../libs/verifyToken'

class UserRoutes{
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/',TokenValidation, getAllUsers);
        // this.router.get('/', getAllUsers);
        this.router.get('/:username', getUser);
        //this.router.post('/', createUser);
        this.router.put('/:username', updateUser);
        this.router.delete('/:username', deleteUser);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;