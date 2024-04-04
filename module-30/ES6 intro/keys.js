const car = {
    brandName:'lamborghini',
    model:'SVJ Roadster Aventador',
    engine:'V12 5.0L- 750 hp',
    speed:'325 km/h'
}
// console.log(car);

const keys = Object.keys(car)
// console.log(keys);
// [ 'brandName', 'model', 'engine', 'speed' ]

const values = Object.values(car);
// console.log(values);
// [
//     'lamborghini',
//     'SVJ Roadster Aventador',
//     'V12 5.0L- 750 hp',
//     '325 km/h'
//   ]

const pair = Object.entries(car);
// console.log(pair);
// [
//     [ 'brandName', 'lamborghini' ],
//     [ 'model', 'SVJ Roadster Aventador' ],
//     [ 'engine', 'V12 5.0L- 750 hp' ],
//     [ 'speed', '325 km/h' ]
//   ]

//we can delete an element from an object
delete car.speed;
console.log(car);

//------------------------------------------//
//we can also do it by destructuring method

const {speed, ...hideCar} = car;
// console.log(car);

//freeze
Object.freeze(car);//freeze kore rakhle kono kichu change hoy na
car.price = 500000;//add
delete car.brandName ;//delete
// console.log(car);
console.log(car);

//-------------------------------//
Object.seal(car);
