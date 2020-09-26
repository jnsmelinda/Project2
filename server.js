// Set up Dependencies
const express = require('express');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Require Models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Set Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
require('./routes/html-routes.js')(app);
require('/routes/api-routes.js')(app);

// Syncing sequelize models and then starting Express App
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});
