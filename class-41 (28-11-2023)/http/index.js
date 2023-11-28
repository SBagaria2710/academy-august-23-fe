const http = require("http");

const port = 8080;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', "text/html");

  // Write response content
  res.write("<html><head><title>Node JS HTTP Server</title></head><body>");
  res.write("<h1>Hello, Scaler</h1>");
  res.write("</body></html>");

  // End the Response
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server is listening on https://${host}:${port}`);
});



