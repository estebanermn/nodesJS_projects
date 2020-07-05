const mongoose = require('mongoose')
const express = require('express')
const app = express()

const car = require('./routes/car')
const user = require('./routes/user')
const company = require('./routes/company')
const sale = require('./routes/sale')
const auth = require('./routes/auth')

const dotenv = require('dotenv')
dotenv.config();

app.use(express.json())
app.use('/api/cars/', car)
app.use('/api/user/', user)
app.use('/api/company/', company)
app.use('/api/sale/', sale)
app.use('/api/auth/', auth)

const port = process.env.PORT || 3003


app.listen(port, (error) => {
    if(error) {
        throw error;
    }

    console.log(`Express server listening on port ${port}`);
});


console.log(process.env.SECRET_JWT)

mongoose.connect('mongodb://localhost/carsdb',{useNewUrlParser:true,
 useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
    .then(()=> console.log('Conectado a MongoDb'))
    .catch(erro => console.log('No se ha conectado a MongoDb'))