import { useContext, useEffect, useState } from "react"
import { FilterMenuProps } from "../tools/types"
import { Link } from "react-router-dom"
import { Drawer } from "@mui/material"
import { FilterContext, ThemeContext } from "../tools/store"

export const Filter = () => {

    const [expanded, setExpanded] = useState(false)

    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""

    return (
        <>
            <button className={"header-filter__button" + classNameTheme()} onClick={() => setExpanded(!expanded)} />
            <ExpandedMenu opened={expanded} close={() => setExpanded(false)} />
        </>
    )
}

const ExpandedMenu = ({ opened, close }: FilterMenuProps) => {
    const [movieSort, setMovieSort] = useState("")
    const [movieName, setMovieName] = useState("")
    const [movieYear, setMovieYear] = useState("")
    const [movieAdult, setMovieAdult] = useState(false)

    useEffect(() => {

    }, [movieSort, movieName, movieYear, movieAdult])

    const setContext = useContext(FilterContext)
    const theme = useContext(ThemeContext)

    const classNameTheme = () => theme === "light" ? "Light" : ""

    const clearFilter = () => {
        setMovieSort("");
        setMovieName("");
        setMovieYear("");
        setMovieAdult(false);
    }

    return (
        <Drawer
            anchor={"right"}
            open={opened}
            onClose={close}
        >
            <div className={"filter" + classNameTheme()}>
                <div className="filter-header">
                    <h2 className={"filter__title" + classNameTheme()}>Filters</h2>
                </div>
                <div className="filter-sort">
                    <span className={"filter-sort__title" + classNameTheme()}>Sort by</span>
                    <label className="filter-sort-items">
                        <button className={movieSort === "Rating" ? "filter-sort__buttonActive" : "filter-sort__button" + classNameTheme()} onClick={() => setMovieSort("Rating")}>Rating</button>
                        <button className={movieSort === "Year" ? "filter-sort__buttonActive" : "filter-sort__button" + classNameTheme()} onClick={() => setMovieSort("Year")}>Year</button>
                    </label>
                </div>
                <label className="filter-movieName">
                    <span className={"filter-movieName__title" + classNameTheme()}>Full or short movie name *</span>
                    <input className={"filter-movieName__input" + classNameTheme()} placeholder="Your text" onChange={(e) => setMovieName(e.target.value)} value={movieName}></input>
                </label>
                <div className="filter-additional">
                    <label className="filter-year">
                        <span className={"filter-additional__title" + classNameTheme()}>Year of issue</span>
                        <input className={"filter-additional__input" + classNameTheme()} placeholder="Year" maxLength={4} onChange={(e) => setMovieYear(e.target.value)} value={movieYear}></input>
                    </label>
                    <label className="filter-adult">
                        <span className={"filter-adult__title" + classNameTheme()}>Adult</span>
                        <input className="toggle" type="checkbox" onChange={() => setMovieAdult(!movieAdult)} checked={movieAdult}></input>
                    </label>
                </div>
                <div className="filter-footer">
                    <label className="filter-footer-items">
                        <button className={"filter-footer__buttons" + classNameTheme()} onClick={() => clearFilter()}>Clear filter</button>
                        <Link to={"/search/" + movieName}>
                            <button className={"filter-footer__buttons" + classNameTheme()} onClick={() => setContext.setFilter({ movieSort, movieName, movieYear, movieAdult })}>Show results</button>
                        </Link>
                    </label>
                </div>
            </div>
        </Drawer >
    )
}
