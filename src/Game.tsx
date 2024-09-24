import React, { useEffect, useState } from 'react'
import Clicker from './components/Clicker'
import Display from './components/Display'
import {upgrades} from './lib/upgrades'
import Upgrade from './components/Upgrade'


const Game = () => {

    const [money, setMoney] = useState<number>(0);
    const [maxMoney, setMaxMoney] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

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
    

    const gameLoop = () => {
        let newMoney: number = 0;
        upgrades.forEach((upgrade, i) => {
            if (i !== 0){
                newMoney += upgrade.fps * upgrade.amount;
            }
        })
        setMoney((prev) => prev + newMoney);
        if (money > maxMoney){
            setMaxMoney(money);
        }
    }

  return (
    <div className="mx-auto max-w-[72rem] h-[42rem] bg-gray-900 flex">
        <div className="flex-1 flex flex-col items-center">
            <Display number={money} />
            <Clicker handleClick={handleClick}/>
        </div>
        <div className="bg-gray-800 min-w-80 min-h-max">
            <div className="bg-gray-700 text-gray-400 text-2xl text-center p-2">Upgrades:</div>
            {upgrades.map((upgrade, i) => {
                if (upgrade.unlock <= maxMoney){
                return <Upgrade key={i} id={i} money={money} setMoney={setMoney} 
                amount={upgrade.amount} name={upgrade.name} image={upgrade.image} price={upgrade.price} fps={upgrade.fps}/>
                }
            })}
        </div>
    </div>
  )
}

export default Game