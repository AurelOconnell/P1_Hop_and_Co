function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

var myMap = L.map('myMaps').setView([46.539240, 2.430189], 6);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
}).addTo(myMap);

var iconHop = L.icon({
  iconUrl: "images/icon_hop.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
})


var breweries = {
    "Nomade Brewery": {"lat": 45.73126983642578, "lon": 4.985140800476074},
    "La Débauche": {"lat": 45.65844509244459, "lon": 0.1680949586376146 },
    "Zoobrew": {"lat": 43.64225769042969, "lon": 3.9191091060638428},
    "Piggy Brewing": {"lat": 48.763998, "lon": 6.059797},
    "L'Agrivoise": {"lat": 45.0158629610363, "lon": 4.386628185462709},
    "Brasserie Iron": {"lat": 43.975976224756494, "lon": 1.4139738535551438},
} 

for(brewery in breweries) {
    var marker = L.marker([breweries[brewery].lat, breweries[brewery].lon],{icon: iconHop}).addTo(myMap);
    marker.bindPopup("<h4>"+brewery+"</h4>");
}
