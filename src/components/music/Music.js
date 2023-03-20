import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Music = ({music, songTitle}) => {
    const { play, clean } = window.playMusic;
    const [file, setFile] = useState("");

    const playMusic = (path) => {
        play(setFile, path);
        music.setMusic(file)
    }

    useEffect(() => {
        return () => {
            clean();
        }
    }, [clean]);

    return (
        <div className="Music">
            <h2 onClick={() => playMusic(`C:/Users/bsahr/Documents/GitHub/lecteur/src/musics/${songTitle}`)}>
                play {songTitle.replace(".mp3", "")}
            </h2>
        </div>
    );
}



export default Music;