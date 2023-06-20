export type PaginationProps = {
    currentPage: number,
    totalPages: number,
    handlerSetPage: (pageNum: number) => void
}

export const Pagination = ({ currentPage, totalPages, handlerSetPage }: PaginationProps) => {

    return (
        <>
            {currentPage === 1 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 1)}>BACK page</button >}
            {currentPage === 1 ? null : <button className="pagination__button" onClick={() => handlerSetPage(1)}>{1}</button >}
            {currentPage < 0 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 3)}>{currentPage - 3}</button >}
            {currentPage < 0 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 2)}>{currentPage - 2}</button >}
            {currentPage < 0 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 1)}>{currentPage - 1}</button >}
            <button className="pagination__button pagination__activeButton" onClick={() => handlerSetPage(currentPage)}>{currentPage}</button >
            {currentPage > totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 1)}>{currentPage + 1}</button >}
            {currentPage > totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 2)}>{currentPage + 2}</button >}
            {currentPage > totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 3)}>{currentPage + 3}</button >}
            {currentPage === totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(totalPages)}>{totalPages}</button >}
            {currentPage === totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 1)}>NEXT page</button>}
        </>
    )
}
