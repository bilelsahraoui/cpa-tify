import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Music from '../../components/playlist/Music';

const PlaylistMusic = () => {
  
    let { playlistName } = useParams();

    const { musics } = window.getPlaylists;

    const [playlist, setPlaylist] = useState([]);

    const getPlaylist = () => {
        musics(setPlaylist, playlistName);
    }

    useEffect(() => {
        getPlaylist();
    }, [])

  return (
    <PlaylistWrapper>
        <Title>
            Playlist's musics :
        </Title>
        <MusicWrapper>
            {
                playlist.length > 0 ?
                    playlist.map((song, index) => {
                        let songTitle = song.split('\\').pop().split('/').pop();
                        return <Music playlist={playlistName} fetchMusic={getPlaylist()} songTitle={songTitle} key={index} />
                    })
                : 
                    <Title>
                        No musics in this playlist
                    </Title>
            }
        </MusicWrapper>
    </PlaylistWrapper>
  )
}

const PlaylistWrapper = styled.div`
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


export default PlaylistMusic;
