import { User } from "@/types/usertype";

type PokemonListProp = {
    data: User
}

export function PokemonList(props: PokemonListProp) {
    return (
        <div className="pokemon-card">
            <h4>Name: {props.data.name} </h4>
            <h4>Attack: {props.data.email}</h4>
            <h4>Address: {props.data.address.street + props.data.address.city} </h4>
        </div>
    );
}
