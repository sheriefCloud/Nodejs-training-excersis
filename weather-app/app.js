// require modules
//public

//internal
const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

// Code

const userInput = process.argv[2];

if (!userInput) {
  console.log("Please enter an address");
} else {
  geocode(userInput, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forcast(longitude, latitude, (error, forcastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forcastData);
    });
  });
}
