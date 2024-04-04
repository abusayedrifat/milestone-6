const arr = [2, 3, 4, 5, 6];


// for (const arrray of arr) {
//     const result = arrray*2;
//     console.log(result);
// }

 //-------------------------------
// function  doubleIt(num) {
//     return num*2
// }
// const result = arr.map(doubleIt)
// console.log(result);
//------------------------------------

// const doubleIt = num => num*2 //arrow dunction
// const result = arr.map(doubleIt)// call back the function
// console.log(result);

//------------------------------------------

const result = arr.map( num => num * 2 );
console.log(result);


//=====================================================//

const friends = ['rifat', 'emon', 'arju', 'roni', 'shawon']

const output = friends.map(frnd => frnd.length);
console.log(output);

const output2 = friends.map(friend => friend[0]);
console.log(output2);











