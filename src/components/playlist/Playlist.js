import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

const Playlist = ({music, fetchPlaylist, playlistName}) => {

    const { musics } = window.getPlaylists;
    const { erase } = window.Playlist;

    const [playlist, setPlaylist] = useState([]);

    const playPlaylist = () => {
        musics(setPlaylist, playlistName);
    }

    useEffect(() => {
        music.setMusic(playlist);
    }, [playlist])

    const deletePlaylist = (playlistName) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(result.isConfirmed) {
                erase(playlistName);
                Swal.fire(
                    'Deleted!',
                    'Your playlist has been deleted.',
                    'success'
                )
                fetchPlaylist();
            }
        })
    }

    return (
        <PlaylistWrapper>
            <PlaylistContainer>
                <PlayDiv>
                    <PlayButton onClick={() => playPlaylist()}>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill='white'>
                            <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/>
                        </svg>
                    </PlayButton>
                </PlayDiv>
                <TitleDiv>
                    <PlaylistTitle>
                        {playlistName}
                    </PlaylistTitle>
                </TitleDiv>
                <MusicsDiv>
                    <ShowMusicsButton to={`/playlist/${playlistName}`}>
                        See details
                    </ShowMusicsButton>
                    <DeletePlaylistButton onClick={() => deletePlaylist(playlistName)}>
                        Delete
                    </DeletePlaylistButton>
                </MusicsDiv>
            </PlaylistContainer>
        </PlaylistWrapper>
    );
}

const PlaylistWrapper = styled.div`
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

const PlaylistContainer = styled.div`
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

const MusicsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    font-size: 2rem;
`;

const DeletePlaylistButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    font-size: 1rem;
    :hover{
        text-decoration: underline;
        color: red;
        cursor: pointer;
    }
`;

const PlaylistTitle = styled.span`
    font-size: 16px;
`;

const PlayButton = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
`;

const ShowMusicsButton = styled(Link)`
    font-size: 1rem;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover{
        text-decoration: underline;
        color: green;
        cursor: pointer;
    }
`;

export default Playlist;