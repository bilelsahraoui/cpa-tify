import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const CreatePlaylist = () => {
    const { create } = window.Playlist;

    const [playlistName, setPlaylistName] = useState("");

    const handlePlaylistName = (e) => {
        setPlaylistName(e.target.value);
    }

    const createAPlaylist = (playlistName) => {
        create(playlistName);
        Swal.fire({
            title: 'Playlist created!',
            text: "To see changes, please refresh the page.",
            icon: 'success',
            confirmButtonColor: '#3085d6',
        })
    }

    return (
        <PlaylistWrapper>
            <Title>
                Create Playlist
            </Title>
            <PlaylistContainer>
                <PlaylistNameInput type="text" placeholder="Playlist name" onChange={handlePlaylistName}></PlaylistNameInput>
                <CreateButton onClick={() => createAPlaylist(playlistName)}>Create</CreateButton>
            </PlaylistContainer>
        </PlaylistWrapper>
    );
}

const PlaylistWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover{
        background: rgba(0, 0, 0, 0.1)
    }
`;

const Title = styled.div`
    width: 100%;
    height: 5%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 40%;
    justify-content: center;
    align-items: center;
`;

const PlaylistNameInput = styled.input`
    width: 40%;
    height: 10%;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 1.2rem;
    outline: none;
    padding: 0.5rem;
    margin-bottom: 1rem;
`;

const CreateButton = styled.button`
    width: 40%;
    height: 15%;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 1.2rem;
    outline: none;
    :hover{
        cursor: pointer;
        background: rgba(0, 0, 0, 0.2);
    }
`;

export default CreatePlaylist;