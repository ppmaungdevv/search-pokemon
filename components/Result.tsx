import { User } from "@/types/usertype";
import { PokemonList } from "./PokemonList";

type ResultProp = {
    dataList: User[]
}

export function Result(props: ResultProp) {
    return (
        <div className="content">
            {
                props.dataList.map((ele, index) => {
                    return <PokemonList data={ele} key={index} />
                })
            }
        </div>
    );
}
