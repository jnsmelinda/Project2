$(document).ready(getRecords);

// calling out API to get the last 3 entered record from db
function getRecords() {
    $.ajax({url: '/api/feedbacks'}).then(
        function(response) {
            for (let i = response.length - 1; i > response.length - 4; i--) {
                $('#records').append(addRecords(response[i]));
            }
        },
    );
}

// rendering the db records
function addRecords(record) {
    return $('<p>').text(`
        AQI: ${record.aqi} -
        Location: ${record.location} -
        Emotion: ${record.emotion} -
        Ability to Breathe: ${record.breathe} -
        Message: ${record.message}  `
    );
}

