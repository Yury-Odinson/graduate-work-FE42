import { Link, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { CleanPage } from "./CleanPage";

export const Content = () => {
    return (
        <>
            <div className="content">
                <Routes>
                    <Route path="/" element={<CleanPage />}></Route>
                    <Route path="/home/" element={<Home />}></Route>
                    <Route path="/trends" element={<Home />}></Route>
                    <Route path="/favorites" element={<Home />}></Route>
                    <Route path="/settings" element={<Home />}></Route>
                </Routes>
                <Link to={"/login"}><button>open auth page</button></Link>
            </div>
        </>
    )
}
