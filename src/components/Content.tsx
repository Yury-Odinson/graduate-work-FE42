import { useEffect, useState } from "react"
import { Movie, getMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"
import { Link } from "react-router-dom"

export const Content = () => {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies().then((movies) => setMovies(movies.results))
    }, [])

    return (
        <>
            <div className="content">
                <div className="content-movies">
                    {movies.map((item) =>
                        <li>
                            <Link to={"/movie/" + item.id}>
                                <CardMovie movie={item} />
                            </Link>
                        </li>
                    )}
                </div>
            </div>
        </>
    )
}
