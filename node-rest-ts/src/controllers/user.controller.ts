import {Request, Response} from 'express';
import {check, validationResult} from 'express-validator';
import User  from '../models/User';

export const getAllUsers  =  async (req: Request, res:Response)=>{
    const users = await User.find();
    res.json(users);
}

export const getUser = async (req: Request, res: Response)=>{
    const user =  await User.findOne({username:req.params.username})
    .populate('posts');
    res.json(user);
}

/*export const createUser =  async (req: Request, res: Response)=>{
    const newUser = new User(req.body);
    await newUser.save();
    res.json({data: newUser});
}*/

export const updateUser = async (req:Request, res:Response)=>{
    await check('posts').isEmpty().run(req);
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {username} = req.params;
    const user = await User.findOneAndUpdate({username}, req.body, {new: true});

    if(!user){
        return res.status(404).json({response: 'Username no valid'});
    }
    res.json(user);
}

export const deleteUser = async (req:Request, res:Response)=>{
    const {username} = req.params;
    const user = await User.findOneAndDelete({username});

    if(!user){
        return res.status(404).send('Username no valid');
    }

    res.status(200).json({response: 'User Deleted successfully'});
}