import { Route, Routes } from "react-router-dom";
import { HomeContent } from "./HomeContent";
import { TrendsContent } from "./TrendsContent";
import { SearchResultContent } from "./SearchResultContent";
import { MoviePage } from "./MoviePage";
import { MainContent } from "./MainContent";

export const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<MainContent />}></Route>
                <Route path="/search/:searchString" element={<SearchResultContent />}></Route>
                <Route path="/home" element={<HomeContent />}></Route>
                <Route path="/trends" element={<TrendsContent />}></Route>
                <Route path="/favorites" element={<HomeContent />}></Route>
                <Route path="/settings" element={<HomeContent />}></Route>
                <Route path="/movie/:id" element={<MoviePage />}></Route>
            </Routes>
            {/* <Link to={"/login"}><button>open auth page</button></Link> */}

        </div>
    )
}
