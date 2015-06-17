var express = require('express'),
    request = require('request'),
    cheerio = require('cheerio'),
    app     = express();

app.get('/', function( req, res) {
  
});

// request(url, function(err, res, body) {
//   $ = cheerio.load(body);
//   links = $('a');
//   var youtubeSoundcloudLinks = links.filter(function(link) {
//     if ($(link).attr('href')) {
//       return link;
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000');
});