import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import NumResults from "./components/Navbar/NumResults";
import Box from "./components/Main/Box";
import MovieList from "./components/Main/MovieList";
import Search from "./components/Navbar/Search";
import WatchedSummary from "./components/Main/WatchedSummary";
import WatchedMoviesList from "./components/Main/WatchedMoviesList";
import StarRating from "./components/StarRating";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Test />
      <StarRating
        maxRating={5}
        className="test"
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={4}
      />
      <StarRating maxRating={10} size={50} color="purple" defaultRating={3} />
    </>

    // <>
    //   <Navbar>
    //     <Search />
    //     <NumResults movies={movies} />
    //   </Navbar>

    //   <Main>
    //     <Box>
    //       <MovieList movies={movies} />
    //     </Box>

    //     <Box>
    //       <WatchedSummary watched={watched} />
    //       <WatchedMoviesList watched={watched} />
    //     </Box>
    //   </Main>
    // </>
  );
}

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={5}
        onSetRating={setMovieRating}
        defaultRating={1}
      />
      <p>This movie was rated {movieRating || 1} stars</p>
    </div>
  );
};
