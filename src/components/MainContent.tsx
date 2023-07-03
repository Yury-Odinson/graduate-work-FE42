import { useEffect, useState } from "react"
import "../styles/mainContent.css"
import { Movie, MovieCard } from "../tools/types"
import { tmdbImageURL } from "../tools/URLs"
import { Link } from "react-router-dom"
import { getMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"

export const MainContent = () => {

    const [movie, setMovie] = useState<Movie>()
    const [movies, setMovies] = useState<MovieCard[]>([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${getRandomIdNumber()}?language=en-US`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWMyZTNmYTFlOTA1NGI0Zjk4NWU5Y2Q2YjJjZjE2OSIsInN1YiI6IjY0ODg5OTdjZDJiMjA5MDE0ZTBhZjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HxHn8Xff6pZFz3mNoT0X56GTr8gCWj3XhhnJ-UsbXI"
                }
            }
        )
            .then(response => response.json())
            .then(data => setMovie(data))
    }, [])

    useEffect(() => {
        getMovies(1).then((movies) => setMovies(movies.results))
    }, [])

    // get random number from request id
    const getRandomIdNumber = () => Math.floor(Math.random() * (500 - 2)) + 2

    return (
        <div className="content-mainPage">
            <h1 className="main__title">Greeting, stranger!</h1>
            <Link to={`/movie/${movie?.id}`}>
                {movie && (
                    <div className="main-movie">
                        <img className="main-movie__background" src={tmdbImageURL + movie.backdrop_path} />
                        <div className="main-movie__backgroundCover"></div>
                        <div className="main-movie-info">
                            <h3 className="main-movie__title">{movie.title}</h3>
                            <h4 className="main-movie__description">{movie.overview}</h4>
                            <div className="movie-rating-container">
                                <div className="movie-rContainer__item">{Number(movie.vote_average).toFixed(1)}</div>
                                <div className="movie-rContainer__item">votes: {movie.vote_count}</div>
                                <div className="movie-rContainer__item">{movie.runtime} min</div>
                            </div>
                        </div>
                    </div>
                )}
            </Link>
            <span>Recommended:</span>
            <div className="content-movies">
                {movies.map((item) =>
                    <li key={item.id}>
                        <Link key={item.id} to={`/movie/${item.id}`}>
                            <CardMovie movie={item} />
                        </Link>
                    </li>
                )}
            </div>
        </div>
    )
}

const spanWhiteStyle = {
    color: "#FFF",
};
