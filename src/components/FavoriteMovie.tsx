import { tmdbImageURL } from "../tools/URLs"
import { Movie } from "../tools/types"
import "../styles/favorites.css"

export const FavoriteMovie = (movieProps: { movie: Movie }) => {
    return (
        <div className="content-favorites-item">


            <img className="favorites__poster" src={tmdbImageURL + movieProps.movie.poster_path} />

            <div className="favorites-item-description">
                <h3 className="favorites__title">{movieProps.movie.title}</h3>
                <div className="favorites-background">
                    <img className="favorites-background__item" src={tmdbImageURL + movieProps.movie.backdrop_path} />
                    <div className="favorites-background__itemCover"></div>
                </div>
                <h4 className="favorites-background__overview">{movieProps.movie.overview}</h4>

                <div className="favorites-rating-container">
                    <div className="movie-rContainer__item">{Number(movieProps.movie.vote_average).toFixed(1)}</div>
                    <div className="movie-rContainer__item">votes: {movieProps.movie.vote_count}</div>
                    <div className="movie-rContainer__item">{movieProps.movie.runtime} min</div>
                </div>


            </div>






            {/* <div className="main-movie">
                <img className="main-movie__background" src={tmdbImageURL + movieProps.movie.backdrop_path} />
                <div className="main-movie__backgroundCover"></div>
                <div className="main-movie-info">
                    <h3 className="main-movie__title">{movieProps.movie.title}</h3>
                    <h4 className="main-movie__description">{movieProps.movie.overview}</h4>
                    <div className="movie-rating-container">
                        <div className="movie-rContainer__item">{Number(movieProps.movie.vote_average).toFixed(1)}</div>
                        <div className="movie-rContainer__item">votes: {movieProps.movie.vote_count}</div>
                        <div className="movie-rContainer__item">{movieProps.movie.runtime} min</div>
                    </div>
                </div>
            </div> */}







        </div>

    )
}
