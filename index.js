const request = require('request');

const { fetchBreedDescription } = require('./breedFetcher');

let breedName = "";

if (process.argv.length > 3) {
  breedName = process.argv[2] + " " + process.argv[3];
} else {
  breedName = process.argv[2];
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});