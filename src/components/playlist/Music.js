import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Music = ({playlist, fetchMusic, songTitle}) => {

    const { deleteMusic } = window.Playlist;

    const deleteSong = (songTitle) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteMusic(playlist, songTitle);
                Swal.fire(
                    'Deleted!',
                    'Your music has been deleted from this playlist.',
                    'success'
                )
                fetchMusic();
            }
        })
    }

    return (
        <MusicWrapper>
            <MusicContainer>
                <TitleDiv>
                    <MusicTitle>
                        {songTitle.replace('.mp3', '')}
                    </MusicTitle>
                </TitleDiv>
                <DeleteSongPlaylistDiv>
                    <DeleteSongPlaylistButton onClick={() => deleteSong(songTitle)}>
                        <DeleteTitle>Delete</DeleteTitle>
                    </DeleteSongPlaylistButton>
                </DeleteSongPlaylistDiv>
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

const DeleteTitle = styled.span`
    font-size: 16px;
    :hover{
        color: red;
    }
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
`;

const DeleteSongPlaylistDiv = styled.div`
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

const DeleteSongPlaylistButton = styled.span`
    font-size: 2rem;
    cursor: pointer;
`;

export default Music;