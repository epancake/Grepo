# Description

This is a project that allows you to text search for repos using the github api. https://developer.github.com/v3/search/#search-repositories

# Deployed Link:

https://grepo-pancake.firebaseapp.com/

## Getting started

* cd into the api folder and run `nodemon` (you may have to install this). The server will be up and running on port 4000.
* cd up and over into the client folder, and run `npm start`. The client will be up and running on port 3000.

You will need to `npm install`, and you may need to start redis.

![Screenshot](/screenshot-grepo.png)

### Notes from the author, to the author:

##### To redeploy the api:
- add
- commit
- git push heroku master
- checkout https://afternoon-hollows-97494.herokuapp.com/

##### To redepoly the frontend:
- add
- commit
- npm run build && firebase deploy
- checkout https://grepo-pancake.firebaseapp.com/

