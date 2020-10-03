$(document).ready(displayCivicInfo);

function displayCivicInfo() {
    const location = $("#location").val().trim().toLowerCase() || "seattle";

    const queryURL = "https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=" + location + "&includeOffices=true&roles=legislatorUpperBody&key=AIzaSyBI6hpyHbsOD7Qk2e2C3d0Ti5kLW59QPc4";

    // creates an AJAX call for when the location is entered by the user
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        const civicDiv = $("<div class='civic'>");

        // stores the politician's name and creates an element for their name
        const civicName = response.officials.name;
        const lineOne = $("<h5>").text("Name: " + civicName);

        // append the politician's name
        civicDiv.append(lineOne);

        // stores the politician's title and creates an element for title
        const civicTitle = response.offices.name;
        const lineTwo = $("<p>").text("Office: " + civicTitle);

        // append the title
        civicDiv.append(lineTwo);

        // stores the party affiliation and creates an element for party
        var civicParty = response.officials.party;
        var lineThree = $("<p>").text("Party: " + civicParty);

        // append the party
        movieDiv.append(lineThree);

        // stores phone number and creates an element for the phone number
        var civicPhone = response.officials.party;
        var lineThree = $("<p>").text("Ph: " + civicPhone);

        // append the phone number
        movieDiv.append(lineFour);

    });
}

displayCivicInfo();




