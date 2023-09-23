import { tmdbImageURL } from "../tools/URLs"
import { Movie } from "../tools/types"
import "../styles/favorites.css"
import { useContext } from "react"
import { ThemeContext } from "../tools/store"

export const FavoriteMovie = (movieProps: { movie: Movie }) => {

    const classNameTheme = () => theme === "light" ? "Light" : ""
    const theme = useContext(ThemeContext)

    const favorites = JSON.parse(localStorage.getItem("idMovies") || "[]")
    const removeFromFavorites = () => {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i] === movieProps.movie.id) {
                console.log(favorites[i])
                favorites.splice(i, 1)
            }
        }
        localStorage.setItem("idMovies", JSON.stringify(favorites))
    }

    return (
        <div className="content-favorites-item">
            <div>
                <img className="favorites__poster" src={tmdbImageURL + movieProps.movie.poster_path} />
                <div className="movie-buttons">
                    <button className={"movie-buttons__item" + classNameTheme()} onClick={() => removeFromFavorites()}>Remove from favorites</button>
                    <button className={"movie-buttons__item" + classNameTheme()}>
                        <img src="/images/share.png" />
                    </button>
                </div>
            </div>
            <div className="favorites-info">
                <img className="favorites-background__item" src={tmdbImageURL + movieProps.movie.backdrop_path} />
                <div className="favorites-background__itemCover" />
                <div className="favorites-info-description">
                    <h3 className="favorites__title">{movieProps.movie.title}</h3>

                    <h4 className="favorites-background__overview">{movieProps.movie.overview}</h4>
                    <div className="favorites-rating-container">
                        <div className="movie-rContainer__item">{Number(movieProps.movie.vote_average).toFixed(1)}</div>
                        <div className="movie-rContainer__item">votes: {movieProps.movie.vote_count}</div>
                        <div className="movie-rContainer__item">{movieProps.movie.runtime} min</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
