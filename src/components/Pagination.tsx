import { PaginationProps } from "../tools/types"

export const Pagination = ({ currentPage, totalPages, handlerSetPage }: PaginationProps) => {

    return (
        <>
            {currentPage === 1 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 1)}>BACK page</button >}
            {currentPage === 1 ? null : <button className="pagination__button" onClick={() => handlerSetPage(1)}>{1}</button >}
            {currentPage - 3 < 3 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 3)}>{currentPage - 3}</button >}
            {currentPage - 2 < 2 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 2)}>{currentPage - 2}</button >}
            {currentPage - 1 < 2 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage - 1)}>{currentPage - 1}</button >}
            {totalPages === 1 ? null : <button className="pagination__button pagination__activeButton" onClick={() => handlerSetPage(currentPage)}>{currentPage}</button >}
            {currentPage + 1 > totalPages - 1 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 1)}>{currentPage + 1}</button >}
            {currentPage + 2 > totalPages - 2 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 2)}>{currentPage + 2}</button >}
            {currentPage + 3 > totalPages - 3 ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 3)}>{currentPage + 3}</button >}
            {currentPage === totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(totalPages)}>{totalPages}</button >}
            {currentPage === totalPages ? null : <button className="pagination__button" onClick={() => handlerSetPage(currentPage + 1)}>NEXT page</button>}
        </>
    )
}
