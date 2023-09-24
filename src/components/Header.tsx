import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Filter } from "./Filter"
import { ThemeContext } from "../tools/store"
import { Drawer } from "@mui/material"
import { LogoImg } from "./SvgComponents/LogoImg"

export const Header = () => {

    const [searchValue, setSearchValue] = useState("")
    const [expanded, setExpanded] = useState(false)

    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""

    return (
        <>
            <div className="header">
                <button className="header-menuMobile" onClick={() => setExpanded(!expanded)} />
                <ExpandedMenu opened={expanded} close={() => setExpanded(false)} />
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

const ExpandedMenu = ({ opened, close }: any) => {

    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""


    const classNameActiveTab = () => {
        if (theme === "dark") {
            return "navigation__itemActive"
        } else {
            return "navigation__itemActiveLight"
        }
    }

    return (
        <Drawer
            anchor={"right"}
            open={opened}
            onClose={close}
        >
            <div className={theme === "dark" ? "navigationMobile" : "navigationLightMobile"}>
                <div className="navigation__logo">
                    <Link to={"/"}>
                        <LogoImg />
                    </Link>
                </div>

                <nav className="navigation-itemsMobile">
                    <li className="navigation__itemMobile">
                        <NavLink to={"/"}
                            className={({ isActive }) =>
                                isActive ? classNameActiveTab() : ""
                            }>
                            <button className="navigation__buttonMobile">
                                <span className="navigation__textItemMobile">Home</span>
                            </button>
                        </NavLink>
                    </li>
                    <li className="navigation__itemMobile">
                        <NavLink to={"/toprated"}
                            className={({ isActive }) =>
                                isActive ? classNameActiveTab() : ""
                            }>
                            <button className="navigation__buttonMobile">
                                <span className="navigation__textItemMobile">Top Rated</span>
                            </button>
                        </NavLink>
                    </li>
                    <li className="navigation__itemMobile">
                        <NavLink to={"/trends"}
                            className={({ isActive }) =>
                                isActive ? classNameActiveTab() : ""
                            }>
                            <button className="navigation__buttonMobile">
                                <span className="navigation__textItemMobile">Trends</span>
                            </button>
                        </NavLink>
                    </li>
                    <li className="navigation__itemMobile">
                        <NavLink to={"/favorites"}
                            className={({ isActive }) =>
                                isActive ? classNameActiveTab() : ""
                            }>
                            <button className="navigation__buttonMobile">
                                <span className="navigation__textItemMobile">Favorites</span>
                            </button>
                        </NavLink>
                    </li>
                    <li className="navigation__itemMobile">
                        <NavLink to={"/settings"}
                            className={({ isActive }) =>
                                isActive ? classNameActiveTab() : ""
                            }>
                            <button className="navigation__buttonMobile">
                                <span className="navigation__textItemMobile">Settings</span>
                            </button>
                        </NavLink>
                    </li>
                </nav>
            </div>
        </Drawer >
    )
}
