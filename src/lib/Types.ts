export type Upgrades = {
    name: string,
    price: number,
    fps: number,
    image: string,
    amount: number,
    unlock: number,
    diamonddrop?: number
}

export type DiamondUpgrade = {
    name: string,
    price: number,
    effect: string,
    effectitem: number,
    unlock: number,
    bought: boolean
}