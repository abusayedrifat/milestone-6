const numbers = [2, 4, 7, 78, 34]
// for(i = 0 ; i < numbers.length ; i++)

for (const number of numbers) {
    console.log(number);
}

const Name = 'abu sayed rifat'

for (const names of Name) {
    console.log(names);
}

const car = {
    brandName:'lamborghini',
    model:'SVJ Roadster Aventador',
    engine:'V12 5.0L- 750 hp',
    speed:'325 km/h'
};
// for (const key of car) { // we can't use for of loop for an object
//     console.log(key);
// }

for(const key in car){
  const values = car[key];
  console.log(key, values);
}

//optional

const keys = Object.keys(car);

for (const key of keys) {

    console.log(key);
}





