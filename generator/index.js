const express = require("express");
const app = express();
const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);
const { accessData } = require(`${basePath}/src/data.js`);

app.use(express.json());

app.post("/test", (req, res) => {
  (() => {
    buildSetup();
    startCreating();
  })();
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Sever Started on Port 5000!"));
