import React from "react";
import "../NavBar/NavBar.css"
import background from "../../../static/img/path-566-10@1x.png"
import "../Header/Header.css"


export default function Header() {

    return (
        <div className="header">
            MILCH
            <div className={"background"} style={{backgroundImage: `url(${background})`}}>

            </div>
        </div>
    );
}
