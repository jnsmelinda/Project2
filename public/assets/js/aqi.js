$(document).ready(getAQI);

function getAQI() {
    const location = $("#location").val().trim() || "Seattle";
    $("#location").val(location);
    $("#location-feedback").val(location);
    $.ajax({url: `/api/aqi/${location}`}).then(
        function(response) {
            $("#aqi").val(response.aqi.aqi);
            const event = new CustomEvent('getAQI', {detail: response});
            document.dispatchEvent(event);
        },
        (response, status) => locationQueryError(response, status)
    );
}

//Returns detailed error message to the console
function locationQueryError(response, status) {
    console.log(`Request failed. Returned status: ${status}, response: ${JSON.stringify(response)}`);
    $('#locationQueryError').html('Sorry, no results for that search.');
}
