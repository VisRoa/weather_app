// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// dependencies 
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Identify the Server port that will be listening to

const port = 4040;

// setup the server  

app.listen(port,listening);

// the callback   

function listening(){

    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

// get route with a callback function to retrieve data from object
// get request all data from server to the client so it will be send to client
app.get('/getAll', sendData);

// callback function 
//it states that when the request came from app to retrieve data then send the projectdata object
function sendData(request, response){

    response.send(projectData);

    
}


// post route , that means the app = client/browser will send data to server 
// post route to store the data that entered on the browser in the projectdata object
app.post('/postData', addData);

// function callback 
function addData(request, response){
    projectData['date'] = request.body.date;
    projectData['temp'] = request.body.temp;
    projectData['content'] = request.body.content;

    response.send(projectData);
    console.log(projectData);
}

