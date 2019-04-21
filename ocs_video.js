const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: 'assets/icons/logo.png',
		movable: true,
		backgroundColor: '#1D1D28', //In order to disable the white background color when we resize the window (instead of 'transparent: true')
		frame: false, //Borderless
		resizable: false
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}

app.on('ready', () => {
	createWindow();
	mainWindow.setSize(525, 300);
	mainWindow.loadURL(`file:${__dirname}/index.html`); //Absolute path
	mainWindow.center();
});

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit();
	}
});
