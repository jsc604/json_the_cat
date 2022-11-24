const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(URL, (error, response, body) => {
    
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(null, data[0].description);
    } else {
      return callback('Breed not found');
    }
   
  });
};

module.exports = { fetchBreedDescription };