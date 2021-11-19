import SearchBar from './SearchBar.js'

const Header = ({ movieSearch, searchKeyword, searchEvent }) => {
    return (
        <header className="Header p-4 bg-dark text-light">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>MovieDB</h1>
                    <SearchBar movieSearch={movieSearch} searchKeyword={searchKeyword} searchEvent={searchEvent} />
                </div>
            </div>
        </header>
    )
}

export default Header
