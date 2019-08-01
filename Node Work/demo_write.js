var fs = require('fs');

fs.writeFile('wishlish1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});