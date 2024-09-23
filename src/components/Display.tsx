import React from 'react'
import { LiaCoinsSolid } from "react-icons/lia";

type DisplayProps = {
    number: number;
}

const Display = ({number}: DisplayProps) => {
  return (
    <div>
        <h3 className="text-white text-4xl p-5 flex">{number} <LiaCoinsSolid className="pt-1 text-yellow-400"/></h3>
    </div>
  )
}

export default Display