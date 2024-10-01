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
        price: 150,
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
        unlock: 300,
        diamonddrop: 0.002
    },
    {
        name: 'Pils',
        price: 14000,
        fps: 24,
        image: snus,
        amount: 0,
        unlock: 2000,
        diamonddrop: 0.004
    },
    {
        name: 'Vodka',
        price: 69000,
        fps: 256,
        image: snus,
        amount: 0,
        unlock: 12000,
        diamonddrop: 0.01
    },

]