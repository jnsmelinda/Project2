//Gets earthquake info from Melindascript, to be used in Google maps API.
document.addEventListener('dailyQuakes', printDailyQuakes, false);
document.addEventListener('quakesBySearch', printQuakesBySearch, false);

//This sets map formatting and recenters map to new area once searched.
var map;
var infowindow;
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.6062, lng: -122.3321},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.647, lng: 37.581},
      zoom: 11,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
      }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');


//Used to remove markers/old searches.
var gmarkers = [];
document.getElementById('clearButton').addEventListener('click', function () {
    removeMarker();
    $('#searchResults').html('');
    $('#searchErrors').html('');
    localStorage.clear();
    location.reload();

});

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


var badpollution =
    ['rgba(	186, 25, 60, 0)',
        'rgba(186, 25, 60, 3)',
        'rgba(186, 25, 60, 3)',
        'rgba(68, 36, 113,1)',
        'rgba(68, 36, 113,2)',
        'rgba(255, 0, 0, 1)',]

var goodpollution = [
'rgba(0, 255, 255, 0)',
'rgba(155, 248, 244,3)',
'rgba(34,193,195,2)',
'rgba(48, 213, 200,1)',
'rgba(	48, 213, 200,1)',

,
]

var mediumpollution =
["rgba(102, 255, 0, 1)",
"rgba(244, 227, 0, 1)",
"rgba(249, 198, 0, 1)",
"rgba(255, 170, 0, 1)",
"rgba(255, 113, 0, 1)",
"rgba(255, 57, 0, 1)",
"rgba(255, 0, 0, 1)"

]




//The below is to place coordinates for the last 5 quakes and changes marker color to blue.
function printDailyQuakes(event) {
    initMap(event.detail[0].coords[1], event.detail[0].coords[0]);
    for (var i = 0; i < 6; i++) {
        var heatmapData = [];
        var coords = event.detail[i].coords;
        var text = '5 Most Recent Rumbles - Location: ' + event.detail[i].place + ' Magnitude: ' + event.detail[i].mag + '' + ' Date: ' + event.detail[i].time + ' ';
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var tooltip = text;
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            zoom: 5,
            icon: pinSymbol('#1AC8DB'),
            title: tooltip
        });
        gmarkers.push(marker);
        heatmapData.push(latLng);
        var heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData,
            gradient: goodpollution,
            dissipating: false,
            map: map


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

//This is to get data for earthquakes that the user searches for and changes marker color to red.
function printQuakesBySearch(event) {
    initMap(event.detail[0].coords[1], event.detail[0].coords[0]);
    for (var i = 0; i < event.detail.length; i++) {
        var heatmapData = [];
        var coords = event.detail[i].coords;
        var text = 'Searched Rumbles - Location: ' + event.detail[i].place + ' Magnitude: ' + event.detail[i].mag + '' + ' Date: ' + event.detail[i].time + ' ';
        var tooltip = text;
        var latLng = new google.maps.LatLng(coords[1], coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            zoom: 5,
            mapTypeId: 'terrain',
            icon: pinSymbol('#FF424E'),
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
