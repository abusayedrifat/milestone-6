/**
 * 8 ways to get undefined

1.variable that is not initialized
2.function with no return
3.parameter is not passed
4. if return has nothing on the right side will return undefined
5.property that doesn't exists on an object will give an undefined
6. accessing array elements outside of the index range 
7.deleting an array inside an array craets a hole.

*/

let first
// console.log(first);

//----------------------------------------
function second(a,b) {
    const total = a+b;
}
// console.log( second());
//---------------------------------------

function third(a,b,c,d) {
    const total = a+b+c+d;
    // console.log(a,b,c,d);
}
third(2,5)
//---------------------------------------

function fourth(a,b) {
    if (a < 0 || b < 0) {
        return
    }
    return a+b;
}
// console.log(fourth(-3,5));
//---------------------------------------

const fifth = {id:1, name:'MSI', price:23490};
// console.log(fifth.model);

//-----------------------------------------

const sixth = [2, 3, 4, 8];
// console.log(sixth[5]);
delete sixth[2];//we shoundn't use that
console.log(sixth);









