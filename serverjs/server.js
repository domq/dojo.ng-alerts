var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, "../app")));

app.get('/api/alerts', function(req, res) {
    res.json(
        [
            {
                name: "toto"
            },
            {
                name: "titi"
            },
            {
                name: "tata"
            },
        ]
    );
});

var port = process.env.PORT || 3000;
app.set('port', port);

var server = app.listen(app.get('port'), function() {
    process.stdout.write("App ready on port " + port);
});
