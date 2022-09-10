let mainTag = document.querySelector('main')
let mainContainer = document.querySelector('.main-container')
let shoppingCards = document.querySelector('.shop')

// ===================================================object API=>
let myApi=[
    {
        "ID": 20,
        "title": "WMN’S AIR JORDAN 5 RETRO LOW ‘WHITE/COCONUT MILK’",
        "tag":'New Arrival',
        "price": '₹16,995',
        "description": "ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 4,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-29-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-33-150x150.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-29-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/4-30-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/5-15-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/6-9-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-30-850x850.jpg"

        ]
    },
    {
        "ID": 21,
        "title": "WMN’S 57/40’WHITE/PINK’",
        "tag":'New Arrival',
        "price": '₹12,999',
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "category": {
            "id": 1,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/M5040RRB.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/M5040RRB-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/M5040RRB.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/M5040RRB.jpg3_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/M5040RRB.jpg2_-850x850.jpg"
        ]
    },
    {
        "ID": 22,
        "title": "327 CITRUS PUNCH ‘GREY/ORANGE’",
        "price": '₹9,999',
        "tag":"New Arrival",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "category": {
            "id": 4,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/ms327sc.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sc-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sc.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sc.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sc.jpg3_-850x850.jpg"
        ]
    },
    {
        "ID": 23,
        "title": "327 ‘SUMMER JADE/BLACK’",
        "price":'₹9,499',
        "tag":"New Arrival",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "category": {
            "id": 5,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/MS327SA.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/MS327SA-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/MS327SA.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/MS327SA.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/MS327SA.jpg3_-850x850.jpg"
        ]
    },
    {
        "ID": 24,
        "title": "57/40 ‘ECLIPSE/NIGHTWATCH GREEN’",
        "price": '₹13,999',
        "tag":"New Arrival",
        "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "category": {
            "id": 3,
            "name": "Furniture",
            "brand": "New Balance",
            "image": " https://superkicks.in/wp-content/uploads/2022/09/u5740cnn.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/u5740cnn-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/u5740cnn.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/u5740cnn.jpg2_-850x850.jpg",
            'https://superkicks.in/wp-content/uploads/2022/09/u5740cnn.jpg3_-850x850.jpg'
        ]
    },
    {
        "ID": 25,
        "title": "327 ECLIPSE ‘NAVY BLUE’",
        "price": '₹10,999',
        "tag":"New Arrival",
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "category": {
            "id": 5,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/ms327sb-nb.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sb-nb-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sb-nb.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sb-nb.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/ms327sb-nb.jpg3_-850x850.jpg"
        ]
    },
    {
        "ID": 26,
        "title": "ADICOLOR CLASSICS 3-STRIPES TEE ‘MINERAL GREEN’",
        "price": '₹2,299',
        "tag":"New Arrival",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 3,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/HK7277-TSHIRT-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/HK7277-TSHIRT-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/HK7277-TSHIRT.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/HK7277-TSHIRT.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/HK7277-TSHIRT.jpg3_-850x850.jpg"
        ]
    },
    {
        "ID": 27,
        "title": "DUNK LOW ‘METALLIC SILVER’",
        "price":'₹9,695',
        "tag":"New Arrival",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 2,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-28-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-32-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-28-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-29-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/5-14-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/6-8-850x850.jpg"

            
        ]
    },
    {
        "ID": 28,
        "title": "WMN’S NIZZA PLATFORM MID VEGAN ‘WHITE/BLISS ORANGE’",
        "price": '₹7,999',
        "tag":"New Arrival",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 1,
            "brand": "adidas originals",
            "image": "https://superkicks.in/wp-content/uploads/2022/08/gy1897.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/08/gy1897-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/gy1897.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/gy1897.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/gy1897.jpg3_-850x850.jpg"
        ]
    },
    {
        "ID": 29,
        "title": "327 DARK BLAZE ‘ORANGE/BLUE’",
        "price": '₹9,999',
        "tag":"New Arrival",
        "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        "category": {
            "id": 5,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327tb-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327tb.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327tb-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327tb.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327tb.jpg4_-850x850.jpg"
        ]
    },
    {
        "ID": 30,
        "title": "327 NATURAL INDIGO ‘BLUE/ORANGE’",
        "price": '₹8,999',
        "tag":"New Arrival",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "category": {
            "id": 3,
            "brand": "New Balance",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327ta.jpg2_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327ta-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327ta.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/new-balance-ms327ta.jpg3_-850x850.jpg"
        ]
    },
    {
        "ID": 31,
        "title": "CLASSICS FOUNDATION BEANIE ‘FROST/BERRY’",
        "price": '₹212',
        "tag":"New Arrival",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 5,
            "brand": "Reebok",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/H47510.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/H47510-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/H47510.jpg1_-850x850.jpg",
        ]
    },
    {
        "ID": 32,
        "title": "AIR JORDAN 3 RETRO ‘WHITE / FIRE RED’",
        "price": '₹19,295',
        "tag":"New Arrival",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 2,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/08/2-1-1-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/08/1-1-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/2-1-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/3-1-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/5-1-1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/4-1-1-850x850.jpg"
        ]
    },
    {
        "ID": 33,
        "title": "CLASSIC LEATHER PLUS ‘GLEN GREEN/ALABASTER’",
        "price": '₹8,999',
        "tag":"New Arrival",
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "category": {
            "id": 3,
            "brand": "Reebok",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/1-26-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-26-850x850.jpg",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=3168",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=8387"
        ]
    },
    {
        "ID": 34,
        "title": "AIR FORCE 1 ’07 LV8 ‘BLACK’",
        "price": '₹9,695',
        "tag":"New Arrival",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "category": {
            "id": 4,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-24-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-26-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-24-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-25-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/5-10-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/6-4-850x850.jpg"
        ]
    },
    {
        "ID": 35,
        "title": "FLIGHT HERITAGE ‘PIZARRA MINERAL’",
        "price": '₹6,295',
        "tag":"New Arrival",
        "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        "category": {
            "id": 2,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-23-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-25-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-23-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-24-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/4-24-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/5-9-850x850.jpg"
        ]
    },
    {
        "ID": 36,
        "title": "FLIGHT HERITAGE 85 ‘WHITE’",
        "price": '₹2,695',
        "tag":"New Arrival",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "category": {
            "id": 3,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-21-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-23-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-21-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-22-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/4-22-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/5-7-850x850.jpg"
        ]
    },
    {
        "ID": 37,
        "title": "SPORTSWEAR ‘BLACK’",
        "price": '₹2,495',
        "tag":"New Arrival",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 1,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-20-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-22-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-20-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-21-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/4-21-850x850.jpg"
        ]
    },
    {
        "ID": 38,
        "title": "ESSENTIALS T-SHIRT ‘NOBLE GREEN’",
        "price": '₹2,495',
        "tag":"New Arrival",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 1,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/4-20-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-21-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/4-20-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-19-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-20-850x850.jpg"
        ]
    },
    {
        "ID": 39,
        "title": "WMN’S ZOOM AIR FIRE ‘METALLIC SILVER’",
        "price": '₹11,895',
        "tag":"New Arrival",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 3,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-22-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-24-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-22-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-23-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/5-8-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/6-3-850x850.jpg"
        ]
    },
    {
        "ID": 40,
        "title": "WMN’S OZWEEGO ‘ECRU TINT / HALO BLUSH’",
        "price": '₹11,999',
        "tag":"New Arrival",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "category": {
            "id": 3,
            "brand": "adidas originals",
            "image": "https://superkicks.in/wp-content/uploads/2022/07/1-121-850x850.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/07/1-121-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/2-112-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/3-112-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/5-40-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/4-107-850x850.jpg"
        ]
    },
    {
        "ID": 41,
        "title": "ADICOLOR CLASSICS SLIM 3-STRIPES TEE ‘BLACK’",
        "price": '₹2,499',
        "tag":"New Arrival",
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "category": {
            "id": 3,
            "brand": "adidas originals",
            "image": "https://superkicks.in/wp-content/uploads/2022/07/2-111-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/07/1-120-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/2-111-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/3-111-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/4-106-850x850.jpg"
        ]
    },
    {
        "ID": 42,
        "title": "WMN’S TRC MIRA DIMENSIONS ‘WHITE-NIMBUS CLOUD’",
        "price": '₹8,999',
        "tag":"New Arrival",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 1,
            "brand": "Puma",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/PUMA4-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/PUMA-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/PUMA4-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/PUMA1-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/PUMA3-850x850.jpg"
        ]
    },
    {
        "ID": 43,
        "title": "COCA COLA x SUEDE ‘WHITE/RED’",
        "price": '₹8,999',
        "tag":"New Arrival",
        "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "category": {
            "id": 3,
            "brand": "Puma",
            "image": "https://superkicks.in/wp-content/uploads/2022/09/2-13-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/09/1-13-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/2-13-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/3-13-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/09/4-13-850x850.jpg"
        ]
    },
    {
        "ID": 44,
        "title": "WMN’S SUPERSTAR ‘ORANGE / ALMOST BLUE’",
        "price": '₹8,999',
        "tag":"New Arrival",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "category": {
            "id": 3,
            "brand": "adidas originals",
            "image": "https://superkicks.in/wp-content/uploads/2022/07/2-110-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/07/1-119-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/2-110-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/3-110-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/4-105-850x850.jpg"
        ]
    },
    {
        "ID": 45,
        "title": "STAN SMITH BONEGA XW ‘BLISS/CORE BLACK’",
        "price": '₹10,999',
        "tag":"New Arrival",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 1,
            "brand": "adidas originals",
            "image": "https://superkicks.in/wp-content/uploads/2022/08/4-111-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/08/1-122-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/4-111-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/3-118-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/08/5-57-850x850.jpg"
        ]
    },
    {
        "ID": 454,
        "title": "AIR PEGASUS 83 PRM ‘BEIGE’",
        "price": '₹8,695',
        "tag":"New Arrival",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 1,
            "brand": "Nike",
            "image": "https://superkicks.in/wp-content/uploads/2022/07/DV0432-100.jpg1_-400x400.jpg"
        },
        "images": [
            "https://superkicks.in/wp-content/uploads/2022/07/DV0432-100-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/DV0432-100.jpg1_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/DV0432-100.jpg2_-850x850.jpg",
            "https://superkicks.in/wp-content/uploads/2022/07/DV0432-100.jpg3_-850x850.jpg"
        ]
    }]
    // ==========================================object Api over===================================================================================


// selct elements
// myApi.forEach(renderProducts)
function renderProducts() {
myApi.forEach((product)=>{
    shoppingCards.innerHTML += `
    <div class="item">
           <a href="../productInfo/productDetail.html"><img src="${product.category.image}" alt="" class="click" id="${product.category.id}"></a> 
           <div class="details"> 
           <p class="heat-tag">${product.tag}</p>
           <small class="brand">${product.category.brand}</small>
           <div class="product-title">
           <a href="../productInfo/productDetail.html" class="click" id="${product.ID}">${product.title}</a>
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











