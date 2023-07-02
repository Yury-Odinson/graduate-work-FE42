import { useEffect, useState } from "react"
import { tmdbImageURL } from "../tools/URLs"
import { MovieCard, getGenres } from "../tools/movies"

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
                <div className="movie-item__voteAverage">{movieProps.movie.vote_average}</div>
                <span className="movie-item__name">{movieProps.movie.title}</span>
                <span className="movie-item__name">{movieProps.movie.genre_ids.join(", ")}</span>

                {/* <button onClick={() => getGenres(movieProps.movie.genre_ids)}>get genres</button> */}
            </div>
        </>
    )
}
