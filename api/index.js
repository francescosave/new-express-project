const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Youtube Automation Comment with HHTP webhook PubSubHubbub push Notification"));

app.get("/ytwebhook", (req, res) => res.send("GET to webhook PubSubHubbub endpoint"));
app.post("/ytwebhook", (req, res) => res.send("message post"));


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;