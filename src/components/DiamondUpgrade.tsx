import React from 'react'
import { GiCutDiamond } from "react-icons/gi";
import { diamondupgrades } from '../lib/diamondupgrades';
import { upgrades } from '../lib/upgrades';

type DiamondUpgradeProps = {
    name: string,
    price: number,
    diamonds: number,
    setDiamonds: React.Dispatch<React.SetStateAction<number>>;
    effect: string,
    effectitemid: number,
    id: number,
    bought: boolean
}

const DiamondUpgrade = ({name, price, diamonds, setDiamonds, effect, effectitemid, id, bought}: DiamondUpgradeProps) => {

    const handleBuy = (id: number) => {

        if (diamonds >= price){
        diamondupgrades[id].bought = true;
        setDiamonds((prev) => prev -= price);
        if (effect === 'Double'){
            upgrades[effectitemid].fps = upgrades[effectitemid].fps * 2;
        }
        }
    }



  return (
    <div>
        <div onClick={() => handleBuy(id)}
        
        className={!bought ? "h-16 bg-gray-500 hover:bg-gray-600 active:bg-gray-400 hover:cursor-pointer border-b-2 border-gray-800 flex" : 
            'bg-gray-600 border-b-2 border-gray-800 flex h-16 hover:cursor-default'
        }>
            
            <span className="flex-1 pl-1">
                <h3 className={!bought ? "text-white text-2xl" : "text-gray-400 text-2xl"}>
                {name}
                </h3>
                <h3>
                    {effect === 'Double' && `Doubles the effect of ${upgrades[effectitemid].name}`}
                </h3>
            </span>
            <span className='flex items-center'>
                <h3 className={!bought ? "text-2xl flex text-gray-200" : "text-2xl flex text-gray-400"}>
                    {price} <GiCutDiamond className={!bought ? "pt-1 text-cyan-400" : "pt-1 text-gray-500"}/> 
                </h3>
                
            </span>
        </div>
    </div>
  )
}

export default DiamondUpgrade