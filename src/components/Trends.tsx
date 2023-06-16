import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Movie, getPopularMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"

export const Trends = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPopularMovies(page).then((movies) => setMovies(movies.results))
    }, [])

    const numbersForPagination = (currentPage: number) => {
        if (currentPage > 0 && currentPage < 500) {
            return (
                <>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage - 3}</button>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage - 2}</button>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage - 1}</button>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage}</button>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage + 1}</button>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage + 2}</button>
                    <button className="content-pages__navigation" onClick={() => setPage(currentPage)}>{currentPage + 3}</button>
                </>
            )
        }
    }

    return (
        <>
                <div className="content-pages">
                    {numbersForPagination(page)}
                </div>
                <div className="content-movies">
                    {movies.map((item) =>
                        <li>
                            <Link to={"/movie_" + item.id}>
                                <CardMovie movie={item} />
                            </Link>
                        </li>
                    )}
                </div>
        </>
    )
}
