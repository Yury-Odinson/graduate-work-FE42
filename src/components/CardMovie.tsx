import { Movie } from "../tools/movies"

export const CardMovie = (movieProps: { movie: Movie }) => {
    return (
        <>
            <div className="movie-item">
                <img className="movie-item__image" src={movieProps.movie.image} alt="asdf" />
                <div className="movie-item__rating">{movieProps.movie.imDbRating}</div>
                <span className="movie-item__name">{movieProps.movie.title}</span>
                <span className="movie-item__crew">{movieProps.movie.crew}</span>
            </div>
        </>
    )
}
