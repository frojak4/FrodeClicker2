import React, { useEffect, useState } from 'react'
import { LiaCoinsSolid } from "react-icons/lia";
import { GiCutDiamond } from "react-icons/gi";

type DisplayProps = {
    money: number;
    diamonds: number;
    displayDiamonds: boolean;
}

const Display = ({money, diamonds, displayDiamonds}: DisplayProps) => {


  



  return (
    <div className="flex">
        <h3 className="text-white text-4xl p-5 flex">{money}
           <LiaCoinsSolid className="pt-1 text-yellow-400"/>
           </h3>
          {displayDiamonds && 
        <h3 className="text-white text-4xl p-5 flex">{diamonds}
          <GiCutDiamond className="pt-1 text-cyan-600"/>
        </h3>
        }
    </div>
  )
}

export default Display