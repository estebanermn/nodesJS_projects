const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carsdb', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('Conectado correctamente a MongoDb'))
    .catch(()=>console.log('Error al conectarse a MongoDb'))

const carSchema = new mongoose.Schema({
    company: String,
    model: String,
    price:Number,
    year: Number,
    sold: Boolean,
    extras:[String],
    date:{type: Date, default: Date.now}
})

const Car = mongoose.model('car',carSchema)

deleteCar('5ec15c4d60d5d4224c522fd5')
async function deleteCar(id){
    const result = await Car.deleteOne({_id:id})
    console.log(result)
}

// updateFirstCar('5ec16237f59c6e4e4877e745')
async function updateFirstCar(id){
    const result = await Car.update(
        {_id: id},
        {
            $set:{
                company: 'Seat',
                model: 'Leon',
                price: 250000
            }
        }
    )
    console.log(result)
}


// updateCar('5ec158a1456a143d6ce232f2')
async function updateCar(id){
    const car = await Car.findById(id)
    if(!car) return

    car.company = 'Mercedes'
    car.model = 'Clase A'

    const result = await car.save()
    console.log(result)
}

//getPaginationCars()
 async function getPaginationCars(){
     const  pageNumber = 2
     const pageSize = 2

     const cars = await Car
        .find()
        .skip((pageNumber-1)*pageSize)
        .limit(pageSize)

    console.log(cars)

 }

//getCountCar()
async function getCountCar(){
    const cars = await Car
        .find({company: 'Audi'})
        .count()
    console.log(cars)
}


// getFilterPriceAndOrCars()
async function getFilterPriceAndOrCars(){
    const cars = await Car
        .find()
        // .and([{company: 'BWM'}, {model: 'X3'}])
        .or([{company: 'Audi'}, {model: 'X3'}])
    console.log(cars)
}


// getFilterPriceInNinCars()
async function getFilterPriceInNinCars(){
    const cars = await Car
        .find({extras: {$nin:'laser light'}})
        // .find({extras: {$in:'laser light'}})
    
    console.log(cars)
}

// getFilterPriceCars()
async function getFilterPriceCars(){
    const cars = await Car
        .find({price:{$gte:3000 ,$lt: 5000}})
    
    console.log(cars)
}


// getMoreFilterCar()
async function getMoreFilterCar(){
    const cars = await Car
        .find({company: 'BWM', sold: false})
        .sort({price: -1})
        .limit(2)
        // .select({company:1, model:1, price:1})
        .select({company:0})

    console.log(cars)
}

// getCompanyAndSoldFilterCars()
async function getCompanyAndSoldFilterCars(){
    const cars = await Car.find({company: 'BWM', sold: false})
    console.log(cars)
}


// getCars()
async function getCars(){
    const cars = await Car.find()
    console.log(cars)
}

// createCar()
async function createCar(){
    const car = new Car({
        company: 'SEA',
        model: 'Leon',
        price:10000,
        year: 2020,
        sold: false,
        extras:['laser light']
    })

    const result = await car.save()
    console.log(result)
}

