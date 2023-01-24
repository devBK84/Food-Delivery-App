import React, {useState} from "react";
import "../CheckOut/CheckOut.css"
import {Product} from "../../model/Product";


export default function CheckOut() {
    const [card, setCard] = useState<Product[]>([{
        "id": "639b06e6e9e4b72b734418cb",
        "name": "Frische Bio Weidemilch 1l",
        "price": 2.39,
        "orderFavorites": "orderFav",
        "description": "Frische Vollmilch in nachhaltiger Mehrweg-Glasflasche, nicht homogenisiert, schonend \nerhitzt und dadurch bis zu 7 Tage. haltbar",
        "shortname": "Milch"
    }])


    return (
        <div></div>
    );
}