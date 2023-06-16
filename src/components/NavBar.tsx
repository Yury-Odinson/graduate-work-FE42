import { Link } from "react-router-dom"
import "../styles/navBar.css"
import { LogoImg } from "./SvgComponents/LogoImg"
import { NavSettingsImg } from "./SvgComponents/NavSettingsImg"
import { NavFavoritesImg } from "./SvgComponents/NavFovoritesImg"
import { NavTrendsImg } from "./SvgComponents/NavTrendsImg"
import { NavShapeImg } from "./SvgComponents/NavShapeImg"

export const NavBar = () => {

    return (
        <div className="navigation">
            <Link to={"/"}>
                <LogoImg />
            </Link>
            <nav className="navigation-items">
                <Link to={"/home"}>
                    <button className="navigation__item">
                        <NavShapeImg />
                        <span className="navigation__textItem">Home</span>
                    </button>
                </Link>
                <Link to={"/trends"}>
                    <button className="navigation__item">
                        <NavTrendsImg />
                        <span className="navigation__textItem">Trends</span>
                    </button>
                </Link>
                <Link to={"/favorites"}>
                    <button className="navigation__item">
                        <NavFavoritesImg />
                        <span className="navigation__textItem">Favorites</span>
                    </button>
                </Link>
                <Link to={"/settings"}>
                    <button className="navigation__item">
                        <NavSettingsImg />
                        <span className="navigation__textItem">Settings</span>
                    </button>
                </Link>
            </nav>
        </div>
    )
}
