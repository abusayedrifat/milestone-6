const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    console.log(product , quantity);
    displayProduct(product, quantity);

    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product , quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity} `;
    ul.appendChild(li);

}

const getStoredShoppingCart = () =>{
      const storedCart = localStorage.getItem('cart');
      let cart = {};
      if (storedCart) {
        cart = JSON.parse(storedCart);
      }
      return cart

}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringifiy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringifiy)
}

const displayProctsFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);

    for(const product in savedCart){
        const quantity = savedCart[product];
   
        console.log(product, quantity);
        displayProduct(product,quantity)
    }
}
displayProctsFromLocalStorage()

