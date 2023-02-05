import { PokeCardType } from "@/types/pokecardtype";
import { PokemonList } from "./PokemonList";

type ResultProp = {
    dataList: PokeCardType[]
    onClickEvolution: (value: string) => void
}

export function Result(props: ResultProp) {
    return (
        <div className="content">
            {
                props.dataList.length > 0 ? props.dataList.map((ele, index) => {
                    return <PokemonList onClickEvolution={(value) => props.onClickEvolution(value)} data={ele} key={index} />
                }) : "Pokemon Not Found..."
            }
        </div>
    );
}
