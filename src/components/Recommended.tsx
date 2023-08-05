import { useEffect, useState } from "react"
import { MovieCard, RecommendedMoviesProps } from "../tools/types"
import { getRecommendedMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"
import { Link } from "react-router-dom"
import "../styles/recommended.css"

export const Recommended = ({ idParentMovie }: RecommendedMoviesProps) => {

    const [recMovies, setRecMovies] = useState<MovieCard[]>([])

    useEffect(() => {
        getRecommendedMovies(idParentMovie).then((movies) => setRecMovies(movies.results))
    }, [idParentMovie])

    return (
        <div className="main-recommended">
            {recMovies && recMovies.map((item) =>
                <li key={item.id}>
                    <Link key={item.id} to={`/movie/${item.id}`}>
                        <CardMovie movie={item} />
                    </Link>
                </li>
            )}
        </div>
    )
}
