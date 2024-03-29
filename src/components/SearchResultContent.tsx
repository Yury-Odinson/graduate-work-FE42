import { useContext, useEffect, useState } from "react"
import { searchMovies } from "../tools/movies"
import { Link, useParams } from "react-router-dom"
import { CardMovie } from "./CardMovie"
import { Pagination } from '@mui/material'
import { MovieCard } from "../tools/types"
import { FilterContext } from "../tools/store"

export const SearchResultContent = () => {

    const [movies, setMovies] = useState<MovieCard[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const { searchString } = useParams()

    const filter = useContext(FilterContext)

    useEffect(() => {
        searchString && searchMovies(searchString, page, filter.filter.movieAdult.toString()).then((movies) => setMovies(movies.results))
    }, [searchString, page])



    if (filter.filter.movieSort == "Rating") {
        movies && movies.sort((a: any, b: any) => b.vote_average - a.vote_average)
    }

    if (filter.filter.movieSort == "Year") {
        movies && movies.sort((a: any, b: any) => Number(b.release_date.slice(0, 4)) - Number(a.release_date.slice(0, 4)))
    }

    // set total pages in the fetch request
    searchString && searchMovies(searchString, page, filter.filter.movieAdult.toString()).then((total) => setTotalPages(total.total_pages))

    const maxPages = () => totalPages >= 500 ? 500 : totalPages

    return (
        <>
            <h2 className="content__title">Search result</h2>
            <div className="content-pagination">
                {totalPages > 1 ? <Pagination
                    count={maxPages()}
                    defaultPage={1 || page}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    color="primary"
                    size="large"
                /> : null}

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
                {totalPages > 1 ? <Pagination
                    count={maxPages()}
                    defaultPage={1 || page}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    color="primary"
                    size="large"
                /> : null}
            </div>
        </>
    )
}
