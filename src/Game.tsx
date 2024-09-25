import React, { useEffect, useState } from 'react'
import Clicker from './components/Clicker'
import Display from './components/Display'
import {upgrades} from './lib/upgrades'
import Upgrade from './components/Upgrade'
import { diamondupgrades } from './lib/diamondupgrades'
import DiamondUpgrade from './components/DiamondUpgrade'


const Game = () => {

    const [money, setMoney] = useState<number>(0);
    const [diamonds, setDiamonds] = useState<number>(2);
    const [maxMoney, setMaxMoney] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);
    const [showItems, setShowItems] = useState<boolean>(true);
    const [displayDiamonds, setDisplayDiamonds] = useState<boolean>(false)


    const handleClick = () => {
        setMoney((prev) => prev += upgrades[0].amount)

        if (money > maxMoney){
            setMaxMoney(money);
        }
    }

    useEffect(() => {

        const interval = setInterval(() => {
        gameLoop();
        }, 1000)

        return () => clearInterval(interval);

    }, [isRunning])

    
  useEffect(() => {
    if(diamonds > 0){
      setDisplayDiamonds(true)
    }
  }, [diamonds])
    

    const gameLoop = () => {
        let newMoney: number = 0;
        let newDiamonds: number = 0;
        upgrades.forEach((upgrade, i) => {
            if (i !== 0){
                newMoney += upgrade.fps * upgrade.amount;
                if ('diamonddrop' in upgrade){
                    if(upgrade.diamonddrop && upgrade.diamonddrop > Math.random()){
                        newDiamonds++;
                    }
                }
            }
        })
        setDiamonds((prev) => prev + newDiamonds);
        setMoney((prev) => prev + newMoney);
        if (money > maxMoney){
            setMaxMoney(money);
        }
    }

    const handleUpgradeToggle = (toggle: boolean) => {
        if (displayDiamonds === true){
            setShowItems(toggle);
        }
    }

  return (
    <div className="mx-auto max-w-[72rem] h-[42rem] bg-gray-900 flex">
        <div className="flex-1 flex flex-col items-center">
            <Display money={money} diamonds={diamonds} displayDiamonds={displayDiamonds}/>
            <Clicker handleClick={handleClick}/>
        </div>
        <div className="bg-gray-800 min-w-80 min-h-48">
            <div className="bg-gray-500 text-gray-200 text-2xl text-center flex justify-between">
                <button onClick={() => handleUpgradeToggle(true)} disabled={showItems} 
                className="w-full h-full p-2 cursor-pointer disabled:bg-gray-600 disabled:text-gray-300">Items:</button>
                {displayDiamonds && 
                <button onClick={() => handleUpgradeToggle(false)} disabled={!showItems} 
                className="w-full h-full p-2 cursor-pointer disabled:bg-gray-600 disabled:text-gray-300">Upgrades:</button>
                }
                </div>
            {showItems ?
            <div>
            {upgrades.map((upgrade, i) => {
                if (upgrade.unlock <= maxMoney){
                return <Upgrade key={i} id={i} money={money} setMoney={setMoney} 
                amount={upgrade.amount} name={upgrade.name} image={upgrade.image} price={upgrade.price} fps={upgrade.fps}/>
                }
            })}
            </div> :
            <div>
                {diamondupgrades.map((upgrade, i) => {
                    return <DiamondUpgrade key={i} id={i} name={upgrade.name} bought={upgrade.bought} effect={upgrade.effect} effectitemid={upgrade.effectitem}
                    diamonds={diamonds} setDiamonds={setDiamonds} price={upgrade.price}/> 
                })}
            </div>
        }
        </div>
    </div>
  )
}

export default Game