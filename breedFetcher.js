const request = require('request');

let name = "";

if (process.argv.length > 3) {
  name = process.argv[2] + " " + process.argv[3];
} else {
  name = process.argv[2];
}

const fetch = (breedName) => {
  request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
    if (error !== null) {
      console.log('error:', error);
      return;
    }
    // console.log('statusCode:', response && response.statusCode);
    const catDataBase = JSON.parse(body);
    searchByBreed(catDataBase, breedName);
  });
};

const searchByBreed = (catData, nameOfCat) => {
  for (const i in catData) {
    let catName = nameOfCat.toLowerCase();
    let dataBaseCatName = catData[i]['name'].toLowerCase();
    if (catName === dataBaseCatName) {
      console.log(catData[i]['description']);
      return;
    }
  }
  console.log("The requested breed is not found");
};


fetch(name);