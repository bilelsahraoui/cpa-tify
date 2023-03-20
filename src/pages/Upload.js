import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function Upload() {
  const { open, uploadMusic, clean } = window.openDialog;
  const [file, setFile] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const upload = () => {
    open();
    uploadMusic(setFile, setIsUploaded);
  }

  useEffect(() => {
    return () => {
      clean();
    }
  }, [clean]);

  useEffect(() => {
    if(isUploaded){
      alert("Song uploaded successfully");
    }
  }, [isUploaded]);

  return (
    <UploadDiv>
      <Content>
        <Title>
          <span>Upload a song</span>
        </Title>
        <UploadButton>
          <svg onClick={upload} style={{cursor: 'pointer'}} width="32" height="32" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"/>
          </svg>
        </UploadButton>
      </Content>
    </UploadDiv>
  );
}

const UploadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

const UploadButton = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Upload;
