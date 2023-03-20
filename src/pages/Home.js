import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Music from '../components/music/Music';

const Home = () => {
    const [music, setMusic] = useOutletContext();
    const { get } = window.getMusics;
    const [listMusic, setListMusic] = useState([]);
    useEffect(() => {
        get(setListMusic);
    }, []);

    return(
        <div className="Home">
            {listMusic.map((songTitle, index) => {
                return <Music music={{music, setMusic}} songTitle={songTitle} key={index} />
                })
            }
        </div>
    )
}

export default Home;
