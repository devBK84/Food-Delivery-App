import React from "react";
import background from "../../../static/img/path-566-10@1x.png"
import "../Header/Header.css"
import {ArrowBack} from "@mui/icons-material";


export default function Header() {

    return (
        <div className="header">
            <div className={"arrow1"}>
                <ArrowBack></ArrowBack>
            </div>
            WELCOME BY MILKLY

            <div className={"background"} style={{backgroundImage: `url(${background})`}}>

            </div>
        </div>
    );
}
