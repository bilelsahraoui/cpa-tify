import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Player from "../components/global/Player";
import styled from "styled-components";

const Layout = () => {
    const [music, setMusic] = useState("");

    return (
        <LayoutWrapper>
            <PageWrapper>
                <Navbar />
                <Outlet context={[music, setMusic]} />
                <Player music={() => music} />
            </PageWrapper>
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
    max-height: 100vh;
    overflow-y: hidden;
    position: absolute;
    background: linear-gradient(to right top, #65dfc9, #6cdbeb);
    display: flex;
`;
const PageWrapper = styled.div`
    display: flex;
    justify-content: left;
    height: 100vh;
    width: 100vw;
`;

export default Layout;