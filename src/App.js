import { useState, useEffect } from 'react'
//test

import Header from './components/Header.js'
import Movies from './components/Movies.js'
import Footer from './components/Footer.js'


const api = "https://api.themoviedb.org/3/search/movie?api_key=19b7796656e3bbec3cfc102c4b11e268&query=batman"
const api2 = "https://api.themoviedb.org/3/search/movie?api_key=19b7796656e3bbec3cfc102c4b11e268&query="

const App = () => {
  const [movies, setMovies] = useState([])
  const [movieSearch, setMovieSearch] = useState('')

  useEffect(() => {
    fetch(api) //get api deta -> response turned to json -> data set to movies (usestate)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const results = data.results
        setMovies(results)
      })
  }, [])

  const searchKeyword = (movie) => {
    setMovieSearch(movie.target.value)
    //console.log(movieSearch) checking if it is working
  }

  const searchEvent = (e) => {
    e.preventDefault()
    fetch(api2 + movieSearch) //get api deta -> response turned to json -> data set to movies (usestate)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const results = data.results
        setMovies(results)
      })
  }

  return (
    <div className="App bg-dark">
      <Header movieSearch={movieSearch} searchKeyword={searchKeyword} searchEvent={searchEvent} />
      {/* <SearchBar movieSearch={movieSearch} searchKeyword={searchKeyword} searchEvent={searchEvent} /> */}
      <Movies movies={movies} />
      <Footer />
    </div>
  );
}

export default App;

//newer way of fetching API
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await fetch(api)
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //   fetchMovies()
  // }, [])

  // const movieSearch = () => {
  //   const urlString = "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=19b7796656e3bbec3cfc102c4b11e268"
  //   $.ajax({
  //     url: urlString,
  //     success: (searchResults) => {
  //       console.log("fetched data succesfully :)")
  //       setMovies(searchResults)
  //     },
  //     error: (xhr, status, err) => {
  //       console.log("failed")
  //     }
  //   })
  // }
