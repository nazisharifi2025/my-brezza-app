import pro1 from "../img/product9-290x340.jpg"
import pro2 from "../img/product4-290x340.jpg"
import pro3 from "../img/product8-290x340.jpg"
import pro5 from "../img/product5-290x340.jpg"
export function allPro(){
    return[
                {
                           id : 2,
                           imgUrl : pro2,
                           name : "Preper",
                           price : "$11.99",
                           butten : "ADD TO CART"
                       },
                            {
                           id : 4,
                           imgUrl : pro5,
                           name : "Kiwi",
                           price : "$80.00",
                           butten : "ADD TO CART"
                       },
                       {
                           id : 3,
                           imgUrl :pro3 ,
                           name : "Brown onion",
                           price : "$77.99",
                           butten : "ADD TO CART"
                       },
                        {
                   id : 1,
                   imgUrl : pro1,
                   name : "Green Apple",
                   price : "$19.99",
                   butten : "ADD TO CART"
               },
    ]
}