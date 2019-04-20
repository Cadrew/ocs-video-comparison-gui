const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: 'images/logo.png',
		movable: true,
		backgroundColor: '#1D1D28', //In order to disable the white background color when we resize the window (instead of 'transparent: true')
		frame: false //Borderless
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', () => {
	createWindow();
	mainWindow.setSize(580, 740);
	mainWindow.loadURL(`file:${__dirname}/index.html`); //Absolute path
	mainWindow.center();
});

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit();
	}
});
