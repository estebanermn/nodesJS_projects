import {Schema, model}from 'mongoose';

const BodegaSchema = new Schema({
    user:{
        type:  new Schema(
            {
                name: String, 
                username: String
            }),
        ref: 'User',
        required: true
    },
    ruc: String,
    address: String,
    latitude:Number,
    longitude:Number,
    name:{type:String, required: true},
    celphone:{type:String, min: 9 },
    phone:String,
    image: String,
    status: Boolean,
    createAt:{type: Date, default: Date.now()},
    upadteAt:Date
})

export default model('Bodega', BodegaSchema);