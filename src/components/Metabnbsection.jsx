import React from "react";
import Mbtoken from "../assets/img/mbtoken.png";
import Opensea from "../assets/img/opensea.png"
import metamask from "../assets/img/metamask.png"


const Metabnbsection = () => {
    return (
        <div className="Banner">
           <img src={Mbtoken}/>
           <img src={Opensea}/>
           <img src={metamask}/>

        </div>
    )
}


export default Metabnbsection;