// Set up Dependencies
const express = require('express');
const fs = require('fs/promises');
require('dotenv').config();

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static directory
app.use(express.static('public'));

const db = require('./models');

// Set Handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force: false}).then(() => {
    db.Feedback.findAll().then((result) => {
        if (result.length === 0) {
            seed(listen);
        } else listen();
    });
});

// seeding the database if it's empty
function seed(callback) {
    fs.readFile('db/seed.json', 'utf8').then((data) =>
        db.Feedback.bulkCreate(JSON.parse(data)).then(callback)
    );
}

function listen() {
    app.listen(PORT, () => console.log('App listening on PORT ' + PORT));
}
