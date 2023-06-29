import { tmdbImageURL } from "../tools/URLs"
import { Movie } from "../tools/movies"

export const CardMovie = (movieProps: { movie: Movie }) => {

    return (
        <>
            <div className="movie-item">
                <img className="movie-item__image" src={tmdbImageURL + movieProps.movie.poster_path} alt={movieProps.movie.original_title} height={350} />
                <div className="movie-item__voteAverage">{movieProps.movie.vote_average}</div>
                <span className="movie-item__name">{movieProps.movie.original_title}</span>
                {/* <span className="movie-item__crew">{movieProps.movie.genre_ids}</span> */}
            </div>
        </>
    )
}
