import pro1 from "../img/product4-290x340.jpg"
import pro2 from "../img/product10-290x340 (1).jpg"
import pro3 from "../img/product14-290x340.jpg"
import pro4 from "../img/product15-290x340.jpg"
export function creatpro(){
    return[
        {
            id : 1,
            imgUrl : pro1,
            name : "Broccoli",
            price : "$55.00 $50.00",
            butten : "ADD TO CART"
        },
        {
            id : 2,
            imgUrl : pro2,
            name : "Preper",
            price : "$11.99",
            butten : "ADD TO CART"
        },
        {
            id : 3,
            imgUrl : pro3,
            name : "Raddesh",
            price : "$88.99 $39.99",
            butten : "ADD TO CART"
        },
        {
            id : 4,
            imgUrl : pro4,
            name : "Brown onion",
            price : "$77.99",
            butten : "ADD TO CART"
        },
    ]
}