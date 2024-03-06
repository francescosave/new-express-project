const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Youtube Automation Comment with HHTP webhook PubSubHubbub push Notification"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;