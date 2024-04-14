import items from "./products.js";

let data = [];

// Function to save data to local storage
function saveData(ele) {
    localStorage.setItem('cartItems', JSON.stringify(ele));
}

// Function to load data from local storage
function loadData() {
    const storedData = localStorage.getItem('cartItems');
    if (storedData) {
        data = JSON.parse(storedData);
    }
}

// Load data from local storage when the page loads
window.addEventListener('DOMContentLoaded', function () {
    loadData();
});

function createItemElement(item) {
    const main_div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const AddToCart = document.createElement("button");

    AddToCart.addEventListener('click', function () {
        data.push(item);
        saveData(data);
       alert('New item added in Cart')
    });

    img.src = item.img;
    p.innerText = item.title;
    description.innerText = item.description;
    price.innerText = `₹ ${item.price}`;
    AddToCart.innerText = "Add To Cart 🛒";

    [img, p, description, price, AddToCart].forEach(element => {
        element.style.width = "100%";
        if (element !== img) {
            element.style.fontWeight = '600';
        }
    });

    description.style.color = 'grey';
    description.style.fontSize = '12px';
    AddToCart.style.width = '100%';

    main_div.append(img, p, description, price, AddToCart);
    return main_div;
}

function filterItemsByTitle(titleKeyword) {
    return items.filter(ele =>
        ele.title.toLowerCase().includes(titleKeyword)
    );
}

const categories = {
    "peri-peri": "peri",
    "chicken-rolls": "chicken roll",
    "chicken-buckets": "bucket",
    "briyani-buckets": "biryani",
    "box-meals": "box",
    "burgers": "burger",
    "snacksbeverages": "ml"
};

for (const category in categories) {
    const categoryItems = filterItemsByTitle(categories[category]);
    const categoryDiv = document.querySelector(`.${category}>div`);

    categoryItems.forEach(item => {
        const itemElement = createItemElement(item);
        categoryDiv.appendChild(itemElement);
    });
}

function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Adjust as needed to offset fixed navbar
            behavior: 'smooth'
        });
    }
}

document.getElementById('menuSelect').addEventListener('change', function () {
    const selectedOption = this.value;
    scrollToSection(selectedOption);
});

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        scrollToSection(targetId);
    });
});
