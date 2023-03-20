import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import Music from '../components/music/Music';

const Search = () => {
    const [music, setMusic] = useOutletContext();
    const [search, setSearch] = useState("");
    const [musics, setMusics] = useState([]);
    const { findMusic } = window.searchMusics;

    useEffect(() => {
        findMusic(setMusics, search);
    }, [search]);

    return(
        <SearchWrapper>
            <SearchTitle>
                Search for a song :
            </SearchTitle>
            <SearchDiv>
                <StyledInput type="text" placeholder="Search for a song" onInput={(e) => setSearch(e.target.value)} />
            </SearchDiv>
            <SearchResult>
                {
                    musics.map((songTitle, index) => {
                        return <Music music={{music, setMusic}} songTitle={songTitle} key={index} />
                    })
                }
            </SearchResult>
        </SearchWrapper>
    )
}

const SearchWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
`;

const SearchTitle = styled.div`
    width: 100%;
    height: 10%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

const SearchDiv = styled.div`
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

const SearchResult = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`;

export default Search;
