const request = require("request");

request(
  `https://api.thecatapi.com/v1/images/search?breed_ids=${process.argv[2]}`,
  (error, response, body) => {
    if (error) {
      console.log(error);
    }
    if (response) {
      console.log(`response.statusCode: ${response.statusCode}`);
    }
    if (body) {
      const data = JSON.parse(body);
      if (data.length) {
        console.log(`body:${data}`);
      }

      console.log(typeof data);
    }
  }
);
