const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");
var cache = require("express-redis-cache")();

app.use(cors());
app.use(bodyParser.json());

apiUrl = 'https://api.github.com/search/repositories'


app.get("/relevance/:searchterm", cache.route(), (request, response) => {  
  fetch(apiUrl + `?q=${request.params.searchterm}&per_page=100`)
    .then(response => response.json())
    .then(data => response.send({ data }))
    .catch(err => console.log("error"));
});

app.get("/stars/:searchterm", cache.route(), (request, response) => {   
  fetch(apiUrl + `?q=${request.params.searchterm}&per_page=100&sort=stars`)
    .then(response => response.json())
    .then(data => response.send({ data }))
    .catch(err => console.log("error"));
});




app.listen(4000, () => {
  console.log("Repo Depot listening on port 4000!");
});