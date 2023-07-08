import { Route, Routes } from "react-router-dom";
import { TrendsContent } from "./TrendsContent";
import { SearchResultContent } from "./SearchResultContent";
import { MoviePage } from "./MoviePage";
import { MainContent } from "./MainContent";
import { TopRatedContent } from "./TopRatedContent";

export const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<MainContent />}></Route>
                <Route path="/search/:searchString" element={<SearchResultContent />}></Route>
                <Route path="/toprated" element={<TopRatedContent />}></Route>
                <Route path="/trends" element={<TrendsContent />}></Route>
                <Route path="/favorites" element={<TopRatedContent />}></Route>
                <Route path="/settings" element={<TopRatedContent />}></Route>
                <Route path="/movie/:id" element={<MoviePage />}></Route>
            </Routes>
            {/* <Link to={"/login"}><button>open auth page</button></Link> */}

        </div>
    )
}
