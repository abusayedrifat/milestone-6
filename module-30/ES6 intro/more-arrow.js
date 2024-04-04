
const mult  = (x,y,z) => x*y*z ;

//===================(single parameter)=============================//
const getAge = (person) => person.age
const student = {name:'abu sayed', age:21, weight:'60kg'}
console.log(getAge(student));

//==========================================//
const getNumber = number => number[2];//single parameter hole bracket charao likha jay
// const array = [2,3,4,5];
// console.log(getNumber(array));
//-------     -------       -------//
const array = getNumber([2,3,4,5]);
console.log(array);
//===============(no parameter)====================//

const getPI = () => Math.PI;
console.log(getPI());

//================(large parameter)================//
//if you want to get anything returned from that function then you have to use return function

const doMath = (x,y,z) =>{
    const sum =x+y+z;
    const mult = x*y*z;

    const math = mult / sum;
return math

}
console.log(doMath(3,3,6));





