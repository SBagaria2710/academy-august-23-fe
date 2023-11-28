const fs = require("fs");
const path = require("path");

const sourceFilePath = path.resolve("src/sourceFile.txt");
const destFolderPath = path.resolve("dest/destinationFile.txt");

// Create a readable stream from the source file
const readStream = fs.createReadStream(sourceFilePath);

// Create a writable stream to the destination file
const writeStream = fs.createWriteStream(destFolderPath);

// Pipe the data from the source file to the destination file
readStream.pipe(writeStream);

// Error handling
readStream.on("error", (err) => {
  console.error("Error reading from the file.", err);
});

writeStream.on("error", (err) => {
  console.error("Error writing to the file.", err);
});

// When the copy is complete, log a message
writeStream.on("finish", () => {
  console.log("File Copied Successfully!");
});