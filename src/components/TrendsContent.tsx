import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Movie, getPopularMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"
import { Pagination } from "./Pagination"

export const TrendsContent = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getPopularMovies(page).then((movies) => setMovies(movies.results))
    }, [])

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
        getPopularMovies(pageNumber).then((movies) => setMovies(movies.results))
    }

    return (
        <>
            <h2 className="content__title">In trends</h2>
            <div className="content-pagination">
                <Pagination currentPage={page} totalPages={500} handlerSetPage={(pageNum) => changePage(pageNum)} />
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
            <div className="content-pagination">
                <Pagination currentPage={page} totalPages={500} handlerSetPage={(pageNum) => changePage(pageNum)} />
            </div>
        </>
    )
}
