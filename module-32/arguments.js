//argument is an array like object. so you can't push any elements


function sum(a, b, c) {
    console.log(arguments);
    console.log(...arguments);
    const result = a+b+c;
    return result;
}

const total = sum(5, 6, 7, 45, 26, 58, 77);
console.log(total );