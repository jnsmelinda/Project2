// Set up Dependencies
const express = require('express');
const getAQIByLocation = require('./aqi.js');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Set Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('', function (req, res) {
    res.send('Welcome to the Air Quality app, where you can let your local representative know how you feel about it and leave a short note for them.')
})

app.get("/api/aqi/:location", (req, res, next) => getAQIByLocation(
    req.params.location,
    (err, aqi) => {
        if (err) next(error);
        else res.json({aqi: aqi})
    }
));

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
