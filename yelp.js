let yelpAPI = require('yelp-api')

// Create a new yelpAPI object with your API key
let apiKey = process.env.APIKEY
let yelp = new yelpAPI(apiKey)

// Set any parameters, if applicable (see API documentation for allowed params)
let params = [{ location: 'Charlotte, NC', categories: 'restaurants,vegan,vegetarian' }]

// Call the endpoint
yelp.query('businesses/search', params)
.then(data => {
  // Success
  let response = JSON.parse(data)
  let matches = response.businesses

  console.log(data)

  for(let i = 0; i < matches.length; i++) {
    console.log(matches[i].name)
  }
  
})
.catch(err => {
  // Failure
  console.log(err)
});