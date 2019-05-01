# OCS Video Comparison GUI

An user interface for the OCS Video Comparison project [here](https://github.com/Cadrew/OCS-Video-Comparison).

![OCS Video Comparison GUI](http://puu.sh/Dmljv/b74d11876d.png)

# How to build it yourself

This utility is compatible with Windows, Linux and MacOS.
You'll need [NodeJS](https://nodejs.org/en/download/) and [Electron](https://electronjs.org/docs/tutorial/installation) to build it.

## Try without building

Once it's done, clone the repository and execute the following command to install all needed node modules:
```CLI
npm install
```
or
```CLI
npm i
```
Then, you can try to launch the program with:
```CLI
electron .
```

## Before building

You'll need to install *electron-packager*:
```CLI
npm i electron-packager -g
```

And get the content of [this repository](https://github.com/Cadrew/OCS-Video-Comparison) and put it in the root folder of this project.

## Build on Windows

```CLI
electron-packager . OCS-Video-Comparison --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/logo.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="OCS Video Comparison"
```

## Build on Linux

```CLI
electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/logo.png --prune=true --out=release-builds
```

## Build on MacOS

```CLI
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/logo.icns --prune=true --out=release-builds
```

# TODO

- Add drag & drop on video files
