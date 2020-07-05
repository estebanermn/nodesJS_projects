import {Router} from 'express';
import {getAllBodega, createBodega} from '../controllers/bodega.controller'

class BodegaRoutes{
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    
    }

    routes(){
        this.router.get('/', getAllBodega);
        this.router.post('/', createBodega);
        
    }
}

const bodegaRoutes = new BodegaRoutes();
export default bodegaRoutes.router;