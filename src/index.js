const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  await fs.appendFile(fileName,fileContent);
  const content=await fs.readFile(fileName,"utf-8");
  return content;
  
};

module.exports = updateFile;
