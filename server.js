var express    = require('express'),
    bodyParser = require('body-parser'),
    request    = require('request'),
    cheerio    = require('cheerio'),
    app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use("/", express.static(__dirname + "/public/"));

app.post('/submit', function(req, res) {
  var url = req.body.url;

  request(url, function(err, resp, body) {
    $ = cheerio.load(body);
    var links = [];

    $('a').map(function(i, link) {
      links.push($(link).attr('href'));
    });

    var youtubeSoundcloudLinks = links.filter(function(link) {
      if (link != undefined) {
        if (link.indexOf("youtube.com") > -1 || link.indexOf("soundcloud.com") > -1) {
          return link;
        }
      } 
    });
    res.send(youtubeSoundcloudLinks);
  });
});


app.listen( process.env.PORT || 3000, function() {
  console.log('listening on port 3000');
});