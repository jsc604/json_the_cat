const request = require('request');
let breed = process.argv[2];
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(URL, (error, response, body) => {
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch (e) {
    console.log(error);
  }
});