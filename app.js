let mainTag = document.querySelector('main')
let mainContainer = document.querySelector('.main-container')
let shoppingCards = document.querySelector('.shop')

// ===================================================object API=>
let myApi=[
    {
        "id": 20,
        "title": "WMN’S NSW TOP",
        "price": '₹1,046',
        "brand":"Nike",
        "description": "ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 4,
            "name": "T-shirts",
            "image": "https://superkicks.in/wp-content/uploads/2021/09/CT8925-010-1-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/09/CT8925-010-3-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/09/CT8925-010-3-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/09/CT8925-010-2-850x850.jpg"
        ]
    },
    {
        "id": 21,
        "title": "SHORT SLEEVES TOP NSW W",
        "price": '₹ 1,498',
        "brand":"Nike",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "category": {
            "id": 1,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2021/03/CZ8356-141-2-400x400.jpg.webp"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/03/CZ8356-141-2-850x850.jpg.webp",
            "https://superkicks.in/wp-content/uploads/2021/03/CZ8356-141-3-850x850.jpg.webp",
        ]
    },
    {
        "id": 22,
        "title": "WMN’S JORDAN (HER)ITAGE GOLD CHAIN T-SHIRT",
        "price": '₹ 1,536',
        "brand":"Nike",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "category": {
            "id": 4,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2022/04/3-21-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/04/3-21-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/04/2-20-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/04/4-20-850x816.jpg"
        ]
    },
    {
        "id": 23,
        "title": "WMN’S SPORTSWEAR EARTH DAY T-SHIRT ‘SAIL’",
        "price":'₹ 1,795',
        "brand":"Nike",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "category": {
            "id": 5,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2022/06/1-152-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/06/3-117-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/06/2-124-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/06/2-124-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/06/4-117-850x850.jpg"
        ]
    },
    {
        "id": 24,
        "title": "WMN’S (HER)ITAGE TOP",
        "price": '₹ 3,695',
        "brand":"Nike",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "category": {
            "id": 3,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2022/01/1-5-1-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/01/1-5-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/01/5-2-150x150.jpg",
            "https://superkicks.in/wp-content/uploads/2022/01/5-2-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/01/3-4-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/01/4-5-1-850x850.jpg"
        ]
    },
    {
        "id": 25,
        "title": "HALF SLEEVED TEE SEA SPRAY GREEN",
        "brand":"Superkicks",
        "price": '₹ 1,999',
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "category": {
            "id": 5,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/Half-sleeve-side-sqaure-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/half-sleeve-male-square-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Half-Sleeve-back-square-3-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Logo-close-upp-3-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Sea-Spray-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-green-half-sleeves-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-3-850x850.jpg"
        ]
    },
    {
        "id": 26,
        "title": "WMN’S NSW EARTH DAY FRENCH TERRY PANTS",
        "price": '₹ 1,999',
        "brand":"Nike",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 3,
            "name": "Pants",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/CZ8358-010-2-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/CZ8358-010-2-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/CZ8358-010-3-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/CZ8358-010-4-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/CZ8358-010-5-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/CZ8358-010-6-850x850.jpg"
        ]
    },
    {
        "id": 27,
        "title": "FULL-SLEEVED TEE CARBON BLACK",
        "price": '₹ 2,299',
        "brand":"Superkicks",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 2,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/Full-sleeve-main-square-1-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/Full-Sleeve-side-main-square-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Full-Sleeve-Back-square-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Logo-close-up-square-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-4-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-black-full-sleeves-850x850.jpg"
        ]
    },
    {
        "id": 28,
        "title": "FULL-SLEEVED TEE BRICK DUST",
        "price": '₹ 2,299',
        "brand":"Superkicks",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 1,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/Full-Sleeve-main-SIDE-square-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/Full-Sleeve-main-SIDE-square-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Full-sleeve-back-square-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Logo-Close-up-square-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-red-full-sleeves-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-6-850x850.jpg"
        ]
    },
    {
        "id": 29,
        "title": "FULL-SLEEVED TEE GLACIER GREY",
        "price": '₹ 2,299',
        "brand":"Superkicks",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "category": {
            "id": 5,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/Full-Sleeve-square-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/full-sleeve-front-main--850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/full-sleeve-back-square-2-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Logo-close-up-main-square-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Glacier-Grey-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-grey-full-sleeves-150x150.jpg"
        ]
    },
    {
        "id": 30,
        "title": "FULL-SLEEVED TEE SEA SPRAY GREEN",
        "price": '₹ 2,299',
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "category": {
            "id": 3,
            "name": "Superkicks",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/full-sleeves-side-square-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/full-sleeves-side-square-150x150.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Full-Sleeve-back-square-3-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Logo-close-upp-4-150x150.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Sea-Spray-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-8-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-green-full-sleeves-850x850.jpg"
           
        ]
    },
    {
        "id": 31,
        "title": "NSW WOMENS SHORT SLEEVES TOP BLACK",
        "brand":"Nike",
        "price": '₹ 2,495',
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 5,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2020/11/NSW-WOMENS-SHORT-SLEEVES-TOP-BLACK-1-850x850.jpg.webp"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2020/11/NSW-WOMENS-SHORT-SLEEVES-TOP-BLACK-2-850x850.jpg.webp",
        ]
    },
    {
        "id": 32,
        "title": "NSW WOMENS SHORT SLEEVES TOP WHITE",
        "price": '₹ 2,495',
        "brand":"Nike",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 2,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2020/11/NSW-WOMENS-SHORT-SLEEVES-TOP-WHITE-2-400x400.jpg.webp"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2020/11/NSW-WOMENS-SHORT-SLEEVES-TOP-WHITE-2-850x850.jpg.webp",
        ]
    },
    {
        "id": 33,
        "title": "ESSENTIALS T-SHIRT ‘NOBLE GREEN’",
        "price": '₹ 2,495',
        "brand":"Nike",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "category": {
            "id": 3,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/4-20-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/4-20-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-19-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-20-850x850.jpg"
        ]
    },
    {
        "id": 34,
        "title": "CDXX DINER OLIVE TEE",
        "price": '₹ 2,499',
        "brand":"Superkicks",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "category": {
            "id": 4,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2022/04/2-65-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/04/4-60-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/04/5-25-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/04/1-2-9-850x816.jpg"
        ]
    },
    {
        "id": 35,
        "title": "ADICOLOR CLASSICS SLIM 3-STRIPES TEE ‘BLACK’",
        "brand":"adidas originals ",
        "price": '₹2,499',
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "category": {
            "id": 2,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2022/07/2-111-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/07/2-111-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/3-111-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/4-106-850x850.jpg"
        ]
    },
    {
        "id": 36,
        "title": "MR. DOODLE AOP TEE",
        "price": '₹ 2,999',
        "brand":"Puma",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "category": {
            "id": 3,
            "name": "T-shirt",
            "image": "https://superkicks.in/wp-content/uploads/2021/04/530651_color01-2-400x400.jpg.webp"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/04/530651_color01-2-850x850.jpg.webp",
        ]
    },
    {
        "id": 37,
        "title": "CDXX DINER OLIVE SHORTS",
        "price": '₹ 2,999',
        "brand":"Superkicks",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 1,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2022/04/p3-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/04/p3-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/04/p2-850x816.jpg"
        ]
    },
    {
        "id": 38,
        "title": "CDXX DINER WHITE SHORTS",
        "price": '₹ 2,999',
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 1,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2022/04/w1-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/04/w1-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/04/w3-850x816.jpg",
        ]
    },
    {
        "id": 39,
        "title": "OVER THE KNEE SHORTS CARBON BLACK",
        "price": '₹ 3,199',
        "brand":"Superkicks",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 3,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-black-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-black-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-back-black-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-8-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-black-shorts-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-9-150x150.jpg"
        ]
    },
    {
        "id": 40,
        "title": "OVER THE KNEE SHORTS BRICK DUST",
        "price": '₹ 3,199',
        "brand":"Superkicks",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "category": {
            "id": 3,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-red-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-red-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-back-red-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-5-850x1132.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-red-shorts-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-10-850x850.jpg"
        ]
    },
    {
        "id": 41,
        "title": "OVER THE KNEE SHORTS GLACIER GREY",
        "price": '₹ 3,199',
        "brand":"Superkicks",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 3,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-grey-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-grey-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-back-grey-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-4-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-grey-shorts-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-11-850x850.jpg"
        ]
    },
    {
        "id": 42,
        "title": "OVER THE KNEE SHORTS SEA SPRAY GREEN",
        "price": '₹ 3,199',
        "brand":"superkicks",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 1,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-green-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-side-green-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-2-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/shorts-back-green-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/flatlay-green-shorts-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2021/10/Material-Close-up-square-12-850x850.jpg",
        
        ]
    },
    {
        "id": 43,
        "title": "WMN’S HERITAGE DIAMOND SHORTS",
        "price": '₹ 3,295',
        "brand":"Nike",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "category": {
            "id": 3,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2022/02/44-1-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/02/44-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/02/11-2-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/02/33-2-850x850.jpg"
        ]
    },
    {
        "id": 44,
        "title": "WMN’S JORDAN ESSENTIAL DIAMOND SHORT ‘ SAND DRIFT / SAIL ‘",
        "price": '₹ 3,495',
        "brand":"Nike",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 3,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2022/05/2-10-1-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/05/2-10-1-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/05/3-9-1-850x816.jpg",
            "https://superkicks.in/wp-content/uploads/2022/05/4-9-1-850x816.jpg"
        ]
    },
    {
        "id": 45,
        "title": "WMN’S JORDAN ESSENTIALS DIAMOND SHORTS",
        "price": '₹ 3,495',
        "brand":"Nike",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 1,
            "name": "Shorts",
            "image": "https://superkicks.in/wp-content/uploads/2022/06/2-103-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/06/2-103-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/06/3-100-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/06/4-101-850x850.jpg"
        ]
    }]
    // ==========================================object Api over===================================================================================


// selct elements
// myApi.forEach(renderProducts)
function renderProducts() {
myApi.forEach((product)=>{
    shoppingCards.innerHTML += `
    <div class="item">
           <a href="../productInfo/productDetail.html"><img src="${product.category.image}" alt="" class="click" id="${product.id}"></a> 
           <div class="details"> 
           <small class="brand">${product.brand}</small>
           <div class="product-title">
           <a href="../productInfo/productDetail.html" class="click" id="${product.id}">${product.title}</a>
           <div class="price-quantity">
           <p id="myPrice">${product.price}</p>
           </div>
       </div>
       </div>
       </div>
    `;
})
}
 renderProducts()


function productShow(e){
    // console.log(e.target)
    if(e.target.classList.value=="click"){
        // console.log(e.target.id)
        let id=e.target.id
        localStorage.setItem("x",`${id}`)
    }
}


shoppingCards.addEventListener("click",productShow)





//  slider code--------------------------------------------
const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// slider code over-------------------------------











