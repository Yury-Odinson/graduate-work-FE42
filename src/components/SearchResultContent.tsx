import { useEffect, useState } from "react"
import { Movie, searchMovies } from "../tools/movies"
import { Link, useParams } from "react-router-dom"
import { CardMovie } from "./CardMovie"
import { Pagination } from "./Pagination"

export const SearchResultContent = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const { searchString } = useParams()

    useEffect(() => {
        searchString && searchMovies(searchString, page).then((movies) => setMovies(movies.results))
    }, [searchString])

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
        searchString && searchMovies(searchString, pageNumber).then((movies) => setMovies(movies.results))
    }

    // set total pages in the fetch request
    searchString && searchMovies(searchString, page).then((total) => setTotalPages(total.total_pages))

    return (
        <>
            <h2 className="content__title">Search result</h2>
            <div className="content-pagination">
                <Pagination currentPage={page} totalPages={totalPages} handlerSetPage={(pageNum) => changePage(pageNum)} />
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
                <Pagination currentPage={page} totalPages={totalPages} handlerSetPage={(pageNum) => changePage(pageNum)} />
            </div>
        </>
    )
}
