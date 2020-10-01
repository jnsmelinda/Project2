

$(document).ready(getAQI);

function getAQI() {
    $.ajax({url: '/api/aqi/Seattle'}).then(
        function(response) {
            const event = new CustomEvent('getAQI', {detail: response});
            document.dispatchEvent(event);
        }
    );
}

// This is how you can get the air quality data:
document.addEventListener('getAQI', printAQI, false);

function printAQI(event) {

    console.log(event.detail);
}
