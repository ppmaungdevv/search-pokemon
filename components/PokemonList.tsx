import { PokeCardType } from "@/types/pokecardtype";

type PokemonListProp = {
    data: PokeCardType
    onClickEvolution: (value: string) => void
}

export function PokemonList(props: PokemonListProp) {

    return (
        <div className="pokemon-card">
            <p>Name: {props.data.name} </p>
            <p>Attack:</p>
            {
                props.data.attacks && <p>Damage: {props.data.attacks[0].damage}</p>
            }
            {
                props.data.attacks && <p>{props.data.attacks[0].effect}</p>
            }
            <p>Evolve From:</p>
            {
                props.data.evolveFrom && 
                <p 
                    onClick={(event) => {props.onClickEvolution(event.currentTarget.textContent ? event.currentTarget.textContent.split(' ')[1] : '')}}
                    style={{ cursor: 'pointer', color: 'royalblue' }}
                    > {props.data.evolveFrom}
                </p>
            }
        </div>
    );
}
