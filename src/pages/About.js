import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutContainer>
      CPA-TIFY c'est pas spotify, c'est mieux (askip)
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
`;

export default About;
