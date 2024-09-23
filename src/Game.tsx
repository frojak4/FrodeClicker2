import React, { useState } from 'react'
import Clicker from './components/Clicker'
import Display from './components/Display'
import {upgrades} from './lib/upgrades'
import Upgrade from './components/Upgrade'

const Game = () => {

    const [amount, setAmount] = useState<number>(0);

    const handleClick = () => {
        setAmount((amount) => amount + 1)
    }

  return (
    <div className="mx-auto max-w-[72rem] h-[42rem] bg-gray-900 flex">
        <div className="flex-1 flex flex-col items-center">
            <Display number={amount} />
            <Clicker handleClick={handleClick}/>
        </div>
        <div className="bg-gray-800 min-w-80 min-h-max">
            <div className="bg-gray-600 text-gray-400 text-2xl text-center p-2">Upgrades:</div>
            {upgrades.map((upgrade, i) => {
                return <Upgrade key={i} amount={upgrade.amount} name={upgrade.name} image={upgrade.image} price={upgrade.price}/>
            })}
        </div>
    </div>
  )
}

export default Game