import { Link, NavLink } from "react-router-dom"
import { LogoImg } from "./SvgComponents/LogoImg"
import { NavSettingsImg } from "./SvgComponents/NavSettingsImg"
import { NavFavoritesImg } from "./SvgComponents/NavFovoritesImg"
import { NavTrendsImg } from "./SvgComponents/NavTrendsImg"
import { NavShapeImg } from "./SvgComponents/NavShapeImg"
import { useContext } from "react"
import { NavTopRated } from "./SvgComponents/NavTopRated"
import { ThemeContext } from "../tools/store"

export const NavBar = () => {

    const theme = useContext(ThemeContext)

    const classNameActiveTab = () => {
        if (theme === "dark") {
            return "navigation__itemActive"
        } else {
            return "navigation__itemActiveLight"
        }
    }

    return (
        <div className={theme === "dark" ? "navigation" : "navigationLight"}>
            <div className="navigation__logo">
                <Link to={"/"}>
                    <LogoImg />
                </Link>
            </div>

            <nav className="navigation-items">
                <li className="navigation__item">
                    <NavLink to={"/"}
                        className={({ isActive }) =>
                            isActive ? classNameActiveTab() : ""
                        }>
                        <button className="navigation__button">
                            <NavShapeImg color="#80858B" />
                            <span className="navigation__textItem">Home</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to={"/toprated"}
                        className={({ isActive }) =>
                            isActive ? classNameActiveTab() : ""
                        }>
                        <button className="navigation__button">
                            <NavTopRated />
                            <span className="navigation__textItem">Top Rated</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to={"/trends"}
                        className={({ isActive }) =>
                            isActive ? classNameActiveTab() : ""
                        }>
                        <button className="navigation__button">
                            <NavTrendsImg />
                            <span className="navigation__textItem">Trends</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to={"/favorites"}
                        className={({ isActive }) =>
                            isActive ? classNameActiveTab() : ""
                        }>
                        <button className="navigation__button">
                            <NavFavoritesImg />
                            <span className="navigation__textItem">Favorites</span>
                        </button>
                    </NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to={"/settings"}
                        className={({ isActive }) =>
                            isActive ? classNameActiveTab() : ""
                        }>
                        <button className="navigation__button">
                            <NavSettingsImg />
                            <span className="navigation__textItem">Settings</span>
                        </button>
                    </NavLink>
                </li>
            </nav>
        </div>
    )
}
