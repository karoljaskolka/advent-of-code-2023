const fs = require('fs');

export const readLines = (fileName: string): string[] => {
    const fileData: string = fs.readFileSync(fileName, 'utf-8');
    const fileLines: string[] = [];

    fileData.split(/\r?\n/).forEach(line =>  {
        fileLines.push(line);
    });

    return fileLines;
}
