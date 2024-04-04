//set default value of parameter

// function addition(num1, num2 = []) {
//     const result = num1+num2;
//     console.log(num1, num2);
//     return result
// }
// const input = addition(3, [2,3,4]);
// console.log(input);


const num1 = 10;
const num2 = 11;

// const dynamicString = 'hi my nam\ne is \n'+ 'abu sayed rifat ' + (num1+num2);
const dynamicString = ` hi my name is abu sayed rifat. and I am ${num1+num2} years old `

console.log(dynamicString);



function add(a,b) {
    return a+b
}
// function expression
const add2 = function (a,b) {
    return a + b ;
}

//arrow funvtion 
const add3 = (a,b) => a+b;

const add4 = (num1,num2,num3,num4) => num1+num2+num3+num4;







