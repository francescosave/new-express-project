const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Youtube Automation Comment with HHTP webhook PubSubHubbub push Notification"));

app.get("/ytwebhook", (req, res) => 
{
    const challenge = req.query['hub.challenge']
    console.log(req.query);
    res.send("GET to HTTP webhook PubSubHubbub endpoint" + JSON.stringify(req.query));
    res.send(challenge);
    if (challenge) return challenge;

});


app.post("/ytwebhook", (req, res) => res.send("message post"));


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;