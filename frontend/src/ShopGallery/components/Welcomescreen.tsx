import React from "react";
import "./Welcomescreen.css";
import "../../App.css"
import hintergrund from "../../static/img/hintergrund@1x.png"
import banderole_Logo from "../../static/img/banderole-logo-1@1x.png"
import citkar2502225 from "../../static/img/citkar-250222-5-1@1x.png"

export default function Welcomescreen() {


    return (
        <div className="container-center-horizontal">
            <div className="Welcomescreen">
                <div className="overlap-group1">
                    <img className="hintergrund" src={hintergrund} alt="Hintergrund"/>
                    <img className="banderole_-logo" src={banderole_Logo} alt="Banderole_Logo"/>
                    <img className="cit-kar-250222-5" src={citkar2502225} alt="CitKar-250222-5"/>
                    <h1 className="title">The Future of (non) Dairy</h1>
                </div>
                <div className="x941-am"></div>
            </div>
        </div>
    );
}
