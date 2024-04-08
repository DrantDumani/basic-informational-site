const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

const sendFile = (prefixStr) => {
  return (req, res, next) => {
    const file = path.join(__dirname, `${prefixStr}.html`);
    res.sendFile(file, (err) => {
      if (err) res.status(500).send("<h1>An error has occured</h1>");
    });
  };
};

app.get("/", sendFile("index"));
app.get("/about", sendFile("about"));
app.get("/contact-me", sendFile("contact-me"));
app.use(sendFile("404"));

app.listen(port, () => console.log(`Currently listening on port: ${port}`));
