import React, { useState } from "react";
import "./App.css";
import ListMovies from "./components/listMovies";
import SearchMovie from "./components/SearchMovie";
function App() {
  const [listMovies, setListMovies] = useState([
    {
      title: "The Curse of La Llorona",
      genre:"Horror",
      year: 2019,
      description:
      "Ignoring the eerie warning of a troubled mother suspected of child endangerment, a social worker and her own small kids are soon drawn into a frightening supernatural realm.",
      image: "https://www.movie-list.com/img/posters/big/curseoflallorona.jpg",
      rating: 4
    },
    {
      title: "The Book Thief",
      genre:"Drama",
      year: 2013,
      description:
        "While subjected to the horrors of WWII Germany, young Liesel finds solace by stealing books and sharing them with others. Under the stairs in her home, a Jewish refuge is being sheltered by her adoptive parents.",
      image: "https://www.movie-list.com/img/posters/big/bookthief.jpg",
      rating: 3
    },
    {
      title: "Best Man Downn",
      genre:"Comedy",
      year: 2013,
      description:
        "A newlywed couple cancels their honeymoon and returns to the snowy Midwest to make the funeral arrangements for their best man, who died unexpectedly after their ceremony.",
      image: "https://www.movie-list.com/img/posters/big/bestmandown.jpg",
      rating: 5
    }
  ]);

  const [title, setTitle] = useState("");
  const [genre,setGenre]= useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [searchtitle, setSearchTitle] = useState("");
  const [searchrating, setSearchRating] = useState("");

  const searchMovieByTitle = item => {
    setSearchTitle(item);
  };
  const searchMovieByRating = item => {
    setSearchRating(item);
  };

  const onAddMovie = () => {
    setListMovies([...listMovies, { title, genre, year, description, image, rating }]);
    setTitle("");
    setGenre("");
    setYear("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onEditMovie = () => {
    setListMovies([...listMovies, { title, genre, year, description, image, rating }]);
    setTitle("");
    setGenre("");
    setYear("");
    setDescription("");
    setImage("");
    setRating("");
  };
  const onDeleteMovie = i => {
    setListMovies(listMovies.filter((item, j) => i !== j));
  };

  return (
    <div className="App">
      <SearchMovie
        searchMovieByTitle={searchMovieByTitle}
        searchMovieByRating={searchMovieByRating}
      />
      <ListMovies
        listMovies={listMovies}
        onAddMovie={onAddMovie}
        onEditMovie={onEditMovie}
        onDeleteMovie={onDeleteMovie}
        setTitle={setTitle}
        setGenre={setGenre}
        setYear={setYear}
        setDescription={setDescription}
        setImage={setImage}
        setRating={setRating}
        searchtitle={searchtitle}
        searchrating={searchrating}
      />
    </div>
  );
}

export default App;