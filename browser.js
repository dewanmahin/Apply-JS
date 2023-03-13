// ===================================================
// Add product in localStorage and Display data on ui
// ===================================================
// ========== HTML ==========
/*  
<input id="product-name-field" type="text" placeholder="Name">
<input id="product-quantity-field" type="text" placeholder="Quantity">
<button onclick="addProduct()" id="add-product">Add Product</button>
<br>
<ol id="product-container">
        
</ol>
*/

// ========== JS ==========
const getInputValue = id => {
    return document.getElementById(id).value;
}

const addProduct = () => {
    const productName = getInputValue('product-name-field');
    const productQuantity = getInputValue('product-quantity-field');

        // set to local storage in a simple way
    // localStorage.setItem(productName, productQuantity);
        // display product
    addProductToDisplay(productName, productQuantity);
    saveItemLocalStorage(productName, productQuantity);
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveItemLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)

    // save to localStorage
    localStorage.setItem('cart', cartStringified);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    productContainer.appendChild(li);
}

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        addProductToDisplay(product, quantity);
    }
}
displayStoredProducts();