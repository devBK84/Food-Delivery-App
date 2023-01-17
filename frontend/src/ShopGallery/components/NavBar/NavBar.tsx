import React from "react";
import "../NavBar/NavBar.css"
import icon_home from "../../../static/img/home-16@1x.png"
import stroke_1_101 from "../../../static/img/stroke-1-101@1x.png"
import stroke_7_10 from "../../../static/img/stroke-7-10@1x.png"
import stroke_3_13 from "../../../static/img/stroke-3-13@1x.png"
import profile_11 from "../../../static/img/profile-10@1x.png"
import line_5_10 from "../../../static/img/line-5-10@1x.png"
import stroke_3_30 from "../../../static/img/stroke-3-30@1x.png"


export default function NavBar() {

    return (
        <div className="NavBar">
            <img className="icon-home" src= {icon_home} alt="icon-home" />
            <div className="group-306"></div>
            <div className="stroke-container">
                <img className="stroke-1" src= {stroke_1_101} alt="Stroke 1" />
                <img className="stroke-3" src= {stroke_3_30} alt="Stroke 3" />
                <img className="stroke-5" src= {stroke_3_30} alt="Stroke 5" />
                <img className="stroke-7" src= {stroke_7_10} alt="Stroke 7" />
            </div>
            <div className="overlap-group">
                <img className="stroke-3-1" src={stroke_3_13} alt="Stroke 3" />
            </div>
            <div className="flex-col">
                <img className="icon-user" src= {profile_11} alt="icon-user" />
                <img className="line-6" src={line_5_10} alt="Line 6" />
            </div>
        </div>
    );
}