import React from "react";
import background from "../../../static/img/path-566-10@1x.png"
import "../Header/Header.css"
import {ArrowBack} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

type headerProps = {
    title: string
}

export default function Header(props: headerProps) {

    const navigate = useNavigate()

    function handleDetailsClick() {
        navigate("/products")
    }

    return (
        <div className="header">
            <div className={"arrow1"}>
                <ArrowBack onClick={handleDetailsClick}></ArrowBack>
            </div>
            {props.title}

            <div className={"background"} style={{backgroundImage: `url(${background})`}}>

            </div>
        </div>
    );
}
