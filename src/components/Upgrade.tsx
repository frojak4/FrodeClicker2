import React, { useState } from 'react'
import { LiaCoinsSolid } from "react-icons/lia";
import { upgrades } from '../lib/upgrades';
import Tooltip from '@mui/material/Tooltip';

type UpgradeProps = {
    name: string;
    amount: number;
    price: number;
    image: string;
    id: number;
    money: number;
    fps: number;
    setMoney: React.Dispatch<React.SetStateAction<number>>;

    
}



const Upgrade = ({name, amount, price, image, id, money, setMoney, fps}:UpgradeProps) => {


    const handleBuy = (id: number): void => {
        if (price <= money){
            setMoney((prev) => prev -= price)
            upgrades[id].amount ++;
            upgrades[id].price = Math.floor(upgrades[id].price / 2 * 2.718);
        }
    }

  return (
  <div>
    {money >= price ?
    <Tooltip sx={{color: 'green'}} title={name === 'SuperClick' ? `SuperClick is generating ${fps * amount} gold per click`: `${name} is generating ${fps * amount} gold per second`} 
        arrow placement="left">
        <div onClick={() => handleBuy(id)}
        className="h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 hover:cursor-pointer border-b-2 border-gray-800 flex">
            
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
    </Tooltip>
    : 
    <Tooltip sx={{color: 'green'}} title={name === 'SuperClick' ? `SuperClick is generating ${fps * amount} gold per click`: `${name} is generating ${fps * amount} gold per second`} 
        arrow placement="left">
    <div
    className="h-16 bg-gray-700  border-b-2 border-gray-700 flex">
        
        <span className="flex-1 pl-1">
            <h3 className="text-gray-400 text-2xl">
            {name}
            </h3>
            <h3>
                Amount: {amount}
            </h3>
        </span>
        <span className='flex items-center'>
            
            <h3 className="text-2xl flex text-gray-400">
                {price} <LiaCoinsSolid className=" pt-1 text-gray-400"/> 
            </h3>
        </span>
    </div>
    </Tooltip>
        }
    </div>
  )
}

export default Upgrade