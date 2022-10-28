const request = require('request');

const fetchBreedDescription = (breedName, errorHandlerCallback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      return errorHandlerCallback(error, null);
    }
    // console.log('statusCode:', response && response.statusCode);
    const catDataBase = JSON.parse(body);
    const breed = catDataBase[0];
    if (breed) {
      errorHandlerCallback(null, breed.description);
    } else {
      errorHandlerCallback("Breed Not Found");
    }
  });
};

module.exports = { fetchBreedDescription };