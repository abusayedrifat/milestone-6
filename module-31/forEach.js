//===========(.forEach)===============//

const numbers = [23, 34, 2, 5, 67, 75, 88];

const result = numbers.forEach(n => n);
console.log(result); // undefined because " forEach" doesn't return any value.

//==========(.filter)==========//

const numbers2 = [2, 4, 3, 56, 67, 34,33, 45, 22]

const filterEven = numbers2.filter(num => num % 2 === 0);
const filterBigNumber = numbers2.filter( num => num > 80);
console.log(filterBigNumber);
console.log(filterEven);

const friends = ['rifat', 'shawon', 'tanvir', 'hasib', 'emon', 'sadi'] ;

const filterFriend = friends.filter(frnd => frnd.length >= 5 );
console.log(filterFriend);

//===========(.find)===============//

const numbers3 = [2, 4, 3, 56, 67, 34,33, 45, 22];

// const findNumbers = numbers3.find(num => num > 30);
const findNumbers = numbers3.find(num => num > 80);
console.log(findNumbers);


//==============(.reduce)==============//

const numbers4 = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

const total = numbers4.reduce( (previous , current) => previous+current , 0)
console.log(total);


