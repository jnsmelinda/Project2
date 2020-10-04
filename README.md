# Vent

[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=green)](https://choosealicense.com/licenses/mit/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

As the result of the second group project of the bootcamp we came up with the idea of VENT. It is an interactive website to help concerned citizens to see what is the air in their area and to provide a platform where they are able to express their feelings  and submit a short message to their local representative regarding the air quality.

We utilized the [AirNOW.gov](https://www.airnow.gov/?city=Bellevue&state=WA&country=USA), [Google Maps](https://cloud.google.com/maps-platform/) and [OpenCage geocoding](https://opencagedata.com/api) APIs to pull and display air quality data and the [Civic Info](https://developers.google.com/civic-information) API to get the local representative based on the query location.

## Project Demonstration
![Git](readmevideo.gif)  

## Team
- [Joo Heredia](https://github.com/djjoo007): Project setup with Sequelize and Express, Heroku deploy
- [Kelsey James](https://github.com/KJ-Labs): CSS, HTML, Charts, Emotions and Google Maps API
- [Matt Wibur](https://github.com/wilbur125): Civic API, Handlebars, Responsive design
- [Melinda Ivanov](https://github.com/jnsmelinda): Integrating AirNow and Opencage APIs and persistance layer

## Links
- Github: https://github.com/jnsmelinda/Vent
- Heroku: https://vent-airquality-tracker.herokuapp.com/

## Demo
- ![Git](demoimage.PNG)  

## Technologies
- [JavaScript](https://www.javascript.com)
- [Node.js](https://nodejs.org/en/)
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Git](https://git-scm.com/), [GitHub](https://github.com)
- [MySQL](https://www.mysql.com/)
- [Handlebars](https://handlebarsjs.com/)
- [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping)

## Installation
At first, you need to have [node.js](https://nodejs.org/) installed, then you need to install the required modules by running `npm install` in the command-line and start your mySQL database.

## Usage
Visit the heroku link and add query a location where you want to see the air quality index. The location will appear on the map with the color-coded pin. Then you have an option to leave some feedback about your the air quality you experience and message to your local representative.

## License
This repository is protected under the [MIT](https://choosealicense.com/licenses/mit/) license.

## Contribution
Please contribute to this project by opening a Pull Request and following the `eslint` rules and the [Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

## Screenshots
![Git](screenshot.PNG)  
Emoji and Lung Emoticons from Canva.
