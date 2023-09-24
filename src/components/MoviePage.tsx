import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { tmdbImageURL } from "../tools/URLs"
import { Movie } from "../tools/types"
import { Recommended } from "./Recommended"
import { addToFavorites, getMovie } from "../tools/movies"
import { ThemeContext } from "../tools/store"
import { idMoviesLS } from "../tools/storage"

export const MoviePage = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState<Movie>()
    const [isFavotires, setIsFavorites] = useState(false)

    useEffect(() => {
        id && getMovie(id).then((movie) => setMovie(movie));
        idMoviesLS.find((e) => e === id ? setIsFavorites(true) : setIsFavorites(false))
    }, [id, idMoviesLS, isFavotires])


    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""

    const removeFromFavorites = () => {
        for (let i = 0; i < idMoviesLS.length; i++) {
            if (idMoviesLS[i] === id) {
                console.log(idMoviesLS[i])
                idMoviesLS.splice(i, 1)
            }
        }
        localStorage.setItem("idMovies", JSON.stringify(idMoviesLS))
    }

    const handlerSetFavorites = () => {
        if (isFavotires === false) {
            addToFavorites(`${id}`);
            setIsFavorites(true);

        } else {
            removeFromFavorites();
            setIsFavorites(false);
        }
    }

    const classButtonFavorites = () => isFavotires === true ? "movie-buttons__favorites" : "movie-buttons__item"

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
                            <img className="movie__poster"
                                src={tmdbImageURL + movie.poster_path}
                                alt="movie poster"
                                onError={(event) => {
                                    event.currentTarget.src = "https://sun9-47.userapi.com/impg/1f3OceQFnZsE3t6Dk3tDPwGPa1-h2_oEeaXMWQ/gYtwQOpFlRc.jpg?size=365x455&quality=95&sign=c30e73fd6dddcc5ab508b49290ce28c9&type=album"
                                }}
                            />
                            <img className="movie__posterMobile"
                                src={tmdbImageURL + movie.backdrop_path}
                                alt="movie poster"
                                onError={(event) => {
                                    event.currentTarget.src = "https://sun9-47.userapi.com/impg/1f3OceQFnZsE3t6Dk3tDPwGPa1-h2_oEeaXMWQ/gYtwQOpFlRc.jpg?size=365x455&quality=95&sign=c30e73fd6dddcc5ab508b49290ce28c9&type=album"
                                }}
                            />
                            <div className="movie-buttons">
                                <button className={classButtonFavorites()} onClick={() => handlerSetFavorites()}>
                                    <img src="/images/addToFavorites.png" />
                                </button>
                                <button className="movie-buttons__item">
                                    <img src="/images/share.png" />
                                </button>
                            </div>
                        </div>
                        <div className="movie-info">
                            <h2 className={"movie__title" + classNameTheme()}>{movie.title}</h2>
                            <p className="movie__tagline">{movie.tagline}</p>
                            <div className="movie-rating-container">
                                <div className="movie-rContainer__item">{Number(movie.vote_average).toFixed(1)}</div>
                                <div className="movie-rContainer__item">votes: {movie.vote_count}</div>
                                <div className="movie-rContainer__item">{movie.runtime} min</div>
                            </div>
                            <span className={"movie__description" + classNameTheme()}>{movie.overview}</span>
                            <div className={"movie-information-container" + classNameTheme()}>
                                <table>
                                    <thead />
                                    <tbody>
                                        <tr>
                                            <td>Year</td>
                                            <td className={"movie-table__last" + classNameTheme()}>{movie.release_date.slice(0, 4)}</td>
                                        </tr>
                                        <tr>
                                            <td>Genres</td>
                                            <td className={"movie-table__last" + classNameTheme()}>{genres}</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td className={"movie-table__last" + classNameTheme()}>{countries}</td>
                                        </tr>
                                        <tr>
                                            <td>Spoken languages</td>
                                            <td className={"movie-table__last" + classNameTheme()}>{languages}</td>
                                        </tr>
                                        <tr>
                                            <td>Production</td>
                                            <td className={"movie-table__last" + classNameTheme()}>{companies} </td>
                                        </tr>
                                        <tr>
                                            <td>Budget</td>
                                            <td className={"movie-table__last" + classNameTheme()}>$ {numberWithSpaces(movie.budget)}</td>
                                        </tr>
                                        <tr>
                                            <td>Revenue</td>
                                            <td className={"movie-table__last" + classNameTheme()}>$ {numberWithSpaces(movie.revenue)}</td>
                                        </tr>
                                        <tr>
                                            <td>Released</td>
                                            <td className={"movie-table__last" + classNameTheme()}>{movie.release_date}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot />
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
