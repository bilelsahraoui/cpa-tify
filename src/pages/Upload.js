import React, { useEffect } from 'react';
import { useState } from 'react';

function Upload() {
  const { open, uploadMusic, clean } = window.openDialog;
  const [file, setFile] = useState("");

  const upload = () => {
    open();
    uploadMusic(setFile);
  }

  useEffect(() => {
    return () => {
      clean();
    }
  }, [clean]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className="Upload">
      <div>
        <div onClick={upload}>
          <h3>Open File</h3>
        </div>
      </div>
    </div>
  );
}

export default Upload;
