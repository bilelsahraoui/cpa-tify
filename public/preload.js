const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");

process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
  contextBridge.exposeInMainWorld("openDialog", {
    open: () => {
      ipcRenderer.send('open-file-dialog');
    },
    uploadMusic: () => {
      ipcRenderer.on('openDialog', (event, audioPath) => {
        if (audioPath){
          let normalPath = audioPath.replace(/\\/g, '/');
          let slashIndex = normalPath.lastIndexOf('/');
          let name = normalPath.substring(slashIndex + 1);
          console.log(name)
          fs.copyFile(normalPath, `src/musics/${name}`, (err) => {
            if (err) throw err;
            console.log(`${name} successfully uploaded!`);
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
      setState(files)
    });
    }
  })
});