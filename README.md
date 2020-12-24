# weather_app
# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## server.js 

Editing the file as required, following these steps:
1-Require Express to run server and routes after the command > npm install express
2-Start up an instance of app
3-Downloading the dependencies - body-parser and cors > npm install i body-parser cors
4-requiring the corse and body-parser
5- setting the server port to > 4000
6- making an instance of the express > app
7- setup the server via a port and a callback function > app.listen(port, listining)
8- Constructing the get route with a callback function to retrieve data from object
9- Constructing a post route to store the data that entered in the browser or client-side 

## app.js 

this file clarify the client side 
1- sign up on the openWeatherMap website and getting a Personal API Key 
2-Adding eventListener to existing HTML button , when clicking it and passing a callback function 
3-performAction the function that  implement the calling of the functions getTemp - DynamicUI - postAllData 
via a chining of promises which will allow us to make multiple HTTP requests = get & post as identified in the udacity lectures 
4-getTemp > this function will fetch the temp via OpenWeatherMap based on the passing of the url = baseURL+ZIP+APIkey 
5- postAllData > excuting an async postData function that will takes 2 argument the url route and data 
6- DynamicUI >  Updating the UI by presenting the data entered
