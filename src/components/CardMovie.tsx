import { useEffect, useState } from "react"
import { tmdbImageURL } from "../tools/URLs"
import { getGenres } from "../tools/movies"
import { MovieCard } from "../tools/types"

export const CardMovie = (movieProps: { movie: MovieCard }) => {

    const [allGenres, setAllGenres] = useState([])
    const [genres, setGenres] = useState()
    useEffect(() => {
        getGenres()
            .then((response) => setAllGenres(response.genres))
            .then(() => setThisGenres(movieProps.movie.genre_ids, allGenres))
    }, [])

    const setThisGenres = (idGenres: number[], allGenresName: any[]) => {
        const test1 = idGenres.map(item => item)
        for (let i = 0; i < idGenres.length; i++) {
            setGenres(allGenresName.find(item => item.id === idGenres[i]))
        }
    }

    return (
        <>
            <div className="movie-item">
                <img className="movie-item__image" src={tmdbImageURL + movieProps.movie.poster_path} alt={movieProps.movie.original_title} height={350} />
                <div className="movie-item__voteAverage">{Number(movieProps.movie.vote_average).toFixed(1)}</div>
                <span className="movie-item__name">{movieProps.movie.title}</span>
                <span className="movie-item__name">{movieProps.movie.genre_ids.join(", ")}</span>
            </div>
        </>
    )
}
