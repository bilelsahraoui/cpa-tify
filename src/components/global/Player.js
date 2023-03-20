import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Player = ({music}) => {
    const [file, setFile] = useState("");

    useEffect(() => {
        console.log(file);
        setFile(music)
    }, [file, music]);

    return (
        <PlayerWrapper>
            <PlayerCenter>
                <audio controls autoPlay src={file}>
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    bottom: 0;
    width: 100%;
`;

export default Player;