import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'


type PaginationProps = {currentPage: number;
   onChangePage: (page: number) => void;}
function Pagination({currentPage, onChangePage}: PaginationProps): React.ReactElement{
    return(
        <div className={styles.container}>
        <ReactPaginate
        className={styles.root}
          breakLabel="..."
          nextLabel=" >"
          onPageChange={(event) => onChangePage(event.selected + 1)}
          pageRangeDisplayed={7}
          pageCount={3}
          forcePage={currentPage - 1}
          previousLabel="< "
       
        />
        </div>
    )
}

export default Pagination;