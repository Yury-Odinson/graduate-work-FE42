import { Link } from "react-router-dom"
import "../styles/main.css"
import { Header } from "./Header"
import { Content } from "./Content"

export type ExpandedMenuProps = {
    opened: boolean,
    changeState: () => void
}

export const Main = () => {

    return (
        <>
            <Header />
            <Content />
            <Link to={"/login"}><button>open auth page</button></Link>
        </>
    )
}
