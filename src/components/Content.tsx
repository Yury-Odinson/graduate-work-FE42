import { useEffect, useState } from "react"
import { Movie, getMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"
import { Link } from "react-router-dom"

export const Content = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(10)

    useEffect(() => {
        getMovies(page).then((movies) => setMovies(movies.results))
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
            <div className="content">
                <div className="content-pages">

                    {numbersForPagination(page)}

                </div>
                <div className="content-movies">
                    {movies.map((item) =>
                        <li>
                            <Link to={"/movie/" + item.id}>
                                <CardMovie movie={item} />
                            </Link>
                        </li>
                    )}
                </div>
            </div >
        </>
    )
}
