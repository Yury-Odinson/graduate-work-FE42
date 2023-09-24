import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Filter } from "./Filter"
import { ThemeContext } from "../tools/store"

export const Header = () => {

    const [searchValue, setSearchValue] = useState("")

    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""

    return (
        <>
            <div className="header">
                <label className="header-search">
                    <input className={theme === "dark" ? "header-search__input" : "header-search__input inputLight"} type="text" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} />
                    <div className="header-search-buttonsContainer">
                        <Filter />
                        <Link to={"/search/" + searchValue}>
                            <button className={"header-search__button" + classNameTheme()} />
                        </Link>
                    </div>
                </label >
                {/* <HeaderUserMenu /> */}
            </div >
        </>
    )
}
