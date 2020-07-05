import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document{
    name: string;
    email:string;
    username: string;
    password:string;
    encryptPassword(password: string): Promise<string>;
    validatePassword(oassword: string): Promise<boolean>;   
}

const userSchema = new Schema({
    name: {type:String, required: true},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true},
    username:{type:String, required:true, unique: true, minlength:4,
        lowercase: true},
    createAt:{type:Date, default:Date.now()},
    posts:[
        {   
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});


userSchema.methods.encryptPassword = async(password: string): Promise<string> =>{
    const salt = await  bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function(password: string): Promise<boolean>{
    return await bcrypt.compare(password, this.password);
}

export default model<IUser>('User', userSchema);