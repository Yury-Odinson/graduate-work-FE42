import { Link, Route, Routes } from "react-router-dom"
import "../styles/main.css"
import { Header } from "./Header"
import { Content } from "./Content"
import { Home } from "./Home"
import { NavBar } from "./NavBar"
import { CleanPage } from "./CleanPage"

export type ExpandedMenuProps = {
    opened: boolean,
    changeState: () => void
}

export const Main = () => {

    return (
        <>
            <NavBar />
            <div className="main">
                <Header />
                <Routes>
                    <Route path="/*" element={<Content />}></Route>
                </Routes>
            </div>
        </>
    )
}
