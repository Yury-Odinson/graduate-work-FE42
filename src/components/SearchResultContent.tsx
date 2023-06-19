import { useEffect, useState } from "react"
import { Movie, searchMovies } from "../tools/movies"
import { Link, useParams } from "react-router-dom"
import { CardMovie } from "./CardMovie"
import { SearchValueProps } from "./Main"

export const SearchResultContent = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(1)
    const { searchString } = useParams()

    useEffect(() => {
        searchString && searchMovies(searchString, page).then((movies) => setMovies(movies.results))
    }, [searchString])

    const changePage = (pageNumber: number) => {
        setPage(pageNumber)
        searchString && searchMovies(searchString, pageNumber).then((movies) => setMovies(movies.results))
    }

    const pagination = () => {
        return (
            <>
                {page === 1 ? null : <button className="pagination__button" onClick={() => changePage(page - 1)}>BACK page</button >}
                {page === 1 ? null : <button className="pagination__button" onClick={() => changePage(1)}>{1}</button >}

                {page < 0 ? null : <button className="pagination__button" onClick={() => changePage(page - 3)}>{page - 3}</button >}
                {page < 0 ? null : <button className="pagination__button" onClick={() => changePage(page - 2)}>{page - 2}</button >}
                {page < 0 ? null : <button className="pagination__button" onClick={() => changePage(page - 1)}>{page - 1}</button >}

                <button className="pagination__button pagination__activeButton" onClick={() => changePage(page)}>{page}</button >

                {page > 500 ? null : <button className="pagination__button" onClick={() => changePage(page + 1)}>{page + 1}</button >}
                {page > 500 ? null : <button className="pagination__button" onClick={() => changePage(page + 2)}>{page + 2}</button >}
                {page > 500 ? null : <button className="pagination__button" onClick={() => changePage(page + 3)}>{page + 3}</button >}

                {page === 500 ? null : <button className="pagination__button" onClick={() => changePage(500)}>{500}</button >}
                {page === 500 ? null : <button className="pagination__button" onClick={() => changePage(page + 1)}>NEXT page</button>}
            </>
        )
    }

    return (
        <>
            <h2 className="content__title">Search result</h2>
            <div className="content-pagination">
                {pagination()}
            </div>
            <div className="content-movies">

                <div className="content-movies">
                    {movies.map((item) =>
                        <li>
                            <Link to={"/movie_" + item.id}>
                                <CardMovie movie={item} />
                            </Link>
                        </li>
                    )}
                </div>
            </div>
        </>

    )
}
