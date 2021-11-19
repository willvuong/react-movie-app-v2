import Movie from './Movie.js'

const Movies = ({ movies }) => {
    return (
        <div className="Movies px-5 d-flex flex-wrap g-4 align-items-center">
            {movies.length > 0 && movies.map((myMovies) => (
                    <Movie key={myMovies.id} movie={myMovies} />
                ))}    
        </div>
    )
}

export default Movies
