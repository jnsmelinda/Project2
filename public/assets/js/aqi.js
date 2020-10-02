$(document).ready(getAQI);

function getAQI() {
    const location = $("#location").val().trim() || "Seattle";
    $("#location").val(location);
    $.ajax({url: `/api/aqi/${location}`}).then(
        function(response) {
            const event = new CustomEvent('getAQI', {detail: response});
            document.dispatchEvent(event);
        }
    );
}
