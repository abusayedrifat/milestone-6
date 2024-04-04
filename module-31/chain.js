//get only price of msai stealth in output

const products = {
    count: 5000,
    data: [
        {id:1 , name:'lenovo laptop', price:70000 },
        {id:1 , name:'MSI raider', price:120000 },
        {id:1 , name:'MSI Stealth', price:520000 }
    ],
    quantuty: ['msi : 200', 'lenovo: 500']
}

const output = products.data[2].price;
console.log(output);


//much complex variable. find gen: 14th in output
const allProduct = {
    laptopBrand:['Lenevo', 'MSI', 'ROG Strix', 'Apple'],
    laptops:[
        {id:1, brand:'lenovo', model:'ideapad Gaming', price:130000, specification : {
            ram:['8gb', '16gb', '32gb'],
            cpu:[
                {brand: 'Intel' , processor:[ 
                    {name:'intel', gen:'12th', model:'i9'},
                    {name:'intel', gen:'13th', model:'i9'},
                    {name:'intel', gen:'14th', model:'i9'},
                ]},
                {brand: 'AMD' , processor:[ 
                    {name:'AMD', model:'5600HS'},
                    {name:'AMD', model:'7800HX'},
                    {name:'AMD', model:'ThreadRipper X9'},
                ]}

            ]

        }},

        {id:2, brand:'MSI', model:' GF 63 10UC', price: 520000 , specification:['64gb ram', '2TB SSD']}

    ],
 color: 'gray'
  
}
// const output2 = allProduct.laptops[0].specification.cpu[0].processor[2].gen
// console.log(output2);

// console.log(allProduct.laptopBrand[0].specification.cpu[0].processor.gen); //i made mistake here.
console.log(allProduct.laptopBrand[0].specification?.cpu[0].processor.gen);//optional chain