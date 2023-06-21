import { Route, Routes } from "react-router-dom"
import "../styles/main.css"
import { Header } from "./Header"
import { Content } from "./Content"
import { NavBar } from "./NavBar"

export type ExpandedMenuProps = {
    opened: boolean,
    changeState: () => void
}

export type SearchValueProps = {
    inputSearchValue: string
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
