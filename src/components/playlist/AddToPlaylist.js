import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const AddToPlaylist = ({songTitle, playlistName, setIsOpen}) => {

    const { addMusic } = window.Playlist;
    const { get } = window.getPlaylists;
    const [listPlaylist, setListPlaylist] = useState([]);
    const fetchPlaylist = () => {
        get(setListPlaylist);
    }
    const addPlaylist = (playlistName, songTitle) => {
        addMusic(playlistName, songTitle);
        Swal.fire({
            title: 'Success!',
            text: 'Song added to playlist',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

    useEffect(() => {
        fetchPlaylist();
    }, []);
    
    return (
        <PlaylistWrapper>
            <ControllerPlaylist>
                <CloseDialog onClick={() => setIsOpen(false)}>
                    -
                </CloseDialog>
            </ControllerPlaylist>
            <PlaylistChoice>
                {
                    listPlaylist.map((playlistName, index) => {
                        return (
                            <PlaylistContainer key={index}>
                                <PlaylistTitle>
                                    {playlistName}
                                </PlaylistTitle>
                                <AddButton onClick={() => addPlaylist(playlistName, songTitle)}>
                                    +
                                </AddButton>
                            </PlaylistContainer>
                        )
                    })
                }
            </PlaylistChoice>
        </PlaylistWrapper>
    );
}

const PlaylistWrapper = styled.div`
    width: 20vw;
    height: 25vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ControllerPlaylist = styled.div`
    width: 100%;
    margin-right: 20px;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: default;
`;

const CloseDialog = styled.span`
    color: white;
    font-size: 3rem;
    cursor: pointer;
    :hover{
        color: red;
    }
`;

const PlaylistChoice = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    overflow-y: auto;
    flex-direction: column;
`;

const PlaylistContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;
`;

const PlaylistTitle = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

const AddButton = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        color: green;
    }
`;

export default AddToPlaylist;