function Search(): JSX.Element {
    return (
        <div className=" searchContainer visible">
            <input
                // onInput={updateSearch}
                type="text"
                id="search"
                className="search"
            />
        </div>
    );
}

export default Search;
