const user = {id:1, name: 'abu sayed', job:'voboghure'};
//JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address:{
        street: 'bancharampur',
        city:'brahmanbaria',
        country:'bangladesh'
    },
    products: ['laptop', 'desktop', 'table', 'mouse', 'keyboard'],
    revenue: 450000,
    isOpen:true,
    isNew:false,

};

console.log(shop);
const shopJSON = JSON.stringify(shop)


