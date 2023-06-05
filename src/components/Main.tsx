import { Link } from "react-router-dom"
import "../styles/main.css"
import { Header } from "./Header"

export type ExpandedMenuProps = {
    opened: boolean,
    changeState: () => void
}

export const Main = () => {

    return (
        <>
            <Header />
            <div className="content">
                <Link to={"/login"}><button>open auth page</button></Link>
            </div>
        </>
    )
}
