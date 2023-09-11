import { useEffect, useState } from "react"
import { Movie } from "../tools/types"
import { getFavoritesMovies } from "../tools/movies"
import { FavoriteMovie } from "./FavoriteMovie"

export const FavoritesContent = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getFavoritesMovies(JSON.parse(localStorage.getItem("idMovies") || "[]")).then((movie) => setMovies(movie))
    }, [localStorage.getItem("idMovies")])

    return (
        <div>
            <h2 className="content__title">Favorites</h2>
            {movies && movies.map((item) =>
                <li key={item.id}>
                    <FavoriteMovie movie={item} />
                </li>
            )}
        </div>
    )
}
