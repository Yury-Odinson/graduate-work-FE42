
export const Pagination = (currentPage: number) => {

    if (currentPage > 0 && currentPage < 500)
        return (
            <>
                {/* <button onClick={() => console.log("back page")}>back page</button> */}
                {/* <button onClick={() => console.log("next page")}>next page</button> */}


                <button onClick={() => console.log(currentPage)}>PROPS BACK page</button>
            </>
        )
}
