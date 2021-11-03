// cart 
let cartInfo = document.querySelector('#cart-info');
let cart = document.querySelector('#cart');

cartInfo.addEventListener('click', showHideCart,);


function showHideCart() {
    // console.log(cart);
    cart.classList.toggle('show-cart');
}

// adding items to the cart

let itemsList = document.querySelectorAll('.store-item-icon');

itemsList.forEach((index) => {
    index.addEventListener('click', addProductToCart,);
});

function addProductToCart(event) {
    if (event.target.parentElement.classList.contains('store-item-icon')) {

        let fullImgPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullImgPath.indexOf('img') + 3;
        let partialPath = fullImgPath.slice(pos);

        let items = {};
        items.img = `img-cart${partialPath}`;

        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].innerText;
        items.name = `${name}`;

        let prize = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].children[0].innerText;
        items.prize = `${prize}`;



        let total = document.querySelector('.cart-total-container');
        let divElem = document.createElement('div');

        divElem.classList.add("cart-item", "d-flex", "justify-content-between", "text-capitalize", "my-3");
        divElem.innerHTML = `
        <img src="${items.img}" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="item-text">

          <p id="cart-item-title" class="font-weight-bold mb-0">${items.name}</p>
          <span>$</span>
          <span class="cart-item-price" class="mb-0">${items.prize}</span>
        </div>
        <a href="#" class="cart-item-remove" onclick="deleteItems(this)">
          <i class="fas fa-trash"></i>
        </a>
                            `;

        cart.insertBefore(divElem, total);

        //alert('you are adding this product to your cart');

        // show total Function 

        showTotal();

    }
}

// deleting items from cart

function deleteItems(index) {

    index.parentElement.remove();
    console.log();
    showTotal();

}

// show total function
function showTotal() {

    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach((index) => {
        total.push(parseFloat(index.innerText));
    });
    const totalMoney = total.reduce(function (total, index) {
        total += index;
        return total;
    })

    let totalCountElem = document.querySelector('#item-count');
    let cartTotalCountElem = document.querySelector('#cart-total');
    let totalitemElem = document.querySelector('.item-total');

    totalCountElem.innerText = total.length;
    totalitemElem.innerText = totalMoney;
    cartTotalCountElem.innerText = totalMoney;
    console.log(totalMoney, totalCountElem, totalitemElem);
}


// for practice 

// let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;

// for (const n of myarray) {
//     sum += n;
// }

// console.log(sum);


// let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let sum = 0;

// sum = myarray.reduce((accumelator, initialvalue) => {
//     return initialvalue;

// }, 0);

// console.log(sum);