const fs = require("fs");
const express = require("express");
const app = express();
const port = 8080;

const sendFile = (req, res, _) => {
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
};

app.use(sendFile);

app.listen(port, () => console.log(`Currently listening on port: ${port}`));
