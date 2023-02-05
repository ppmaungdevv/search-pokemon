type SearchBarProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSearch: (event: React.MouseEvent<HTMLButtonElement>, value: string) => void
}

export function SearchBar(props: SearchBarProps) {
    return (
        <nav className="">
            <input value={props.value} onChange={props.handleChange} className="search-box" type="text" name="" id="" placeholder="search"/>
            <button className="search-btn" onClick={(event) => props.handleSearch(event, props.value)} >search</button>
        </nav>
    );
}

