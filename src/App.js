import React, { useEffect, useState} from "react";
import Movie from "./components/Movie";
import './App.css';
import Header from "./components/Header";
import FooterPage from "./components/Footer";

const DOMAIN_API = "https://api.themoviedb.org/3/discover/movie?sort_by=release_date.des&api_key=7315ec59ea2264da1fa4f4eb8d647853&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7315ec59ea2264da1fa4f4eb8d647853&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() =>   {
    fetch(DOMAIN_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  //search button
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm){
    fetch(SEARCH_API + searchTerm)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return(
    <>
    <Header />
    <div className="top">
      <h1>Welcome to Valentine's Movie Hub</h1>
      <div className="search-container">
        <form onSubmit={handleOnSubmit}>
          <input name="search" type="text" 
          placeholder="Search for a movie" 
          value={searchTerm} 
          onChange={handleOnChange} />
        </form>
      </div>
    </div>

    <div className="headline">
      <h2><strong>Most Recent Movies</strong></h2>
    </div>
    
    <div className="movie-container">
      {movies.length > 0 && 
      movies.map((movie) => 
      <Movie key={movie.id} {...movie}/>
      )}
    </div>
    <FooterPage />
    </>
  );
}

export default App;
