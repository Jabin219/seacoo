var fs = require("fs");

const readFile = (filePath) => {
    try {
        var data = fs.readFileSync(filePath);
        return data
    } catch (error) {
        return ''
    }
};
module.exports = {
    readFile
}