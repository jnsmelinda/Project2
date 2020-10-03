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
        const civicDiv = $('#civic');

        for(officialNum = 0; officialNum < response.officials.length; officialNum++) {

            const civicName = response.officials[officialNum].name;
            const lineOne = $("<h6>").text("Name: " + civicName);

            civicDiv.append(lineOne);


            // //const civicTitle = response.offices[officialNum].name;
            // //const lineTwo = $("<p>").text("Office: " + civicTitle);

            // // append the title
            // civicDiv.append(lineTwo);

            // // stores the party affiliation and creates an element for party
            // const civicParty = response.officials[officialNum].party;
            // const lineThree = $("<p>").text("Party: " + civicParty);

            // // append the party
            // civicDiv.append(lineThree);

            // // stores phone number and creates an element for the phone number
            // const civicPhone = response.officials[officialNum].party;
            // const lineFour = $("<p>").text("Ph: " + civicPhone);

            // // append the phone number
            // civicDiv.append(lineFour);

        }


        // for(officeNum = 0; officeNum < response.offices.length; officeNum++) {

        //     // stores the politician's title and creates an element for title
        //     const civicTitle = response.offices[officeNum].name;
        //     const lineTwo = $("<p>").text("Office: " + civicTitle);

        // }

    });
}





