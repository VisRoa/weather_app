/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const APIkey = '&appid=df165fa98b35bc6e42ff673a6f36679e&units=imperial';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', btnHandler);

/* Function called by event listener */
function btnHandler(e){
    e.preventDefault();
    const ZIP = document.getElementById('zip').value;

    // constructing the url 
    getTemp(baseURL+ZIP+APIkey)
            // using .then to chain actions - calling another async function to make the post request
        .then(function(data) {
            const content = document.getElementById('feelings').value;
           // console.log(data);

            //the route and data  
           return postAllData('/postData', { 
                 date:newDate,
                 temp:data.main.temp ,
                 content:content 
                })
        })
        // returning the result of the getTemp function via .then 
        .then(function (){
            return getTemp('/getAll')
        }) 
        .then(function(){
           return DynamicUI();

            })
        
}

/* Function to GET Web API Data*/
// Call this function to fetch the temp via OpenWeatherMap
const getTemp = async(url = '') => {

    const response = await fetch(url);
    try{
        const data = await response.json();
        //console.log(data);
        return data;
    }catch(error){
        console.log("error", error);
    }
};


/* Function to POST data */

// excuting an async postData function on the client side 
// this function takes 2 arguments the URL to make a post to &
//an object holding the data to post = data 
const postAllData = async (url = '',data= {}) => {
    //console.log(data);
    const response = await fetch(url, {
        method: 'POST', // GET, POST, PUT, DELETE,etc.
        credentials: 'same-origin',
        headers: {
             'Content-Type': 'application/json' // body data type must match "Content-Type" header
             },
        body:JSON.stringify(data)
    });
    try{
        const theData = await response.json();
        return theData;
    }catch(error){
        console.log("error" , error);
    }
};

/* Function to GET Project Data */ 

 //retrieve data on the browser using async function, set innerHTML according to data returned by the app route 
const DynamicUI = async () => {
    const request = await fetch('/getAll');
    try{
        const getData = await request.json();
        console.log(getData);

        // setting the data for each DOM element 

       document.getElementById('date').innerHTML = `The Date: ${getData.date}`;
       document.getElementById('temp').innerHTML = `The Tempruture: ${getData.temp} °F`;
       document.getElementById('content').innerHTML =`Feelings: ${getData.content}`;
    }catch(error){
        console.log("error", error);
    }
};
