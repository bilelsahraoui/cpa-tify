import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Playlist from '../../components/playlist/Playlist';
import { Link, useOutletContext } from 'react-router-dom';

const Index = () => {
  const [music, setMusic] = useOutletContext();
  const [listPlaylist, setListPlaylist] = useState([]);
  const { get } = window.getPlaylists;

    const fetchPlaylist = () => {
        get(setListPlaylist);
    }

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <PlaylistWrapper>
        <PlaylistContainer>
            <LinkTitle to="/playlist/create">
                Create Playlist
            </LinkTitle>
                or
            <Title>
                Current Playlists
            </Title>
        </PlaylistContainer>
        <MusicWrapper>
            {
                listPlaylist.map((playlistName, index) => {
                    return <Playlist music={{music, setMusic}} fetchPlaylist={fetchPlaylist()} playlistName={playlistName} key={index} />
                })
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

const PlaylistContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const Title = styled.div`
    width: 100%;
    height: 10%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LinkTitle = styled(Link)`
    width: 100%;
    height: 10%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    :hover{
        text-decoration: underline;
    }
`;

const MusicWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;


export default Index;
