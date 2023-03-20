const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");

process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
  contextBridge.exposeInMainWorld("openDialog", {
    open: () => {
      ipcRenderer.send('open-file-dialog');
    },
    uploadMusic: (setFile, setUploaded) => {
      ipcRenderer.on('openDialog', (event, audioPath) => {
        if (audioPath){
          let normalPath = audioPath.replace(/\\/g, '/');
          let slashIndex = normalPath.lastIndexOf('/');
          let name = normalPath.substring(slashIndex + 1);
          fs.copyFile(normalPath, `src/musics/${name}`, (err) => {
            if (err) throw err;
            console.log(`${name} successfully uploaded!`);
            setUploaded(true);
          });
        }
      })
    },
    clean: () => {
      ipcRenderer.removeAllListeners('openDialog');
    }
  });
  contextBridge.exposeInMainWorld("playMusic", {
    play: (setState, path) => {
      setState(`safe-file://${path}`);
    },
    clean: () => {
      ipcRenderer.removeAllListeners('playMusic');
    }
  });
  contextBridge.exposeInMainWorld("getMusics", {
    get: (setState) => {
      fs.readdir("src/musics", (err, files) => {
      setState(files.reverse().slice(0, 10))
    });
    }
  });
  contextBridge.exposeInMainWorld("searchMusics", {
    findMusic: (setState, search) => {
      fs.readdir("src/musics", (err, files) => {
        let searchLower = search.toLowerCase();
        setState(files.filter((file) => file.toLowerCase().includes(searchLower)));
      });
    }
  });
});