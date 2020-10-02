/* eslint-disable prettier/prettier */
//Gets Air Quality Index and Coordinates

document.addEventListener("getAQI", printAQI, false);

//This sets map formatting and recenters map to new area once searched. It applies nighttime styling.
let map;
let infowindow;
function initMap(lat = 47.6062, lon = -122.3321) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(lat, lon),
    zoom: 12,
    mapId: "7021e6413f8b24fc"
  });
  infowindow = new google.maps.InfoWindow();
}
//Sets up marker pin info except for color.
const gmarkers = [];

function pinSymbol(color) {
  return {
    path:
      "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0",
    fillColor: color,
    fillOpacity: 1,
    strokeColor: "#000",
    strokeWeight: 2,
    scale: 1
  };
}

//Pollution Gradients
const badpollution = [
  "rgba(	186, 25, 60, 0)",
  "rgba(186, 25, 60, 3)",
  "rgba(186, 25, 60, 3)",
  "rgba(68, 36, 113,1)",
  "rgba(68, 36, 113,2)",
  "rgba(255, 0, 0, 1)"
];
const goodpollution = [
  "rgba(0, 255, 255, 0)",
  "rgba(155, 248, 244,3)",
  "rgba(34,193,195,2)",
  "rgba(48, 213, 200,1)",
  "rgba(	48, 213, 200,1)"
];
const mediumpollution = [
  "rgba(102, 255, 0, 1)",
  "rgba(244, 227, 0, 1)",
  "rgba(249, 198, 0, 1)",
  "rgba(255, 170, 0, 1)",
  "rgba(255, 113, 0, 1)",
  "rgba(255, 57, 0, 1)",
  "rgba(255, 0, 0, 1)"
];

//The below is to place coordinates for the searched location and apply the headmap.
function printAQI(event) {
  initMap(event.detail.aqi.latitude, event.detail.aqi.longitude);
  for (let i = 0; i < 6; i++) {
    const heatmapData = [];
    const text = "AQI " + event.detail.aqi.aqi;
    const latLng = new google.maps.LatLng(
      event.detail.aqi.latitude,
      event.detail.aqi.longitude
    );
    const tooltip = text;
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      zoom: 12,
      icon: pinSymbol("#1AC8DB"),
      title: tooltip
    });
    gmarkers.push(marker);

    heatmapData.push(latLng);
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: false,
      map: map,
      gradient: goodpollution,
      radius: 0.03,
      opacity: 0.09,
      zoom: 12
    });
  }
}
