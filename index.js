const express = require('express')
const app = express()
const request = require("request");
const bodyParser = require('body-parser');
let yelpAPI = require('yelp-api');
let apiKey = "ISf113DyzF1u1R1vkBRkq3InpLkuVexUWUG1JNoHR1UdtL-bMy4SdObvqD_2te27iSrG97iSxZdSlBI02Mmttnn_B2_GrCcXIzD2O4oB0GlJ31N1F9AvomYz3CwMYnYx"
let yelp = new yelpAPI(apiKey);
nextButton = 
goToNext = 

// app.use(express.static('public'));



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
//this page is where we empliment the button to get started
// app.get('/', (req, res) => {
//     res.send('welcome')
// })
//registering a callback to run only when someone request "/"

app.get('/api', (req, res) => {


    // Set any parameters, if applicable (see API documentation for allowed params)
    let params = [{ location: 'Charlotte, NC', categories: 'vegan' }]
    let results = {}
    let name = 

    // Call the endpoint
    yelp.query('businesses/search', params)
        .then(data => {
            // Success
            let response = JSON.parse(data)
            let matches = response.businesses
            //save the response 
            
            // console.log(data)

            for(let i = 0; i < matches.length; i++) {
                console.log(matches[i].name)
                name = matches[i].name
            }
        })
        .catch(err => {
            // Failure
            console.log(err)
            res.send("No results to show",404)
        });

    console.log('route hit')
    // res.json(results)
})




app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
  })

