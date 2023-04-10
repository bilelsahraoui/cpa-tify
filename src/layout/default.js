import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Player from "../components/global/Player";
import styled from "styled-components";

const Layout = () => {
    const [music, setMusic] = useState([]);

    return (
        <>
            <Player music={[music, setMusic]} />
            <LayoutWrapper>
                <Navbar />
                <PageWrapper>
                    <Outlet context={[music, setMusic]} />
                </PageWrapper>
            </LayoutWrapper>
        </>
    )
}

const LayoutWrapper = styled.div`
    max-height: 100vh;
    overflow-y: hidden;
    display: flex;
    height: 100vh;
    width: 100vw;
`;
const PageWrapper = styled.div`
    display: flex;
    justify-content: left;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.90);
`;

export default Layout;