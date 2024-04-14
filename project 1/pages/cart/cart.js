let cart = document.querySelector('.cart');
let cartItem = JSON.parse(localStorage.getItem('cartItems'));
let total = document.querySelector('.total');

function saveData(item) {
    localStorage.setItem('cartItems', JSON.stringify(item));
}

function get(item) {
    cart.innerHTML = '';
    item.forEach((ele, i) => {
        let main_div = document.createElement('div');
        let img = document.createElement('img');
        let title = document.createElement('p');
        let description = document.createElement('p');
        let price = document.createElement('p');
        let btn = document.createElement('button');

        img.src = ele.img;
        title.innerText = ele.title;
        description.innerText = ele.description;
        price.innerText = `₹ ${ele.price}`;
        btn.innerText = 'Remove';

        img.style.width = '100%';
        title.style.fontWeight = '600';
        description.style.fontSize = '14px'; 
        description.style.color = 'grey';
        price.style.fontSize = '20px';
        price.style.color = 'green';
        price.style.fontWeight = '600';
        btn.style.width = '100%';

        main_div.append(img, title, description, price, btn);
        cart.appendChild(main_div);

        btn.addEventListener('click', function () {
            handleDelete(ele);
        });
    });
}

function handleDelete(item) {
    let store = JSON.parse(localStorage.getItem('cartItems'));
    if (store) {
        const index = store.findIndex((ele) => ele.title === item.title);
        if (index !== -1) {
            store.splice(index, 1);
            saveData(store);
            get(store);
           
            CalculateTotal(store);
        }
    }
}

get(cartItem);

function CalculateTotal(item) {
    total.innerHTML = ''; 
    let totalPrice = 0;
    item.forEach((ele, i) => {
        let row = document.createElement('tr');
        let itemNameCell = document.createElement('td');
        let priceCell = document.createElement('td');
        let truncatedName = ele.title.split(' ').slice(0, 2).join(' '); 
        itemNameCell.innerText = truncatedName.length > 30 ? truncatedName.substring(0, 30) + '...' : truncatedName; // Truncate if longer than 30 characters
        itemNameCell.setAttribute('id', `item-name-${i}`); 
        priceCell.innerText = `₹ ${ele.price}`;
        priceCell.setAttribute('id', `item-price-${i}`); 
        totalPrice += parseFloat(ele.price);
        row.appendChild(itemNameCell);
        row.appendChild(priceCell);
        total.appendChild(row);
    });

    // Display total at the end
    let totalRow = document.createElement('tr');
    let totalLabelCell = document.createElement('td');
    let totalPriceCell = document.createElement('td');
    let getOrder = document.createElement('button'); 
    totalLabelCell.innerText = 'Total';
    totalLabelCell.setAttribute('id', 'total-label'); 
    totalPriceCell.innerText = `₹ ${totalPrice}`;
    totalPriceCell.setAttribute('id', 'total-price'); 
    getOrder.innerText = 'Get your Order'; 
    totalRow.appendChild(totalLabelCell);
    totalRow.appendChild(totalPriceCell);
    total.appendChild(totalRow);

    
    total.appendChild(getOrder);
getOrder.addEventListener('click',function(){
    alert('Thanks to do your order with KFC 😊')
})
   
    total.style.borderCollapse = 'collapse'; 
    total.style.width = 'auto'; 
    total.style.border = '1px solid #ddd'; 
    total.style.fontSize = '14px'; 
    total.style.textAlign = 'left'; 
getOrder.style.width='100%'
   
    let cells = total.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.border = '1px solid #ddd'; 
        cell.style.padding = '8px'; 
    });
    // Styling for total row
    totalRow.style.fontWeight = 'bold'; 
}

CalculateTotal(cartItem);
