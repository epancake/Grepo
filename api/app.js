const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors());
app.use(bodyParser.json());

apiUrl = 'https://api.github.com/search/repositories'

app.get("/:searchterm", (request, response) => {
     
  fetch(apiUrl + `?q=${request.params.searchterm}`)
    .then(response => response.json())
    .then(data => {
      response.send({ data });
    })
    .catch(err => {
      response.redirect('/error');
    });
});

app.listen(4000, () => {
  console.log("Repo Depot listening on port 4000!");
});