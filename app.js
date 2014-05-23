var connect = require('connect');
var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app = connect();
app
    .use(connect.static('./client/'));

https.createServer(options, app).listen(8080);
