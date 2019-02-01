let fs = require('fs');

var path = './firstName.txt';
var newFile = './fullName.txt';

var options = {
  encoding: 'utf8',
  flag: 'w+'
}

// läser in förnamnet
fs.readFile(path, (err, data) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log("Förnamn läst.")
    // skapar nya filen och lägger till förnamnet
    fs.writeFile(newFile, data, options, (err) => {
      if(err) {
        console.error(err);
      }
      else {
        console.log("Filen skapad.")
        path = './lastName.txt';
        // läser in efternamnet
        fs.readFile(path, (err, data) => {
          if (err) {
            console.error(err)
          }
          else {
            console.log("Efternamn läst.")
            options.flag = 'a';
            // lägger till efternamnet i ny filen
            fs.writeFile(newFile, data, options, (err) => {
              if(err) {
                console.error(err);
              }
              else {
                console.log("Filen uppdaterad.")
              }
            })
          }
        });
      }
    });
  }
})
