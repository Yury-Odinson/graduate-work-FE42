import { useEffect, useState } from "react"
import "../styles/mainContent.css"
import { Movie } from "../tools/types"
import { tmdbImageURL } from "../tools/URLs"
import { Link } from "react-router-dom"
import { Recommended } from "./Recommended"
import { getRandomMovie } from "../tools/movies"

export const MainContent = () => {

    const [movie, setMovie] = useState<Movie>()
    useEffect(() => { getRandomMovie(getRandomIdNumber()).then((movie) => setMovie(movie)) }, [])

    // get random number from request id
    const getRandomIdNumber = () => Math.floor(Math.random() * (500 - 2)) + 2

    return (
        <div className="content-mainPage">
            <h1 className="main__title">Greeting, stranger!</h1>
            {movie && (
                <>
                    <Link to={`/movie/${movie?.id}`}>
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
                    </Link>
                    <span>Recommended:</span>
                    <Recommended idParentMovie={movie?.id} />
                </>
            )}
        </div>
    )
}

const spanWhiteStyle = {
    color: "#FFF",
};
