import { Route, Routes } from "react-router-dom";
import { TrendsContent } from "./TrendsContent";
import { SearchResultContent } from "./SearchResultContent";
import { MoviePage } from "./MoviePage";
import { MainContent } from "./MainContent";
import { TopRatedContent } from "./TopRatedContent";
import { FavoritesContent } from "./FavoritesContent";
import { Settings } from "./Settings";

export const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/search/:searchString" element={<SearchResultContent />} />
                <Route path="/toprated" element={<TopRatedContent />} />
                <Route path="/trends" element={<TrendsContent />} />
                <Route path="/favorites" element={<FavoritesContent />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/movie/:id" element={<MoviePage />} />
            </Routes>
        </div>
    )
}
