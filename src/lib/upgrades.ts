import snus from './G3Volt.png';
import { Upgrades } from './Types';

export const upgrades: Upgrades[] = [
    {
        name: 'SuperClick',
        price: 20,
        fps: 1,
        image: snus,
        amount: 1,
        unlock: 1,
    },
    {
        name: 'Snus',
        price: 100,
        fps: 1,
        image: snus,
        amount: 0,
        unlock: 30,
        diamonddrop: 0.01
    },
    {
        name: 'Brus',
        price: 750,
        fps: 2,
        image: snus,
        amount: 0,
        unlock: 200,
        diamonddrop: 0.02
    },
    {
        name: 'Pils',
        price: 5000,
        fps: 6,
        image: snus,
        amount: 0,
        unlock: 1000,
        diamonddrop: 0.04
    },

]