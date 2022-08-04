import React, { FC } from 'react';

export interface Props {
    page: number;
    totalPages: number;
    handlePagination: (page: number) => void;
  }

const Pagination : React.FC<Props> = 
({  page,
    totalPages,
    handlePagination,}) =>
{
    const pageNumbers : number[] = [];
    for(let i : number = 1; i <= totalPages; i++)
    {
        pageNumbers.push(i)
    }
    return(
        <div className="pagination">
            {pageNumbers.map(number => 
                (
                    <div key={number} className="page-item">
                        <div onClick={() => handlePagination(number)} /*href="!#/songs"*/ className="page-link">
                            {number}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Pagination;