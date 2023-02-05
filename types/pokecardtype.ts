export type PokeCardType = {
    id : string
    name : string
    rarity : string
    image : string
    evolveFrom : string
    attacks: {
        damage: string
        effect: string
    }[]
}