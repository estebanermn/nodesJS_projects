import {Request, Response } from 'express';
import Bodega from '../models/Bodega';
import User from '../models/User';

export const getAllBodega =  async (req: Request, res:Response)=>{
    const bodegas = await Bodega.find();
    res.json(bodegas);
}


export const createBodega = async (req: Request, res: Response)=>{
    
    // await check('title').isLength({min: 5}).run(req);

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }

    const user = await User.findById(req.body.userId)
    if(!user) return res.status(400).send('Usuario no existe')

    const {ruc , address, latitude, longitude,
    name, celphone, phone, image, status} = req.body;
    const newBodega = new Bodega({
        user:{
            _id: user._id,
            name: user.name,
            username: user.username 
        },
        ruc , address, latitude, longitude,
         name, celphone, phone, image, status
    });
    await newBodega.save();
    res.json({data: newBodega});
}