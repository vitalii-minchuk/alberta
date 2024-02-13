
'use client';

import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';

interface Props {
    pageCount: number | undefined;
}

const Pagination = (props: Props) => {
    const router = useRouter()

    const test = (val) => {
router.push(`/pagination-test?page=${val + 1}`)
    }
    return (
        <Wrapper>
            <ReactPaginate
                breakLabel='...'
                onPageChange={({selected}) => test(selected)}
                pageRangeDisplayed={3}
                pageCount={props.pageCount ?? 1}
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
                previousLabel={'<'}
                nextLabel={'>'}
                containerClassName={'pagination'}
                pageLinkClassName={'page-number'}
                previousLinkClassName={'page-number'}
                nextLinkClassName={'page-number'}
                activeLinkClassName={'active'}
                breakClassName={'break-class'}
            />
        </Wrapper>
    );
};

export default Pagination;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        font-size: 1.6rem;
        list-style-type: none;
        margin-left: auto;
        margin-right: auto;
    }
    .page-number {
        padding: 0.5rem 1rem;
        background-color: gray;
        color: white;
        border-radius: 8px;
        border: 1px solid;
        border-color: blue;
        cursor: pointer;
        text-decoration: none;
    }

    .active {
        background-color: red;
        color: white;
    }
`;