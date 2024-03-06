const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Youtube Automation Comment with HHTP webhook PubSubHubbub push Notification"));

app.get("/ytwebhook", (req, res) => 
{
    const challenge = req.query['hub.challenge']
    
    if(challenge){
        res.send(challenge);
    }else{
        res.send("Subscribe OK.GET to HTTP webhook PubSubHubbub endpoint");
    };
    
    

});


app.post("/ytwebhook", (req, res) => res.send("message post"));


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;