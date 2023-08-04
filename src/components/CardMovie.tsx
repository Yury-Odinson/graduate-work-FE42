import { tmdbImageURL } from "../tools/URLs"
import { MovieCard } from "../tools/types"

export const CardMovie = (movieProps: { movie: MovieCard }) => {

    return (

        <>
            <div className="movie-item">
                {
                    movieProps.movie.adult === true ? <span className="movie-item__adult"> 18+ </span> : null
                }
                <img className="movie-item__image"
                    src={tmdbImageURL + movieProps.movie.poster_path}
                    alt={movieProps.movie.original_title}
                    height={350}
                    onError={(event) => {
                        event.currentTarget.src = "https://sun9-47.userapi.com/impg/1f3OceQFnZsE3t6Dk3tDPwGPa1-h2_oEeaXMWQ/gYtwQOpFlRc.jpg?size=365x455&quality=95&sign=c30e73fd6dddcc5ab508b49290ce28c9&type=album"
                    }}
                />
                <div className="movie-item__voteAverage">{Number(movieProps.movie.vote_average).toFixed(1)}</div>
                <span className="movie-item__name">{movieProps.movie.title}</span>
                <span className="movie-item__year">{movieProps.movie.release_date.split("", 4)}</span>
                {/* <span className="movie-item__genres">{movieProps.movie.genre_ids.join(", ")}</span> */}
            </div>
        </>
    )
}
