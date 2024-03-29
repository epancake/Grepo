const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");
// var cache = require("express-redis-cache")();

app.use(cors());
app.use(bodyParser.json());

apiUrl = 'https://api.github.com/search/repositories'


app.get("/:sortMethod/:searchterm", (request, response) => {  
  fetch(apiUrl + `?q=${request.params.searchterm}&per_page=50&sort=${request.params.sortMethod}`)
    .then(response => response.json())
    .then(data => response.send({ data }))
    .catch(err => console.log("error"));
});

// TODO: express-redis-cache causes heroku deployment to fail. 
// This works fine in localhost but loses the connection when deployed to Heroku, causing the whole app to crash. 
// There is a Heroku redis add on that may solve the issue, and will allow this function to replace the one above.
// app.get("/:sortMethod/:searchterm", cache.route(), (request, response) => {  
//   fetch(apiUrl + `?q=${request.params.searchterm}&per_page=50&sort=${request.params.sortMethod}`)
//     .then(response => response.json())
//     .then(data => response.send({ data }))
//     .catch(err => console.log("error"));
// });

app.listen((process.env.PORT || 4000), () => {
  console.log("Repo Depot listening on port 4000!");
});