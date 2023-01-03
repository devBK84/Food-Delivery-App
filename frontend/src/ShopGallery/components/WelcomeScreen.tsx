import React from "react";
import "./WelcomeScreen.css";
import "../../App.css"
import hintergrund from "../../static/img/hintergrund@1x.png"
import banderole_Logo from "../../static/img/banderole-logo-1@1x.png"
import citkar2502225 from "../../static/img/citkar-250222-5-1@1x.png"
import {useNavigate} from "react-router-dom";



export default function WelcomeScreen() {

    const navigate = useNavigate()

    function handleDetailsClick(){
        navigate("/products")
    }

    return (
        <div className="container-center-horizontal">
            <div className="WelcomeScreen">
                <div className="overlap-group1">
                    <img className="hintergrund" src={hintergrund} alt="Hintergrund"/>
                    <img className="banderole_-logo" src={banderole_Logo} alt="Banderole_Logo"/>
                    <img className="cit-kar-250222-5" src={citkar2502225} alt="CitKar-250222-5"/>
                    <h1 className="title">THE FUTURE <br/> OF (NON) DAIRY</h1>
                </div>
                <button onClick={handleDetailsClick} className="button">Los geht's</button>
            </div>
        </div>
    );
}
