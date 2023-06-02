import { Link } from "react-router-dom"
import "../styles/main.css"

export const Main = () => {
    return (
        <>

            <div className="header">
                <input className="header__search" type="search" placeholder="Search"></input>
                <div className="header__user">
                </div>
            </div>

            <div className="content">
                <Link to={"/login"}><button>SDVSG</button></Link>
            </div>


        </>
    )
}