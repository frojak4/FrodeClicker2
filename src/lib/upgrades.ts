import snus from './G3Volt.png';
import { Upgrades } from './Types';

export const upgrades: Upgrades[] = [
    {
        name: 'SuperClick',
        price: 20,
        fps: 1,
        image: snus,
        amount: 1,
        unlock: 0,
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
        price: 500,
        fps: 2,
        image: snus,
        amount: 0,
        unlock: 200,
        diamonddrop: 0.02
    },

]