const request = require("request");

const fetchBreedDescription = (breadName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds`, (error, response, body) => {
    const data = JSON.parse(body);
    const breed = data.filter((breed) => breed.name === breadName);
    const id = breed[0].id;
    request(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
      (error, response, body) => {
        if (error) {
          callback(error, null);
        } else {
          const data = JSON.parse(body);
          if (data.length) {
            callback(null, data[0].breeds[0].description);
          } else {
            callback(null, data);
          }
        }
      }
    );
  });
};
module.exports = { fetchBreedDescription };
