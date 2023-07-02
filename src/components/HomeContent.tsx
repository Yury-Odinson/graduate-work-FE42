import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"
import { Pagination } from "./Pagination"
import { MovieCard } from "../tools/types"

export const HomeContent = () => {
    const [movies, setMovies] = useState<MovieCard[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getMovies(page).then((movies) => setMovies(movies.results))
    }, [])

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
        getMovies(pageNumber).then((movies) => setMovies(movies.results))
    }

    return (
        <>
            <h2 className="content__title">Top rated movies</h2>
            <div className="content-pagination">
                <Pagination currentPage={page} totalPages={500} handlerSetPage={(pageNum) => changePage(pageNum)} />
            </div>
            <div className="content-movies">
                {movies.map((item) =>
                    <li key={item.id}>
                        <Link key={item.id} to={`/movie/${item.id}`}>
                            <CardMovie movie={item} />
                        </Link>
                    </li>
                )}
            </div>
            <div className="content-pagination">
                <Pagination currentPage={page} totalPages={500} handlerSetPage={(pageNum) => changePage(pageNum)} />
            </div>
        </>
    )
}
