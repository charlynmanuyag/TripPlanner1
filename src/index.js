// console.log('index.js is running!');
const buildMarker = require('./marker')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiYWxsaWVmcmVuY2giLCJhIjoiY2p0NGp0eGwwMTV3MTQ0cGhkdmZwem41ciJ9.UjaeeOO_TtrZTI9tYVi0Og";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const buildMarker = function (type, coordinates) {
//   console.log('build marker is running')
//   const marker = document.createElement("div")
//   marker.className = type
//   new mapboxgl.Marker(marker).setLngLat(coordinates).addTo(map);
//   console.log('build marker is done')
// }

const marker = buildMarker('activity', [-74.009, 40.705]);
marker.addTo(map)
