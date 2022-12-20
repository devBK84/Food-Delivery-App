// import React from "react";
// import {Link} from "react-router-dom";
// import Battery from "../Battery";
// import "./Welcomescreen.css";
//
// export default function Welcomescreen (props) {
//     const {
//         hintergrund,
//         banderole_Logo,
//         checkout,
//         citkar2502225,
//         title,
//         x941Am,
//         iconBar_Chart,
//         iconSignal,
//         batteryProps,
//    } = props;
//
//     return (
//         <div className="container-center-horizontal">
//             <div className="Welcomescreen screen">
//                 <div className="overlap-group1">
//                     <img className="hintergrund" src={hintergrund} alt="Hintergrund"/>
//                     <img className="banderole_-logo" src={banderole_Logo} alt="Banderole_Logo"/>
//                     <Link to="/story-2">
//                         <div className="group-340">
//                             <div className="text">
//                                 <div className="checkout opensans-bold-white-16px">{checkout}</div>
//                             </div>
//                         </div>
//                     </Link>
//                     <img className="cit-kar-250222-5" src={citkar2502225} alt="CitKar-250222-5"/>
//                     <h1 className="title">{title}</h1>
//                 </div>
//                 <div className="x941-am">{x941Am}</div>
//                 <img className="icon-bar_chart" src={iconBar_Chart} alt="icon-bar_chart"/>
//                 <img className="icon-signal" src={iconSignal} alt="icon-signal"/>
//                 <Battery src={batteryProps.src}/>
//             </div>
//         </div>
//     );
// }
//
// export default Welcomescreen;