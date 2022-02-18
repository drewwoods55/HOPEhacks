let yelpAPI = require('yelp-api')

// Create a new yelpAPI object with your API key
let apiKey = process.env.APIKEY
let yelp = new yelpAPI(apiKey)

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ location: 'Charlotte, NC', categories: 'vegan, vegetarian, mexican' }]

// Call the endpoint
yelp.query('businesses/search', params)
.then(data => {
  // Success
  let response = JSON.parse(data)
  let matches = response.businesses

  // console.log(data)

  for(let i = 0; i < matches.length; i++) {
    console.log(matches[i].name)
  }
  
})
.catch(err => {
  // Failure
  console.log(err)
});


// 'use strict';

// const yelp = require('yelp-fusion');

// // Place holder for Yelp Fusion's API Key. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const apiKey = 'Sf113DyzF1u1R1vkBRkq3InpLkuVexUWUG1JNoHR1UdtL-bMy4SdObvqD_2te27iSrG97iSxZdSlBI02Mmttnn_B2_GrCcXIzD2O4oB0GlJ31N1F9AvomYz3CwMYnYx';

// const searchRequest = {
//   term:'EastSide Local',
//   location: 'Charlotte, NC'
// };

// const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });

// const port = 5000
// app.listen(port, ()=>{
//     console.log(`This server is running on ${port}`)
// })