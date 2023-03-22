function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*------button up-------*/

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*------------ADD MAPS-------------*/
var myMap = L.map('myMaps').setView([46.539240, 2.430189], 5);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap);

var iconHop = L.icon({
  iconUrl: "images/icon_hop.png",
  iconSize: [25, 25],
  iconAnchor: [12.5, 25],
  popupAnchor: [0, -30],
});

var breweries = {
  "Nomade Brewery": { "lat": 45.73126983642578, "lon": 4.985140800476074 },
  "La Débauche": { "lat": 45.65844509244459, "lon": 0.1680949586376146 },
  "Zoobrew": { "lat": 43.64225769042969, "lon": 3.9191091060638428 },
  "Piggy Brewing Compagny": { "lat": 48.763998, "lon": 6.059797 },
  "L'Agrivoise": { "lat": 45.0158629610363, "lon": 4.386628185462709 },
  "Brasserie Iron": { "lat": 43.975976224756494, "lon": 1.4139738535551438 },
}

for (brewery in breweries) {
  var marker = L.marker([breweries[brewery].lat, breweries[brewery].lon], { icon: iconHop }).addTo(myMap);
  marker.bindPopup("<h4>" + brewery + "</h4>");
}

/* Nomade */

var myMap1 = L.map('myMaps1').setView([45.73126983642578, 4.985140800476074], 11);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap1);


var marker1 = L.marker([45.73126983642578, 4.985140800476074], { icon: iconHop }).addTo(myMap1);
marker1.bindPopup("<h4>Nomade Brewery</h4>");


/* La Débauche */

var myMap2 = L.map('myMaps2').setView([45.65844509244459, 0.1680949586376146], 11);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap2);

var marker = L.marker([45.65844509244459, 0.1680949586376146], { icon: iconHop }).addTo(myMap2);
marker.bindPopup("<h4>La Débauche</h4>");

/* Zoobrew */

var myMap3 = L.map('myMaps3').setView([43.64225769042969, 3.9191091060638428], 11);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap3);

var marker = L.marker([43.64225769042969, 3.9191091060638428], { icon: iconHop }).addTo(myMap3);
marker.bindPopup("<h4>Zoobrew</h4>");

/* Piggy Brewing Company */

var myMap4 = L.map('myMaps4').setView([48.763998, 6.059797], 11);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap4);

var marker = L.marker([48.763998, 6.059797], { icon: iconHop }).addTo(myMap4);
marker.bindPopup("<h4>Piggy Brewing Company</h4>");

/* L'Agrivoise */

var myMap5 = L.map('myMaps5').setView([45.0158629610363, 4.386628185462709], 11);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap5);

var marker = L.marker([45.0158629610363, 4.386628185462709], { icon: iconHop }).addTo(myMap5);
marker.bindPopup("<h4>L'Agrivoise</h4>");

/* Brasserie IRON */

var myMap6 = L.map('myMaps6').setView([43.975976224756494, 1.4139738535551438], 11);
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 5,
  maxZoom: 20
}).addTo(myMap6);

var marker = L.marker([43.975976224756494, 1.4139738535551438], { icon: iconHop }).addTo(myMap6);
marker.bindPopup("<h4>Brasserie IRON</h4>");

/*--------- Form button ---------*/

const message = "Merci pour votre message, nous vous répondrons dans les meilleurs délais";

document.getElementById("buttonForm");
document.addEventListener("buttonForm", function (event) {
  event.preventDefault();
  alert(message);
});