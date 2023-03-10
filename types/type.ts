export interface Pokemon {
    id: {}
    number: String
    name: String
    weight?: PokemonDimension
    height?: PokemonDimension
    classification?: string
    types?: string[]
    resistant?: string[]
    attacks?: PokemonAttack
    weaknesses?: string[]
    fleeRate?: number
    maxCP?: number
    evolutions?: Pokemon[] 
    evolutionRequirements?: PokemonEvolutionRequirement
    maxHP?: number
    image?: string
}

export interface PokemonDimension {
    minimum: String,
    maximum: String
}

export interface PokemonAttack {
    fast: Attack[]
    special: Attack[]
}

export interface Attack {
    name: string
    type: string
    damage: number
}

export interface PokemonEvolutionRequirement {
    amount: number
    name: string
}