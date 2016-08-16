const {app} = require('electron')
const {BrowserWindow} = require('electron')

app.on('window-all-closed', function() {
	
if(process.platform !== 'darwin') 
	app.quit();
});
app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
})﻿;