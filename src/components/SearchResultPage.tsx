import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchResultContent } from "./SearchResultContent";

export const SearchResultPage = () => {

    const [searchValue, setSearchValue] = useState("")

    return (
        <>

            {/* <SearchResultContent inputValue={inputValue} />

            <div className="content-movies">
                <div style={spanWhiteStyle}> Please, input name of movie
                    <Link to={"/home"} >Home</Link>
                </div>
            </div> */}

        </>
    )
}

const spanWhiteStyle = {
    color: "#FFF",
};
