import snus from './G3Volt.png';
import { Upgrades } from './Types';

export const upgrades: Upgrades[] = [
    {
        name: 'SuperClick',
        price: 50,
        fps: 1,
        image: snus,
        amount: 1,
        unlock: 1,
    },
    {
        name: 'Snus',
        price: 200,
        fps: 1,
        image: snus,
        amount: 0,
        unlock: 30,
        diamonddrop: 0.001
    },
    {
        name: 'Pepsi Max',
        price: 1500,
        fps: 4,
        image: snus,
        amount: 0,
        unlock: 750,
        diamonddrop: 0.002
    },
    {
        name: 'Pils',
        price: 14000,
        fps: 12,
        image: snus,
        amount: 0,
        unlock: 4000,
        diamonddrop: 0.004
    },
    {
        name: 'VODKA',
        price: 690000,
        fps: 64,
        image: snus,
        amount: 0,
        unlock: 1000,
        diamonddrop: 0.01
    },

]