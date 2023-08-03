import { useState } from "react"
import { FilterMenuProps } from "../tools/types"
import { getMoviesWithFilter } from "../tools/movies"
import { Link } from "react-router-dom"
import { Drawer } from "@mui/material"
import "../styles/filter.css"

export const Filter = () => {

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <button className="header-filter__button" onClick={() => setExpanded(!expanded)}></button>
            <ExpandedMenu opened={expanded} close={() => setExpanded(false)} />
        </>
    )
}

const ExpandedMenu = ({ opened, close }: FilterMenuProps) => {

    const [sortBy, setSortBy] = useState("")
    const [movieName, setMovieName] = useState("")
    const [movieYear, setMovieYear] = useState("")
    const [movieAdult, setMovieAdult] = useState(false)

    const clearFilter = () => {
        setSortBy("");
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
            <div className="filter">
                <div className="filter-header">
                    <h2 className="filter__title">Filters</h2>
                </div>
                <div className="filter-sort">
                    <span className="filter-sort__title">Sort by</span>
                    <label className="filter-sort-items">
                        <button className="filter-sort__button" onClick={() => setSortBy("Rating")}>Rating</button>
                        <button className="filter-sort__button" onClick={() => setSortBy("Year")}>Year</button>
                    </label>
                </div>
                <label className="filter-movieName">
                    <span className="filter-movieName__title">Full or short movie name *</span>
                    <input className="filter-movieName__input" placeholder="Your text" onChange={(e) => setMovieName(e.target.value)} value={movieName}></input>
                </label>
                <div className="filter-additional">
                    <label className="filter-year">
                        <span className="filter-additional__title">Year of issue</span>
                        <input className="filter-additional__input" placeholder="Year" maxLength={4} onChange={(e) => setMovieYear(e.target.value)} value={movieYear}></input>
                    </label>
                    <label className="filter-adult">
                        <span className="filter-adult__title">Adult</span>
                        <input className="toggle" type="checkbox" onChange={() => setMovieAdult(!movieAdult)} checked={movieAdult}></input>
                    </label>
                </div>
                <div className="filter-footer">
                    <label className="filter-footer-items">
                        <button className="filter-footer__buttons" onClick={() => clearFilter()}>Clear filter</button>
                        <Link to={"/search/"}>
                            <button className="filter-footer__buttons" onClick={() => getMoviesWithFilter({ movieName, movieAdult, movieYear })}>Show results</button>
                        </Link>
                    </label>
                </div>
            </div>
        </Drawer>
    )
}
