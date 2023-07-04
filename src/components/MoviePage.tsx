import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "../styles/movie.css"
import { tmdbImageURL } from "../tools/URLs"
import { Movie } from "../tools/types"
import { Recommended } from "./Recommended"

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

    const numberWithSpaces = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const genres = movie?.genres.map((element) => element.name).join(", ")
    const companies = movie?.production_companies.map((element) => element.name).join(", ")
    const countries = movie?.production_countries.map((element) => element.name).join(", ")
    const languages = movie?.spoken_languages.map((element) => element.name).join(", ")

    return (
        <>
            {movie && (
                <>
                    <div className="movie-wrapper">
                        <div className="movie-nav">
                            <img className="movie__poster" src={tmdbImageURL + movie.poster_path} alt="movie poster" />
                        </div>
                        <div className="movie-info">
                            <h2 className="movie__title">{movie.title}</h2>
                            <p className="movie__tagline">{movie.tagline}</p>
                            <div className="movie-rating-container">
                                <div className="movie-rContainer__item">{Number(movie.vote_average).toFixed(1)}</div>
                                <div className="movie-rContainer__item">votes: {movie.vote_count}</div>
                                <div className="movie-rContainer__item">{movie.runtime} min</div>
                            </div>
                            <span className="movie__description">{movie.overview}</span>
                            <div className="movie-information-container">
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td>Year</td>
                                            <td>{movie.release_date.slice(0, 4)}</td>
                                        </tr>
                                        <tr>
                                            <td>Genres</td>
                                            <td>{genres}</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td>{countries}</td>
                                        </tr>
                                        <tr>
                                            <td>Spoken languages</td>
                                            <td>{languages}</td>
                                        </tr>
                                        <tr>
                                            <td>Production</td>
                                            <td>{companies} </td>
                                        </tr>
                                        <tr>
                                            <td>Budget</td>
                                            <td>$ {numberWithSpaces(movie.budget)}</td>
                                        </tr>
                                        <tr>
                                            <td>Revenue</td>
                                            <td>$ {numberWithSpaces(movie.revenue)}</td>
                                        </tr>
                                        <tr>
                                            <td>Released</td>
                                            <td>{movie.release_date}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Recommended idParentMovie={movie?.id} />
                </>
            )}
        </>
    )
}
