import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Movie } from "../tools/movies"
import "../styles/movie.css"
import { tmdbImageURL } from "../tools/URLs"

export const MoviePage = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState<Movie>()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
    }, [id])

    return (
        <>
            <div className="movie-wrapper">
                {movie && (
                    <>
                        <div className="movie-nav">
                            <img className="movie__poster" src={tmdbImageURL + movie.poster_path} alt="asdf" />
                        </div>




                        <div className="movie-info">
                            <h2 className="movie__title">{movie.title}</h2>
                            <div className="movie-rating-container">
                                <div className="movie-rContainer__item">{Number(movie.vote_average).toFixed(1)}</div>
                                <div className="movie-rContainer__item">votes: {movie.vote_count}</div>
                                <div className="movie-rContainer__item">{movie.runtime} min</div>
                            </div>

                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}