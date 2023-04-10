import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Player = ({music}) => {

    const [playlist, setPlaylist] = useState([]);

    const [currentMusic, setCurrentMusic] = useState(0);
    const [file, setFile] = useState("");

    useEffect(() => {
        setFile(playlist[currentMusic])
    }, [playlist, music, currentMusic])

    useEffect(() => {
        setCurrentMusic(0)
        setPlaylist(music[0])
    }, [music])

    useEffect(() => {
        setCurrentMusic(0)
    }, [playlist])

    useEffect(() => {
        setFile(music[0][currentMusic])
    }, [music])

    useEffect(() => {
        const audio = document.getElementById("audio");
        audio.addEventListener("ended", () => {
            setCurrentMusic(currentMusic + 1);
            setFile(music.music[currentMusic + 1]);
        });
    }, [currentMusic]);

    return (
        <PlayerWrapper>
            <PlayerCenter>
                <audio id="audio" controls autoPlay src={file}>
                    <source src={file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </PlayerCenter>
        </PlayerWrapper>
    );
}

const PlayerCenter = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const PlayerWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 50%;
    right: 50%;
    width: 100%;
`;

export default Player;