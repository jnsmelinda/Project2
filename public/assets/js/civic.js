$(document).ready(displayCivicInfo);

function displayCivicInfo() {
    const location = $('#location').val().trim().toLowerCase() || 'seattle';

    // Google Civic API Key is restricted in Google Cloud Platform
    // eslint-disable-next-line max-len
    const queryURL = 'https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=' + location + '&includeOffices=true&roles=legislatorUpperBody&key=AIzaSyBI6hpyHbsOD7Qk2e2C3d0Ti5kLW59QPc4';


    // creates an AJAX call for when the location is entered by the user
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        const civicDiv = $('#civic');

        // Loops through array from JSON to get the politician's name
        for (officialNum = 0; officialNum < response.officials.length; officialNum++) {
            const civicName = response.officials[officialNum].name;
            const lineOne = $('<h6>').text('Name: ' + civicName);

            civicDiv.append(lineOne);
        }
    });
}
