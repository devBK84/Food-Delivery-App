import React from "react";
import background from "../../../static/img/path-566-10@1x.png"
import "../Header/Header.css"
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


export default function Header() {

    const navigate = useNavigate()

    function handleDetailsClick() {
        navigate("/products")
    }

    return (
        <div className="header">
            <div className={"arrow1"}>
                <ArrowBack onClick={handleDetailsClick}></ArrowBack>
            </div>
            WELCOME BY MILKLY

            <div className={"background"} style={{backgroundImage: `url(${background})`}}>

            </div>
        </div>
    );
}
