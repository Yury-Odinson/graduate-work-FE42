import { useEffect, useState } from "react"
import { Movie } from "../tools/types"
import { getFavoritesMovies } from "../tools/movies"
import { FavoriteMovie } from "./FavoriteMovie"

export const FavoritesContent = () => {

    const [idMovies, setIdMovies] = useState([])
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        setIdMovies(JSON.parse(localStorage.getItem("idMovies") || "[]"))
    }, [])


    useEffect(() => {
        getFavoritesMovies(idMovies).then((movie) => setMovies(movie))
    }, [localStorage.getItem("idMovies")])

    localStorage.getItem("idMovies")
    console.log(movies)

    return (
        <div>
            <h2 className="content__title">Favorites</h2>
            {movies && movies.map((item) =>
                <li key={item.id}>
                    <FavoriteMovie movie={item} />
                </li>
            )}
            {/* <button onClick={() => loadFavoritesMovies()}>check</button> */}
        </div>
    )
}
