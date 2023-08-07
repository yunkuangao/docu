const fs = require('fs');
const path = require('path');

function getSubdirectories(directory) {
    const subdirectories = fs.readdirSync(directory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    return subdirectories;
}

function copyFile(sourcePath, destinationPath) {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
}

const sourceFilePath = '../../koishi-hmr/external';
const destinationFilePath = '../docs/KoishiPlugins';

for (var i of getSubdirectories(sourceFilePath)) {
    var rdm = sourceFilePath + '/' + i + '/README.md'
    if (fs.existsSync(rdm)) {
        copyFile(rdm, destinationFilePath + i + '.md')
    }
}


