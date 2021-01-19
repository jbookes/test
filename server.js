// Muaz Khan      - www.MuazKhan.com
// MIT License    - www.WebRTC-Experiment.com/licence
// Documentation  - github.com/muaz-khan/getScreenId
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");
const express = require("express");
const app = express();
const server = http.createServer(app);

var port = process.env.PORT || 19082;

const publicDirectory = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(publicDirectory));
app.use(express.static(viewsPath));

/* user - Define Routes */
app.use("/", require("./routes/realtime"));

server.listen(port, () => console.log(`http://localhost:${port}`));
