import React from "react";
import "../../App.css"
import "./ProductCard.css"
import bild_milch from "../../static/img/bild-milch-1@1x.png"
import bild_laktosefrei from "../../static/img/bild-laktosefrei-1@1x.png"
import bild_joghurt from "../../static/img/bild-joghurt-1@1x.png"


export default function ProductCard() {

    return (
        <div>
            <div className="Article-Milk-Products">
                <div className="milk-container"/>
                <div className="milch">
                    MILCH
                </div>
                <img className="bild_-milch" src={bild_milch} alt="bild-milch"/>


                <div className="laktosefrei-container"/>
                <div className="laktosefrei">
                    LAKTOSEFREI
                </div>
                <img className="bild_-laktosefrei" src={bild_laktosefrei} alt="bild-laktosefrei"/>


                <div className="joghurt-container">
                    <div className="joghurt">
                        JOGHURT
                    </div>
                    <img className="bild_-joghurt" src={bild_joghurt} alt="bild-joghurt"/>
                </div>
            </div>

        </div>
    );
}