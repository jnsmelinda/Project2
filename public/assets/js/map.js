//Gets Air Quality Index and Coordinates
document.addEventListener("getAQI", printAQI, false);


//This sets map formatting and recenters map to new area once searched. It applies nighttime styling.
let map;
let infowindow;

var aqchart = document.getElementById("aqchart");


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
let goodpollution = [
  "rgba(0, 255, 255, 0)",
  "rgba(155, 248, 244,3)",
  "rgba(34,193,195,2)",
  "rgba(48, 213, 200,1)",
  "rgba(48, 213, 200,1)"
];

let mediumpollution = [
  "rgba(102, 255, 0, 0)",
  "rgba(244, 227, 0, 3)",
  "rgba(249, 198, 0, 2)",
  "rgba(255, 170, 0, 1)",
  "rgba(255, 113, 0, 1)",
  "rgba(255, 57, 0, 1)",
  "rgba(255, 0, 0, 1)"
];

let badpollution = [
    "rgba(202, 49, 91, 0)",
    "rgba(122,62,119,3)",
    "rgba(122,62,119,2)",
    "rgba(235,37,28,2)",
    "rgba(235,37,28,1)"
  ];



//The below is to place coordinates for the searched location and apply the headmap.
function printAQI(event) {
    initMap(event.detail.aqi.latitude, event.detail.aqi.longitude);

    const heatmapData = [];
    let pollutioncircle = [];
    let rating = [];
    let chartcolor = [];
    let pin = [];
    let aqi = event.detail.aqi.aqi
    if (event.detail.aqi.aqi <= 40) {
      rating = "Good";
      pollutioncircle = goodpollution;
      pin = "#1AC8DB";
      chartcolor = "#3CB4FC";
    } else if (event.detail.aqi.aqi <= 70) {
      rating = "Unhealthy";
      pin = "#D9760D";
      chartcolor = "#FDFF30";
      pollutioncircle = mediumpollution;
    } else {
      rating = "Hazardous";
      pollutioncircle = badpollution;
      pin = "#7A3E77";
      chartcolor = "#F40CA4"
    }
    const text =
      "AQI: " +
      event.detail.aqi.aqi +
      " Rating: " + rating
    pollutioncircle;
    const latLng = new google.maps.LatLng(
      event.detail.aqi.latitude,
      event.detail.aqi.longitude
    );
    const tooltip = text;
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      zoom: 12,
      icon: pinSymbol(pin),
      title: tooltip
    });
    gmarkers.push(marker);
    marker.addListener(
      "click",
      (function (marker, text) {
        return function (e) {
          infowindow.setContent(text);
          infowindow.open(map, marker);
        };
      })(marker, text)
    );
    heatmapData.push(latLng);
    let heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      dissipating: false,
      map: map,
      gradient: pollutioncircle,
      radius: 0.03,
      zoom: 12
    });
    printchart(aqi,chartcolor);
  }
  function printchart(aqi,color) {
      let aqireplace;

    if (aqi <=100) {
        aqireplace = aqi;
      } else {
        aqireplace = 100;
      }
    document.getElementsByTagName('donut')[0].setAttribute("style", "text-shadow: 3px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000; --percentage : " + aqireplace + "; --fill: " + color + "" + ";");
    document.getElementById("AQIresults").innerHTML = aqi
  }
