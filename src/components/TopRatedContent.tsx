import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { getMovies } from "../tools/movies"
import { CardMovie } from "./CardMovie"
import { MovieCard } from "../tools/types"
import { Pagination } from '@mui/material'
import { ThemeContext } from "../tools/store"

export const TopRatedContent = () => {
    const [movies, setMovies] = useState<MovieCard[]>([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    useEffect(() => {
        getMovies(page).then((movies) => {
            setMovies(movies.results)
            setTotalPage(movies.total_pages)
        })
    }, [page])

    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""

    // tmdb return max 500 page. if page > 500 - error
    const maxPages = () => totalPage >= 500 ? 500 : totalPage

    return (
        <>
            <h2 className={"content__title" + classNameTheme()}>Top rated movies</h2>
            <div className="content-pagination">
                <Pagination
                    count={maxPages()}
                    defaultPage={1 || page}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    color="primary"
                    size="large"
                />
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
                <Pagination
                    count={maxPages()}
                    defaultPage={1 || page}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    color="primary"
                    size="large"
                />
            </div>
        </>
    )
}
