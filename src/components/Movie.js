import { FaStar } from 'react-icons/fa'

const Movie = ({ movie }) => {
    const tmdbImgPath = "https://image.tmdb.org/t/p/w185"
    
    const viewTmdbMovie = () => {
        const tmdbUrl = "https://www.themoviedb.org/movie/" + movie.id
        window.open(tmdbUrl) //creates new tab 
        //window.location.href = tmdbUrl redirects;
    }
  
    return (
        <div className="Movie">
            <img src={tmdbImgPath + movie.poster_path} className="img-fluid" alt="poster" width="300"/>

            {/* <div className="movieInfo">
                <h3>{movie.title}</h3>
                <span><FaStar /> {movie.vote_average}</span>
            </div>

            <div className="movieOverview">
                <h3>Overview: </h3>
                <p>{movie.overview}</p>
                <input type="button" value="View" onClick={viewTmdbMovie}/>
            </div> */}
        </div>
    )
}

export default Movie
