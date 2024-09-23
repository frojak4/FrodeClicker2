import React from 'react'
import { LiaCoinsSolid } from "react-icons/lia";


type UpgradeProps = {
    name: string;
    amount: number;
    price: number;
    image: string;
}

const Upgrade = ({name, amount, price, image}:UpgradeProps) => {
  return (
    <div className="h-16 bg-gray-500 border-b-2 border-gray-700 flex">
        
        <span className="flex-1 pl-1">
            <h3 className="text-white text-2xl">
            {name}
            </h3>
            <h3>
                Amount: {amount}
            </h3>
        </span>
        <span className='flex items-center'>
            <h3 className="text-2xl flex text-gray-200">
                {price} <LiaCoinsSolid className=" pt-1 text-yellow-400"/> 
            </h3>
        </span>
    </div>
  )
}

export default Upgrade