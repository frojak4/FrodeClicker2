import React from 'react'
import frode from '../lib/Frode.png'

type ClickerProps = {
    handleClick: () => void;
}

const Clicker = ({handleClick}: ClickerProps) => {
  return (
    <div className="flex justify-center items-center mt-4">
        <div onClick={handleClick} className="bg-lime-400 w-24 h-24"></div>
    </div>
  )
}

export default Clicker
