import React from "react";
import "../NavBar/NavBar.css"
import icon_home from "../../../static/img/home-16@1x.png"
import stroke_1_101 from "../../../static/img/stroke-1-101@1x.png"
import stroke_7_10 from "../../../static/img/stroke-7-10@1x.png"
import stroke_3_13 from "../../../static/img/stroke-3-13@1x.png"
import profile_10 from "../../../static/img/profile-10@1x.png"
import stroke_3_30 from "../../../static/img/stroke-3-30@1x.png"
import {useNavigate} from "react-router-dom";

type navBarProps = {
    amountArticles: number
}

export default function NavBar(props: navBarProps) {

    const navigate = useNavigate()


    function handleCheckOutClick() {
        navigate("/checkout/")
    }
    function handleGalleryClick() {
        navigate("/products/")
    }

    return (
        <div className="NavBar">
            <div className="flex-row">
                <img onClick={handleGalleryClick} className="icon-home" src={icon_home} alt="icon-home"/>

                <div className="stroke-container">
                    <img className="stroke-1" src={stroke_1_101} alt="Stroke 1"/>
                    <img className="stroke-3" src={stroke_3_30} alt="Stroke 3"/>
                    <img className="stroke-5" src={stroke_3_30} alt="Stroke 5"/>
                    <img onClick={handleCheckOutClick} className="shopping-card" src={stroke_7_10} alt="Stroke 7"/>
                    <p>{props.amountArticles}</p>
                </div>
                <div className="overlap-group">
                    <img className="stroke-3-1" src={stroke_3_13} alt="Stroke 3"/>
                </div>
                <div className="flex-col">
                    <img className="icon-user" src={profile_10} alt="icon-user"/>
                </div>
            </div>
        </div>
    );
}