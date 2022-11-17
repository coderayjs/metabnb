import React from "react";
import "./mid.css";
import mb from "../../assets/img/mb.png"
import met from "../../assets/img/meta (1).png"
import open from "../../assets/img/opensea.png"

const Mid = () => {
    return (
    <div className="mid-container">
       <div className="mini-con">
         <img src={mb} alt="logo" className="logo1" />
         <img src={met} alt="logo" className="logo1" />
         <img src={open} alt="logo" className="logo1" />
         </div>
    </div>

    );

}
export default Mid;