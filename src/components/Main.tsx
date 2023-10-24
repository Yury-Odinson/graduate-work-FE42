import { Route, Routes } from "react-router-dom"
import { Header } from "./Header"
import { Content } from "./Content"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

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
                <Footer />
            </div>
        </>
    )
}
