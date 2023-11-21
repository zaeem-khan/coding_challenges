const fs = require("fs");
const getCommandArgs = () => process.argv.slice(2);

const commandList = getCommandArgs();
const fileName = commandList[1];

function getBytes(fileName) {
    let stats = fs.statSync(fileName);
    let fileSizeInBytes = stats.size;
    return fileSizeInBytes;
}


switch (commandList[0]) {
    case "-c":
        console.log("\t" + getBytes(fileName) +" " + fileName);
        break;
    case -l:
        console.log("\t" + " " + fileName)
    default:
        break;
}