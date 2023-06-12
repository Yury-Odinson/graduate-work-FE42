import { useEffect, useState } from "react"
import { Movie, getMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"

export const Content = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    useEffect(() => {
        getMovies().then((movies) => setMovies(movies.items))
    }, [])

    return (
        <>
            <div className="content">
                <div className="content-movies">
                    {/* <button onClick={() => console.log(movies)}>click</button> */}
                    {movies.map((item) => <li><CardMovie movie={item} /></li>)}
                </div>
            </div>
        </>
    )
}
