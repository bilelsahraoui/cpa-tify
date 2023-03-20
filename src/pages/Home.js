import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Music from '../components/music/Music';
import styled from 'styled-components';

const Home = () => {
    const [music, setMusic] = useOutletContext();
    const { get } = window.getMusics;
    const [listMusic, setListMusic] = useState([]);
    useEffect(() => {
        get(setListMusic);
    }, []);
    
    return(
        <HomeWrapper>
            <Title>
                Latest musics uploaded :
            </Title>
            <MusicWrapper>
                {
                    listMusic.map((songTitle, index) => {
                        return <Music music={{music, setMusic}} songTitle={songTitle} key={index} />
                    })
                }
            </MusicWrapper>
        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

const MusicWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default Home;
