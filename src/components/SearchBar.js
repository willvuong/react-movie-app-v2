
const SearchBar = ({ movieSearch, searchKeyword, searchEvent}) => {
    return (
        <form className="form" onSubmit={searchEvent}>
            <input className="searchBar"
                type="search"
                value={movieSearch}
                onChange={searchKeyword}
                placeholder="Search Movie..."
                 />
        </form>
    )
}

export default SearchBar
