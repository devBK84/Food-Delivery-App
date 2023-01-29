import React from "react";
import "../CheckOut/CheckOut.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import citcar_140422 from "../../../static/img/citkar-140422@1x.png"


type Props = {
    amountArticles: number
}

export default function CheckOut(props: Props) {

    return (
        <div>
            <Header title={"THANKS FOR ORDERING"}/>
            <div className={"checkout-overview"}>
                <img className="citkar10" src={citcar_140422} alt=""/>
                <p className={"Order-no"}>Order no. 300120-23</p>
            </div>
            <p className={"Order-no"}><h4>Order no. 300120-23</h4>
                <br/>
                You have the possibility to change or cancel
                <br/>
                your order at least 24h before delivery.
            </p>
            <NavBar amountArticles={props.amountArticles}/>
        </div>
    )

}