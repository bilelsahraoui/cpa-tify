import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <StyledNavbar>
            <DivTitle>
                <StyledTitle>CPA-TIFY</StyledTitle>
            </DivTitle>
            <DivLink>
                <LinkTxt to="/">
                    <h3>Home</h3>
                </LinkTxt>
                <LinkTxt to="/upload">
                    <h3>Upload a music</h3>
                </LinkTxt>
                <LinkTxt to="/about">
                    <h3>About</h3>
                </LinkTxt>
            </DivLink>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.div`
    background-color: lightgray;
    color: #fff;
    height: 100vh;
    width: 15vw;
    position: relative;
    background: white;
    margin-right: 2rem;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
`;

const DivTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 100%;
    position: relative;
`;

const StyledTitle = styled.h1`
    font-size: 2rem;
    font-weight: 450;
    margin: 0;
    padding: 0;
    position: relative;
    text-align: center;
`;

const DivLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: auto;
    width: 100%;
    position: relative;
`;

const LinkTxt = styled(Link)`
    display: flex;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    font-style: normal;
    text-decoration: none;
    color: #000;
    text-align: center;
    :hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

export default Navbar;