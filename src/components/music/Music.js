import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AddToPlaylist from "../playlist/AddToPlaylist";

const Music = ({music, songTitle}) => {
    const { play, clean } = window.playMusic;
    const [file, setFile] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const playMusic = (path) => {
        music.setMusic([file])
        play(setFile, path);
    }

    useEffect(() => {
        music.setMusic([file])
    }, [file])

    useEffect(() => {
        return () => {
            clean();
        }
    }, [clean]);

    useEffect(() => {
        if(music.music.length > 0){
            if(music.music[0].replace("safe-file://./src/musics/", "") == songTitle){
                setIsPlaying(true);
            }else{
                setIsPlaying(false);
            }
        }
    }, [music]);

    return (
        <MusicWrapper isPlaying={isPlaying}>
            <MusicContainer>
                <PlayDiv>
                    <PlayButton onClick={() => playMusic(`./src/musics/${songTitle}`)}>
                        {
                            isPlaying ? 
                            <> 
                                <svg fill={isPlaying ? 'green' : 'white'} width="32px" height="32px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M852.608 323.296L539.694 10.384c-9.92-9.92-24.672-11.84-36.607-6.016-12.544 4.336-21.6 16.113-21.6 30.128v708.4c-33.92-25.12-78.432-40.528-127.376-40.528-106.064 0-192.112 71.776-192.112 160.288 0 88.544 86.048 160.336 192.112 160.336 106.112 0 192.08-71.776 192.08-160.336 0-3.92-.368-7.76-.704-11.632V106.688l261.872 261.856c12.48 12.496 32.753 12.496 45.249 0s12.496-32.768 0-45.249zm-499.234 635.28c-75.648 0-128.352-50.544-128.352-95.872s52.72-95.824 128.352-95.824c74.032 0 126 48.4 128.128 92.992v5.68c-2.144 44.576-54.096 93.024-128.128 93.024z"/>
                                </svg>
                            </>
                            :
                            <>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill={isPlaying ? 'green' : 'white'}>
                                    <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/>
                                </svg>
                            </>
                        }
                    </PlayButton>
                </PlayDiv>
                <TitleDiv>
                    <MusicTitle>
                        {songTitle.replace('.mp3', '')}
                    </MusicTitle>
                </TitleDiv>
                <AddPlaylistDiv>
                    <AddPlaylistAction>
                        {
                            isOpen ?
                            <>
                                <ControllerPlaylist onClick={() => setIsOpen(!isOpen)}>
                                    -
                                </ControllerPlaylist>
                                <AddToPlaylist songTitle={songTitle} playlistName={"ok"} setIsOpen={setIsOpen} />
                            </>
                            :
                            <>
                                <ControllerPlaylist onClick={() => setIsOpen(true)}>
                                    +
                                </ControllerPlaylist>
                            </>
                        }
                    </AddPlaylistAction>
                </AddPlaylistDiv>
            </MusicContainer>
        </MusicWrapper>
    );
}

const MusicWrapper = styled.div`
    color: ${props => props.isPlaying ? "green" : "white"};
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    :hover{
        background: rgba(0, 0, 0, 0.1)
    }
`;

const MusicContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
`;

const PlayDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
`;

const AddPlaylistDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    font-size: 2rem;
`;

const MusicTitle = styled.span`
    font-size: 16px;
`;

const PlayButton = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
`;

const AddPlaylistAction = styled.div`
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;
`;

const ControllerPlaylist = styled.span`
    cursor: pointer;
`;

export default Music;