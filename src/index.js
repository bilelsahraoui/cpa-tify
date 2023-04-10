import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Upload from './pages/Upload';
import About from './pages/About';
import Layout from './layout/default';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import PlaylistMusic from './pages/Playlist/PlaylistMusic';
import CreatePlaylist from './pages/Playlist/CreatePlaylist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <div>Not Found</div>,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/playlist",
        element: <Playlist />
      },
      {
        path: "/playlist/:playlistName",
        element: <PlaylistMusic />,
      },
      {
        path: "/playlist/create",
        element: <CreatePlaylist />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
