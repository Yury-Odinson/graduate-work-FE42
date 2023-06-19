import { Link, Route, Routes } from "react-router-dom";
import { HomeContent } from "./HomeContent";
import { TrendsContent } from "./TrendsContent";
import { useState } from "react";
import { SearchResultContent } from "./SearchResultContent";

export const Content = () => {
    const [page, setPage] = useState(1)
    return (
        <>
            <div className="content">
                <Routes>
                    <Route path="/" element={<SearchResultContent />}></Route>
                    <Route path="/s/:searchString" element={<SearchResultContent />}></Route>
                    <Route path="/home/" element={<HomeContent />}></Route>
                    <Route path="/trends" element={<TrendsContent />}></Route>
                    <Route path="/favorites" element={<HomeContent />}></Route>
                    <Route path="/settings" element={<HomeContent />}></Route>
                </Routes>
                <Link to={"/login"}><button>open auth page</button></Link>
            </div>
        </>
    )
}
