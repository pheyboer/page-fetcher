const needle = require('needle');
const fs = require('fs');

const host = process.argv[2];
const filePath = process.argv[3];

needle.get(host, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the homepage.
  console.log(process.argv[2]);

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(`Error:`, err);
    } else {
      console.log(`File saved at ${filePath}`);
    }
  });
});