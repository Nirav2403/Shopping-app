import React,{useEffect} from "react";
import { connect } from "react-redux";
import { storeCustomApi } from "../actions/custonAction";

const CustomJson = ({storeCustomApi}) => {
const Moblie = [
    {
        "success": true,
        "datatype": "ALL PRODUCTS",
        "numOfResults": 20,
        "lastPage": 10,
        "page": 1,
        "data": [
            {
                "product_image": "https://www.reliancedigital.in/medias/OnePlus-9-Smart-Phones-491947286-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODUxNjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMzL2hjNC85NTEwNjM1MDc3NjYyLmpwZ3w5MDYxNDhkZWY4NTlmNzAyN2I3NGJmMjg3N2QxYjA0NDgwYTQ5MzQ1ODEwNDhiOTNlNjM5YTA2MTJiYjI3YzI4",
                "id": "1",
                "product_name": "OnePlus 9 Pro",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 10,
                "product_color": "cyan",
                "product_price": 54999,
                "product_material": "Metal",
                "product_ratings": 4.8,
                "product_sales": 1500,
                "info": "https://www.reliancedigital.in/oneplus-9-256-gb-12-gb-ram-arctic-sky-smartphone/p/491947286"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Realme-8-Pro-Smart-Phone-Infinite-Blue-128GB-6GB-491947204-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NzQxMTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDJmL2gwMS85NTE5ODgwMTEwMTEwLmpwZ3xkN2Q0NDhiODRmMTlmZDdmMTc4OTI1N2NkOGQ1OWNlZDc4MThhYWZiMmI2Y2JmYTg5NDVhMWM1ZGE1MDZlZTgw",
                "id": "2",
                "product_name": "Realme 8 Pro",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 45,
                "product_color": "red",
                "product_price": 19999,
                "product_material": "Metal",
                "product_ratings": 3.8,
                "product_sales": 753,
                "info": "https://www.reliancedigital.in/realme-8-pro-128-gb-8-gb-ram-infinite-blue-smartphone/p/491947206"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/realme-X7-Pro-Smart-Phones-491946978-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMzA4MDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDk1L2hmZS85NDgxNzM2NzE2MzE4LmpwZ3wyYzM1ZDc2NGM0OTYyM2MyZTFiMzgwN2NlMjgyYWNjYmFmZTE2ZmYxNjJkZWM4MDE0NjVmNTQ3Y2FiNDM4NGQ2",
                "id": "3",
                "product_name": "Realme X7 Pro",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 36,
                "product_color": "Red, Blue",
                "product_price": 29999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 851,
                "info": "https://www.reliancedigital.in/realme-x-series-x7-pro-128-gb-8-gb-ram-mystic-black-smartphone/p/491946978"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Mi-Mi-10T-Smartphones-491901514-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjU4NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaGMzL2hiOS85NDA3MDY2MTQ0Nzk4LmpwZ3xjYzIwM2RhYzJiZDEyODE5M2EyZDExNDJjZDQwYzE0YzljMzI1Njg4MGQ2MTNlZTNjYjQ1ZGExYzI0Yjg5OTJk",
                "id": "4",
                "product_name": "Xiaomi M 10T Pro",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 30,
                "product_color": "Blue",
                "product_price": 267,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 901,
                "info": "https://www.reliancedigital.in/mi-10t-128-gb-6-gb-ram-cosmic-black-smartphone/p/491901514"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Samsung-Z-Fold2-Smartphones-491901010-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDQ4OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2hjMC85MzkyNzM0MjczNTY2LmpwZ3wzNGY2OWY3YjE2ZTA1NmM2NGIyZGIzNGQ0M2U0NDhlYTIyMWYwZThhYzM4YmY5ZTgzZmY0Mjg4NjIzMDUyOWRl",
                "id": "5",
                "product_name": "Samsung Galaxy Z Fold2",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 10,
                "product_color": "Brown",
                "product_price": 134999,
                "product_material": "Metal",
                "product_ratings": 5,
                "product_sales": 100,
                "info": "https://www.reliancedigital.in/samsung-galaxy-z-fold2-256-gb-12-gb-ram-mystic-bronze-smartphone/p/491901010"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Xiaomi-K20-PRO-Smart-Phones-491584259-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODcyMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDczL2g2My85Mjg5NjU3NTQ4ODMwLmpwZ3xlZGU1NGYyZWJkNTMxODhkYzUyNjYyMzdjNjhiNTVmMGJjYjQ0NWViMDc1ZmMxYTI1OTViNTViZDEyOGViOWM1",
                "id": "6",
                "product_name": "Redmi K20 Pro",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 25,
                "product_color": "Dark, Red",
                "product_price": 29999,
                "product_material": "Metal",
                "product_ratings": 3.9,
                "product_sales": 1200,
                "info": "https://www.reliancedigital.in/redmi-k20-pro-smart-phone-256-gb-8-gb-ram-carbon-black/p/491584259"
            },
            {
                "product_image": "https://dummyproducts-api.herokuapp.com/gadgets/mobilephone_150.png",
                "id": "7",
                "product_name": "OnePlus 9R",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 59,
                "product_color": "Cyan, Blue",
                "product_price": 43999,
                "product_material": "Metal",
                "product_ratings": 4.1,
                "product_sales": 1100,
                "info": "https://www.reliancedigital.in/oneplus-9r-256-gb-12-gb-ram-carbon-black-smartphone/p/491996478"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/OnePlus-Nord-CE-12GB-25GB-SilverRay-491996840-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTI3ODZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ1L2gzMy85NTc3Mzk2MjczMTgyLmpwZ3w2NzkyODQxZGFmM2NiOGMzZGNiYmZmNWI4MmEzMzA1NTcwZGNmMzMxZmQzZGJlZDBiMWM5M2Q3NmZhN2NkNWU1",
                "id": "8",
                "product_name": "OnePlus Nord CE",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 360,
                "product_color": "cyan",
                "product_price": 27999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 502,
                "info": "https://www.reliancedigital.in/oneplus-nord-ce-5g-256-gb-12-gb-ram-silver-ray-smartphone/p/491996840"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Redmi-Note-9-Pro-Max-Smartphone-491667261-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NzUwOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDJkL2gyMC85NDUxODI3NjI2MDE0LmpwZ3w5YWY3NWM3YWJiMjYzMThhNDNhYmIwYTUzNDFmODllMWNiZDk5MjE5MmRmMzRkMTYzNDM1NDFlMmNkMTc1ODRk",
                "id": "9",
                "product_name": "Redmi Note 9 Pro Max",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 54,
                "product_color": "Blue",
                "product_price": 20499,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 750,
                "info": "https://www.reliancedigital.in/redmi-note-9-pro-max-128-gb-8-gb-ram-interstellar-black-smartphone/p/491667261"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Realme-X3-Smart-Phones-491894293-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2OTk5MXxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaGIwLzkzMzI2NzA1OTUxMDIuanBnfDk5MDRkMWUzOTRmNDQyMjBiZjVkYTFjNzE0ZmQ2ZGI5NmY3N2ZmMzU2MjJkOWI1YzQ3MzMzYzQzNzNmYzgyMDc",
                "id": "10",
                "product_name": "Realme X3 Smartphone ",
                "product_type": "Mobile Phone",
                "product_department": "Gadgets",
                "product_departmentId": "gadgets",
                "product_stock": 36,
                "product_color": "cyan",
                "product_price": 25999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 90,
                "info": "https://www.reliancedigital.in/realme-x3-smartphone-128-gb-8-gb-ram-arctic-white/p/491894293"
            }
        ]
    }
]

const Television = [
    {
        "success": true,
        "datatype": "ALL PRODUCTS",
        "numOfResults": 20,
        "lastPage": 10,
        "page": 1,
        "data": [
            {
                "product_image": "https://www.reliancedigital.in/medias/IFFALCON-43F2A-Television-492338468-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjA4MDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2g4ZS85NTgwODc1NDgxMTE4LmpwZ3xkNGUyYmQzYTE0ZDEzNTY2NjRlZjYxNDBjNzhmZjExOTRlZTk1ZmMwNzQ1N2EwMjIwNWJlYmE5ODU2OGE2NjNm",
                "id": "1",
                "product_name": "IFFALCON 109.22 cm (43 inch) Full HD LED Smart Tv",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 10,
                "product_color": "cyan",
                "product_price": 21990,
                "product_material": "Metal",
                "product_ratings": 4.9,
                "product_sales": 500,
                "info": "https://www.reliancedigital.in/iffalcon-109-22-cm-43-inch-full-hd-led-smart-tv-43f2a-android-8-0-dolby-decoder-technology-for-enhance-audio-quality-/p/492338468"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/BPL-32H-A4300-Televisions-491893306-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1ODcxODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDAwL2g5Zi85NTE5Mjk4NjQxOTUwLmpwZ3wzNTI5NzFhZjk5ZTBmY2JhNDgwZDMxZjQ3Y2I5YjQxYjE4YmE4ZTZjMmEwNTk5YmE5MDA2N2Y2YjJlOGRhNTU4",
                "id": "2",
                "product_name": "BPL 81.28 cm (32 inch) HD Ready Android Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 45,
                "product_color": "red",
                "product_price": 17999,
                "product_material": "Metal",
                "product_ratings": 3.8,
                "product_sales": 753,
                "info": "https://www.reliancedigital.in/bpl-81-28-cm-32-inch-hd-ready-android-smart-tv-with-dolby-surround-sound-technology-32h-a4300/p/491893306"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Sansui-JSW32SKHD-HD-Ready-Television-492338728-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjU4OTEyfGltYWdlL2pwZWd8aW1hZ2VzL2hlNi9oMWUvOTYxMDY0NDg4MTQzOC5qcGd8YzI2MTRjNDJiMWQ1ZTAwYjczYzQ2MWM4MTEyNDg5ZWRkNTRkOWMxZDhiMjQ3NjVkNTRjODc5NzE3NTE3MWYyMw",
                "id": "3",
                "product_name": "Sansui 81.28 cm (32 inch) HD Ready LED Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 36,
                "product_color": "Red, Blue",
                "product_price": 15990,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 851,
                "info": "https://www.reliancedigital.in/sansui-81-28-cm-32-inch-hd-ready-led-smart-tv-jsw32skhd/p/492338728"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NjA2MzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDNiL2g0ZS85NjA1NTQ2ODM1OTk4LmpwZ3xiMjhmYjM4N2YyNmU5ZmMzYTljN2RhMzBlMTA1NDIxZmIxNGI3Y2QwYTNjMGRlY2NlN2ZlOGQ0ODIxMTA4ODUy",
                "id": "4",
                "product_name": "LG 81.28 cm (32 inch) HD LED Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 30,
                "product_color": "Blue",
                "product_price": 17999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 901,
                "info": "https://www.reliancedigital.in/lg-81-28-cm-32-inch-hd-led-smart-tv-32lm562bpta/p/492338698"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-Televisions-Warranty-491895010-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MjE5OTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDg3L2hmYS85NDMyNzAxMzA0ODYyLmpwZ3wyNDZkYTIzMWY5MjY4OTJlNTkzNjdiZDRmMzcyNjI5ZWQ2NzMwODI4MWVmZWRiYWNlZWFmY2M4MzA1MjUwNGIz",
                "id": "5",
                "product_name": "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 10,
                "product_color": "Brown",
                "product_price": 17999,
                "product_material": "Metal",
                "product_ratings": 5,
                "product_sales": 100,
                "info": "https://www.reliancedigital.in/oneplus-81-28-cm-32-inch-hd-smart-led-tv-32y1/p/491895010"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDgyNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2hiMy85NTExNDcxMTUzMTgyLmpwZ3w3NWQ4ZWI4NjhmNmRhZDZjZTRjMTM1YzNhM2YyZjkzMWE5NjM3NzQzZGNiNWE1YWI0MzJjODYxMzMyMzMxNGY3",
                "id": "6",
                "product_name": "Kodak 80 cm (32 inch) HD Ready LED Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 25,
                "product_color": "Dark, Red",
                "product_price": 14499,
                "product_material": "Metal",
                "product_ratings": 3.9,
                "product_sales": 1200,
                "info": "https://www.reliancedigital.in/kodak-80-cm-32-inch-hd-ready-led-smart-tv-7xpro-series-32hdx7xpro-quad-core-processor-built-in-chromecast/p/492166141"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/TCL-50C715-Televisions-491893430-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MjQwMDB8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2hjMy85NTIwNDAwMjY5MzQyLmpwZ3wzNTZhMTE1NmFhYzljMmQ2MGZhYTU1MDRhMTAxMDA0MDk1NGFhNDcyZTg3NGEwYTRjOGY2MWExZjg5ZDg3ZTM0",
                "id": "7",
                "product_name": "TCL 111.4 cms (50 Inch) Ultra HD (4K) Android Smart QLED TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 59,
                "product_color": "Cyan, Blue",
                "product_price": 49990,
                "product_material": "Metal",
                "product_ratings": 4.1,
                "product_sales": 1100,
                "info": "https://www.reliancedigital.in/tcl-111-4-cms-50-inch-ultra-hd-4k-android-smart-qled-tv-50c715/p/491893430"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Sony-XR-75X90J-Televisions-492338723-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzMwNTgyfGltYWdlL2pwZWd8aW1hZ2VzL2hjNi9oMzMvOTU5ODUzMDg0Njc1MC5qcGd8MjUzYjlmM2EwNjg1OWFjOTVkM2I4MjQ3NzEwODliN2MwNjNmYzhlYzUyOGRhZTRiYmViOWFkYzAyY2JjNzRkNA",
                "id": "8",
                "product_name": "Sony Bravia XR 189 cm (75 inch) Ultra HD (4K) LED Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 360,
                "product_color": "cyan",
                "product_price": 304752,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 502,
                "info": "https://www.reliancedigital.in/sony-bravia-xr-189-cm-75-inch-ultra-hd-4k-led-smart-tv-x90j-xr-75x90j/p/492338723"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/OnePlus-50U1S-Television-492338513-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODEwNTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDc1L2gyNS85NTY4NDAyNDcyOTkwLmpwZ3xmNzc0MWEyNGQzZTY3MmRjMjNjNzYxNjFmOWE3ZWNjYjY1NDJkMzE1NTUyMWY1ZTdjNmE4ZWM3NmEzYjI0ZTc4",
                "id": "9",
                "product_name": "OnePlus 125.7 cm (50 inch) Ultra HD (4K) LED Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 54,
                "product_color": "Blue",
                "product_price": 20499,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 750,
                "info": "https://www.reliancedigital.in/oneplus-125-7-cm-50-inch-ultra-hd-4k-led-smart-tv-u-series-50u1s/p/492338513"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Panasonic-139-cm-55-inch-Ultra-HD-4K-LED-Smart-TV-TH-55GX750D-491600387-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1ODU3MDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE2L2hlOC85Mjk5MzAyNzc2ODYyLmpwZ3wyNGU4ZTQ2NDQzN2Q4Zjg3NDEyMzY2YzZjODljMDI3YTVkY2YyODA4ZjI3NDJmNDQ0OGQ1ZTlkMDI1YjliMzBj",
                "id": "10",
                "product_name": "Panasonic 139 cm (55 inch) Ultra HD 4K LED Smart TV",
                "product_type": "Television",
                "product_department": "Tv",
                "product_departmentId": "Tv",
                "product_stock": 36,
                "product_color": "cyan",
                "product_price": 25999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 90,
                "info": "https://www.reliancedigital.in/panasonic-139-cm-55-inch-ultra-hd-4k-led-smart-tv-gx750-series-th-55gx750d/p/491600387"
            }
        ]
    }
]

const Laptop = [
    {
        "success": true,
        "datatype": "ALL PRODUCTS",
        "numOfResults": 20,
        "lastPage": 10,
        "page": 1,
        "data": [
            {
                "product_image": "https://www.reliancedigital.in/medias/AVITA-NS12T5IN025P-New-Warranty-Laptops-491996952-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2ODYyNHxpbWFnZS9qcGVnfGltYWdlcy9oZGUvaDAyLzk1OTYzNzg4NzM4ODYuanBnfDAxYmNjNjgwNjUyMWE2ODIyYzY3M2M3NGUyNjk5YjZiMjUwN2UzYzNhOTVkYWMwYmMxMzM2M2ZmNTllYTlmZWE",
                "id": "1",
                "product_name": "AVITA Cosmos NS12T5IN025P Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 10,
                "product_color": "cyan",
                "product_price": 17999,
                "product_material": "Metal",
                "product_ratings": 4.9,
                "product_sales": 500,
                "info": "https://www.reliancedigital.in/avita-cosmos-ns12t5in025p-laptop-intel-celeron-n4000-4gb-64gb-intel-uhd-graphics-windows-10-full-hd-29-46-cm-11-6-inch-/p/491996952"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/HP-15s-du3060TX-Laptops-491946939-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDcwMzc3fGltYWdlL2pwZWd8aW1hZ2VzL2gxNi9oNjMvOTQ3NTIwNzU5NDAxNC5qcGd8MWRiZTk4MzE5ODcyMDI4NmI5NGE3OWYyNzQzOWViOTY4MTBjNTEyYTAyYzY3YTdlNjdkMjhmN2U0Yjc4OWVhMw",
                "id": "2",
                "product_name": "HP 15s-du3060TX Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 45,
                "product_color": "red",
                "product_price": 61499,
                "product_material": "Metal",
                "product_ratings": 3.8,
                "product_sales": 753,
                "info": "https://www.reliancedigital.in/hp-15s-du3060tx-laptop-11th-gen-intel-core-i5-1135g7-8gb-1tb-sata-hdd-nvidia-geforce-mx350-windows-10-home-64-plus-single-language-mso-fhd-39-6-cm-15-6-inch-/p/491946939"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Asus-HN256T-Laptops-491996637-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NTI4NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFlL2gzNy85NTUzOTQ5NjU1MDcwLmpwZ3xiMzljMjUyNWU3MmE5Y2U0ZTIxZThjZDUyYTZjMWIwYmVhNmJmOTUwOGIyM2E5NWE0OTU0M2MyMmFkYTA0MzE1",
                "id": "3",
                "product_name": "Asus HN256T TUF Gaming F15 Gaming Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 36,
                "product_color": "Red, Blue",
                "product_price": 65999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 851,
                "info": "https://www.reliancedigital.in/asus-hn256t-tuf-gaming-f15-gaming-laptop-10th-gen-intel-core-i5-10300h-16gb-512gb-ssd-4gb-nvidia-geforce-gtx-1650-graphics-windows-10-fhd-39-62-cm-15-6-inch-/p/491996637"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4",
                "id": "4",
                "product_name": "Apple MGN63HNA MacBook Air",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 30,
                "product_color": "Blue",
                "product_price": 89499,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 901,
                "info": "https://www.reliancedigital.in/apple-mgn63hna-macbook-air-apple-m1-chip-8gb-256gb-ssd-macos-big-sur-retina-33-78-cm-13-3-inch-/p/491946461"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Dell-3505-Laptops-491996721-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzMwNjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDc3L2gxNy85NTUxMjE0MDE4NTkwLmpwZ3wzODVkMjYzNzFkN2VhMzliN2Q5MTdjOGYxZGI4MjBmZWVmZmJiNWM0MWEyYzI1YmE3YzU0NjFkMzViMTRhMTFm",
                "id": "5",
                "product_name": "Dell 3505 Inspiron Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 10,
                "product_color": "Brown",
                "product_price": 45999,
                "product_material": "Metal",
                "product_ratings": 5,
                "product_sales": 100,
                "info": "https://www.reliancedigital.in/dell-3505-inspiron-laptop-amd-ryzen-5-3450u-8gb-256gb-ssd-amd-radeon-vega-graphics-windows-10-mso-fhd-39-62-cm-15-6-inch-/p/491996721"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Lenovo-CVIN-Laptops-491997300-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MzU3ODF8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ5L2hlNi85NTk4MzI2Mjc2MTI2LmpwZ3xlNDAyNDBhZjUyZDFjN2VmOGNmYmYyODQwZWFmMDZlZjJkZWU0YmU1OTM2Y2E4NmM2ZDJjNWIwMDc3OGUyZjIz",
                "id": "6",
                "product_name": "Lenovo CVIN IdeaPad Slim 3i Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 25,
                "product_color": "Dark, Red",
                "product_price": 63190,
                "product_material": "Metal",
                "product_ratings": 3.9,
                "product_sales": 1200,
                "info": "https://www.reliancedigital.in/lenovo-cvin-ideapad-slim-3i-laptop-11th-gen-intel-core-i5-1135g7-8gb-512gb-ssd-intel-iris-xe-graphics-windows-10-mso-fhd-39-6-cm-15-6-inch-/p/491997300"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Acer-A515-56-Laptops-491996485-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjU5OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGE5L2hjMC85NTIyNTc0NjU1NTE4LmpwZ3wzMmFlMjZhZGY1YjRjYjJhZTk4M2NlN2VkNzViNmJlNGE0NmEwMDU5MmM3OTk2NmMxNTI5ZjFhYzcwZWRjNjdh",
                "id": "7",
                "product_name": "Acer A515-56 Aspire 5 Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 59,
                "product_color": "Cyan, Blue",
                "product_price": 49990,
                "product_material": "Metal",
                "product_ratings": 4.1,
                "product_sales": 1100,
                "info": "https://www.reliancedigital.in/acer-a515-56-aspire-5-laptop-11th-gen-intel-core-i3-1115g4-4gb-1tb-hdd-intel-uhd-graphics-windows-10-mso-fhd-39-6-cm-15-6-inch-/p/491996485"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/VAIO-E15-Laptops-491947330-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyOTI5NjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDc5L2g3Yy85NTE0NTI1MDk4MDE0LmpwZ3xmZWU4NGJmMDZlMzhlYzVkZGM1Zjc1NWM0NmUyMDIzNmNiYjQxNTJjOTBhMWM1M2M5MWJjMjU1NWI4NDAxNzg4",
                "id": "8",
                "product_name": "VAIO E15 V2IN007P Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 360,
                "product_color": "cyan",
                "product_price": 304752,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 502,
                "info": "https://www.reliancedigital.in/vaio-e15-v2in007p-laptop-amd-ryzen-r5-3500u-8gb-512gb-ssd-amd-graphics-windows-10-fhd-39-62-cm-15-6-inch-/p/491947330"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/Apple-MVVJ2HN-A-Laptops-491615328-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDMxOXxpbWFnZS9qcGVnfGltYWdlcy9oZDUvaDAxLzkyMjU3NTc5ODI3NTAuanBnfGRhNDA5YzM3NTBmNjUxY2NmMjUwOTg3YTViMTYxNjM4Yzc5YzkyNzYxZDg1MjhkOTJlOTA2YmExYmEyZTQ4YzA",
                "id": "9",
                "product_name": "MacBook Pro",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 54,
                "product_color": "Blue",
                "product_price": 187999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 750,
                "info": "https://www.reliancedigital.in/macbook-pro-mvvj2hn-a-2-6ghz-6-core-9th-gen-i7-16gb-512gb-ssd-40-64-cm-16-inch-retina-display-space-grey/p/491615328"
            },
            {
                "product_image": "https://www.reliancedigital.in/medias/HP-15-ec1051AX-Laptops-491947325-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDg0ODR8aW1hZ2UvanBlZ3xpbWFnZXMvaDcwL2g5Mi85NTE4NjIzMjkzNDcwLmpwZ3wwMzI2ZTk2NWNhZjg2ODRiMDUzZmVjMWRmNjFjZGI4MThmNmE4YjdlYjliY2Y5OTllYTlhNTUwYjgxNmUyY2Yz",
                "id": "10",
                "product_name": "HP 15-ec1051AX Pavilion Gaming Laptop",
                "product_type": "Laptop",
                "product_department": "Laptop",
                "product_departmentId": "Laptop",
                "product_stock": 36,
                "product_color": "cyan",
                "product_price": 72999,
                "product_material": "Metal",
                "product_ratings": 4,
                "product_sales": 90,
                "info": "https://www.reliancedigital.in/hp-15-ec1051ax-pavilion-gaming-laptop-amd-ryzen-5-4600h-8gb-512gb-pcie-ssd-4gb-nvidia-geforce-gtx-1650ti-graphics-windows-10-fhd-39-6-cm-15-6-inch-/p/491947325"
            }
        ]
    }
]

const Home = [...Moblie[0].data, ...Television[0].data, ...Laptop[0].data]
const jsonData = [Home, Moblie[0].data, Television[0].data, Laptop[0].data]

useEffect(() => {
    jsonData.map((item,index)=>{
       return storeCustomApi(item,index)
    })
},[])
return null;
}

export default connect(null,{storeCustomApi})(CustomJson);