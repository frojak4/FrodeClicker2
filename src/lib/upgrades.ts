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
        name: 'Brus',
        price: 1500,
        fps: 2,
        image: snus,
        amount: 0,
        unlock: 200,
        diamonddrop: 0.002
    },
    {
        name: 'Pils',
        price: 10000,
        fps: 6,
        image: snus,
        amount: 0,
        unlock: 1000,
        diamonddrop: 0.004
    },
    {
        name: 'VODKA',
        price: 690000,
        fps: 24,
        image: snus,
        amount: 0,
        unlock: 1000,
        diamonddrop: 0.01
    },

]