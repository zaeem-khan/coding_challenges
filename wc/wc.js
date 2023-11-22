const fs = require("fs");
const getCommandArgs = () => process.argv.slice(2);

const commandList = getCommandArgs();
const fileName = commandList[1];

function getBytes(fileName) {
    let stats = fs.statSync(fileName);
    let fileSizeInBytes = stats.size;
    return fileSizeInBytes;
}

function getNumberOfLines(fileName) {
    let fileBuffer = fs.readFileSync(fileName);
    let toString = fileBuffer.toString();
    let splitLines = toString.split("\n");
    return splitLines.length-1;
}

function getNumberOfWords(fileName) {
    let wordCount = 0;
    let fileBuffer = fs.readFileSync(fileName);
    let toString = fileBuffer.toString();
    let splitWords = toString.replace(/[.,?!;()"'-]/g, " ")
                            .replace(/\s+/g, " ")
                            .replace(/\n/g, " ")
                            .toLowerCase()
                            .split(" ");
    for (let word of splitWords) {
        wordCount++;
    }

    return wordCount;
}

switch (commandList[0]) {
    case "-c":
        console.log("\t" + getBytes(fileName) + " " + fileName);
        break;
    case "-l":
        console.log("\t" + getNumberOfLines(fileName) + " " + fileName);
        break;
    case "-w":
        console.log("\t" + getNumberOfWords(fileName) + " " + fileName);       
        break;
    default:
        break;
}