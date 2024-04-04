const max = Math.max(6,34,56,12,34,23,88,3,55);
console.log(max);

const numbers = [2, 4, 5, 6 ,23, 43, 96, 55, 79, 23, 44, 55, 12, 21];
const getMaxNumber = Math.max(...numbers);
// console.log(...numbers);
console.log(getMaxNumber);

//spread operator to copy
const friends = [4,5,6,7];
const bondhu = friends;
// bondhu.push(34);
// console.log(friends);
// console.log(bondhu);
const dosto = [...friends];//copy
console.log(dosto);
friends.push(120,20,300);
console.log(dosto);
console.log(friends);

//advanced
const songkha = [12,23,34,...friends, 700, 23,34]//add extra elemt while copy
console.log(songkha);










