//Gets earthquake info from Melindascript, to be used in Google maps API.

document.addEventListener('getAQI', printAQI, false);

//This sets map formatting and recenters map to new area once searched.
var map;
var infowindow;
function initMap(lat = 47.6062, lon = -122.3321) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(lat, lon),
        zoom: 12,
        mapId: '7021e6413f8b24fc'
    });
    infowindow = new google.maps.InfoWindow();
}
//Used to remove markers/old searches.


var gmarkers = [];
/*
document.getElementById('clearButton').addEventListener('click', function () {
    removeMarker();
    $('#searchResults').html('');
    $('#searchErrors').html('');
    localStorage.clear();
    location.reload();

}); */

//Sets up marker pin info except for color.
function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
    };
};


var badpollution =['rgba(	186, 25, 60, 0)', 'rgba(186, 25, 60, 3)', 'rgba(186, 25, 60, 3)','rgba(68, 36, 113,1)','rgba(68, 36, 113,2)', 'rgba(255, 0, 0, 1)']

var goodpollution = ['rgba(0, 255, 255, 0)','rgba(155, 248, 244,3)','rgba(34,193,195,2)','rgba(48, 213, 200,1)','rgba(	48, 213, 200,1)']

var mediumpollution = ["rgba(102, 255, 0, 1)", "rgba(244, 227, 0, 1)", "rgba(249, 198, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 113, 0, 1)","rgba(255, 57, 0, 1)",
"rgba(255, 0, 0, 1)"]





//The below is to place coordinates for the last 5 quakes and changes marker color to blue.
function printAQI(event) {
    initMap(event.detail.aqi.latitude, event.detail.aqi.longitude);
    for (var i = 0; i < 6; i++) {
        var heatmapData = [];
        var text = 'AQI ' + event.detail.aqi.aqi;
        var latLng = new google.maps.LatLng(event.detail.aqi.latitude, event.detail.aqi.longitude);
        var tooltip = text;
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            zoom: 12,
            icon: pinSymbol('#1AC8DB'),
            title: tooltip
        });
        gmarkers.push(marker);

        heatmapData.push(latLng);
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            dissipating: false,
            map: heatmap,
            radius: 1
        });

        }
        marker.addListener('click', (function (marker, text) {
            return function (e) {
                infowindow.setContent(text);
                infowindow.open(map, marker);
            }
        })(marker, text));
    }
;

/*
//This is to remove all markers
function removeMarker() {
    if (gmarkers.length > 0) {
        for (var i = 0; i < gmarkers.length; i++) {
            if (gmarkers[i] != null) {
                gmarkers[i].setMap(null);
            }
        }
    }
    gmarkers = [];
};
*/
