"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/coverage", function(req, res) {
  
  console.log(req.body);
  
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.client
      ? req.body.queryResult.parameters.client
      : "Seems like some problem. Speak again.";
  return res.json({
    fulfillmentMessages: [{text: { text: [speech]}}],
    fulfillmentText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
