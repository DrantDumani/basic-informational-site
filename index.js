const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;
    const filename = url === "/" ? "./index.html" : `.${url}.html`;
    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (_, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen("8080");
