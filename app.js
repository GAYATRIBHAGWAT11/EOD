let mainTag=document.querySelector('main')
let mainContainer=document.querySelector('.main-container')
let shoppingCards=document.querySelector('.shop')

let imgArrayOfObject=[{
    id:'201',
    img:['/newArrivalImages/img1.jpeg','img1a.jpeg','img1b.jpeg','img1c.jpeg','img1d.jpeg','img1e.jpeg','img1f.jpeg'],
    heatTag:'New Arrival',
    brand:'adidas originals',
    productTitle:'YEEZY BOOST 350 V2 SLATE/CORE BLACK/SLATE',
    priceQuantity:'₹22,999'
},
{
    id:'202',
    img:['/newArrivalImages/img3.jpeg','img3a.jpeg','img3b.jpeg','img3c.jpeg','img3d.jpeg','img3e.jpeg','imgf.jpeg'],
    heatTag:'New Arrival',
    brand:'Adidas',
    productTitle:'FORUM LUXE LOW "CWHITE/CROACH"',
    priceQuantity:'₹11,999'
},
{
    id:'203',
    img:['/newArrivalImages/img5.jpeg','img5a.jpeg','img5b.jpeg','imgc.jpeg','img5d.jpeg','img5e.jpeg','img5f.jpeg'],
    heatTag:'New Arrival',
    brand:'adidas originals',
    productTitle:'NITEBALL "CORE BLACK/CLOUD WHITE"',
    priceQuantity:'₹11,999'
},
{
    id:'204',
    img:['/newArrivalImages/img7.jpeg','img7a.jpeg','img7b.jpeg','img7c.jpeg','img7d.jpeg','img7e.jpeg','img7f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ALPARGATA RECYCLED COTTON CANVAS "MAASTRICHTNAVY"',
    priceQuantity:'₹3,999'
},
{
    id:'215',
    img:['/newArrivalImages/img9.jpeg','img9a.jpeg','img9b.jpeg','img9c.jpeg','img9d.jpeg','img9e.jpeg','img9f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ESPADRILLE ALPARGATA "NAVY MARINA "',
    priceQuantity:'₹3,999'
},
{
    id:'206',
    img:['/newArrivalImages/img11.jpeg','img11a.jpeg','img11b.jpeg','img11c.jpeg','img11d.jpeg','img11e.jpeg','img11f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ESPADRILLE ALPARGATA "BLACK SLUBBY"',
    priceQuantity:'₹4,999'
},
{
    id:'207',
    img:['/newArrivalImages/img13.jpeg','img13a.jpeg','img13b.jpeg','img13c.jpeg','img13d.jpeg','img13e.jpeg','img13f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ESPADRILLE ALPARGATA "NAVY MARINA "',
    priceQuantity:'₹5,999'
},
{
    id:'208',
    img:['/newArrivalImages/img15.jpeg','img15a.jpeg','img15b.jpeg','img15c.jpeg','img15d.jpeg','img15e.jpeg','img15f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ALPARAGATA HERITAGE CANVAS "NATURAL/PEACH"',
    priceQuantity:'4,999'
},
{
    id:'209',
    img:['/newArrivalImages/img17.jpeg','img17a.jpeg','img17b.jpeg','img17c.jpeg','img17d.jpeg','img17e.jpeg','img17f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ALPARGATA RECYCLED COTTON CANVAS "ROSE RED"',
    priceQuantity:'₹3,999'
},
{
    id:'2010',
    img:['/newArrivalImages/img19.jpeg','img19a.jpeg','img19b.jpeg','img19c.jpeg','img19d.jpeg','img19e.jpeg','img19f.jpeg'],
    heatTag:'New Arrival',
    brand:'TOMS',
    productTitle:'ALPARGATA RECYCLED COTTON CANVAS "ROSE RED"',
    priceQuantity:'₹3,999'
},
{
    id:'2011',
    img:['/newArrivalImages/img20.jpeg','img20a.jpeg','img20b.jpeg','img20c.jpeg','img20d.jpeg','img20e.jpeg','img20f.jpeg'],
    heatTag:'New Arrival',
    brand:'TOMS',
    productTitle:'ESPADRILLE ALPARGATA "BLACK SLUBBY"',
    priceQuantity:'₹4,999'
},
{
    id:'2012',
    img:['/newArrivalImages/img22.jpeg','img22a.jpeg','img22b.jpeg','img22c.jpeg','img22d.jpeg','img22e.jpeg','img22f.jpeg'],
    heatTag:'New Arrival',
    brand:'TOMS',
    productTitle:'ESPADRILLE ALPARAGATA "NAVY MARINA"',
    priceQuantity:'5,499'
},
{
    id:'2013',
    img:['/newArrivalImages/img24.jpeg','img24a.jpeg','img24b.jpeg','img24c.jpeg','img24d.jpeg','img24e.jpeg','img24f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'ALPARAGATA HERITAGE CANVAS "NATURAL/PEACH"',
    priceQuantity:'₹4,999'
},
{
    id:'2014',
    img:['/newArrivalImages/img27.jpeg','img27a.jpeg','img27b.jpeg','img27c.jpeg','img27d.jpeg','img27e.jpeg','img27f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:'APLARAGATA RECYCLED COTTON CANVAS "ROSE RED"',
    priceQuantity:'₹22,999'
},
{
    id:'2015',
    img:['/newArrivalImages/img28.jpeg','img28a.jpeg','img28b.jpeg','img28c.jpeg','img28d.jpeg','img28e.jpeg','img28f.jpeg'],
    heatTag:'New Arrival',
    brand:'Toms',
    productTitle:' WMNS ESPADRILLE PARGATA "VANTABLACK" ',
    priceQuantity:'₹4,999'
},
{
    id:'2016',
    img:['/newArrivalImages/img31.jpeg','img31a.jpeg','img31b.jpeg','img31c.jpeg','img31d.jpeg','img31e.jpeg','img31f.jpeg'],
    heatTag:'New Arrival',
    brand:'New Balance',
    productTitle:'TWIN CITY 57/40 "WHITE"',
    priceQuantity:'₹11,999'
},
{
    id:'2017',
    img:['/newArrivalImages/img33.jpeg','img33a.jpeg','img33b.jpeg','img33c.jpeg','img33d.jpeg','img33e.jpeg','img33f.jpeg'],
    heatTag:'New Arrival',
    brand:'Adidas Originals',
    productTitle:'ADIDAS ADVENTURE CARGO SHORTS "BLACK"',
    priceQuantity:'₹5,599'
},
{
    id:'2018',
    img:['/newArrivalImages/img36.jpeg','img36a.jpeg','img36b.jpeg','img36c.jpeg','img36d.jpeg','img36e.jpeg','img36f.jpeg'],
    heatTag:'New Arrival',
    brand:'adidas originals',
    productTitle:'FORUM MID PATCHWORK',
    priceQuantity:'₹14,999'
},
{
    id:'2019',
    img:['/newArrivalImages/img37.jpeg','img37a.jpeg','img37b.jpeg','img37c.jpeg','img37d.jpeg','img37e.jpeg','img37f.jpeg'],
    heatTag:'New Arrival',
    brand:'adidas originals',
    productTitle:'ALL OVER MESH SHIRT "MULTICOLOR"',
    priceQuantity:'₹6,599'
},
{
    id:'2020',
    img:['/newArrivalImages/img39.jpeg','img39a.jpeg','img39b.jpeg','img39c.jpeg','img39d.jpeg','img39e.jpeg','img39f.jpeg'],
    heatTag:'Reebok',
    brand:'adidas originals',
    productTitle:'IVERSION TRIO SHORT SLEEVE T-SHIRT',
    priceQuantity:'₹1,999'
},
{
    id:'2021',
    img:['/newArrivalImages/img41.jpeg','img41a.jpeg','img41b.jpeg','img41c.jpeg','img41d.jpeg','img41e.jpeg','img1f.jpeg'],
    heatTag:'New Arrival',
    brand:'Reebok',
    productTitle:'LT COURT "CLOUD WHITE"',
    priceQuantity:'₹7,999'
},
{
    id:'2022',
    img:['/newArrivalImages/img43.jpeg','img43a.jpeg','img43b.jpeg','img43c.jpeg','img43d.jpeg','img43e.jpeg','img43f.jpeg'],
    heatTag:'New Arrival',
    brand:'Reebok',
    productTitle:'CLASSIC GROW "BRIGHT OCHRE"',
    priceQuantity:'₹6,999'
},
{
    id:'2023',
    img:['/newArrivalImages/img45.jpeg','img45a.jpeg','img45b.jpeg','img45c.jpeg','img45d.jpeg','img45e.jpeg','img45f.jpeg'],
    heatTag:'New Arrival',
    brand:'Adidas',
    productTitle:'HELLO KITTY FORUM LOW WCORE BLACK/BLISS PINK',
    priceQuantity:'₹9,999'
},
{
    id:'2024',
    img:['/newArrivalImages/img47.jpeg','img47a.jpeg','img47b.jpeg','img47c.jpeg','img47d.jpeg','img4e7.jpeg','img47f.jpeg'],
    heatTag:'New Arrival',
    brand:'Puma',
    productTitle:'APLARAGATA RECYCLED COTTON CANVAS "ROSE RED"',
    priceQuantity:'₹4,999'
},
]


// selct elements
 function renderProducts(){
    imgArrayOfObject.forEach((product)=>{
        shoppingCards.innerHTML+=` <div class="item">
        <img id=${product.id} src=${product.img[0]} alt="">
        <div class="details">
            <div class="heat-tag">${product.heatTag}</div>
            <small class="brand">${product.brand}</small>
            <div class="product-title">
                <a id="product-title-1">${product.productTitle}</a>
                <div class="price-quantity">
                    <p id="myPrice">${product.priceQuantity}</p>
                </div>
            </div>
        </div>
    </div> `;
    }) ;
 }
 renderProducts()

//  slider code--------------------------------------------
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// slider code over-------------------------------











