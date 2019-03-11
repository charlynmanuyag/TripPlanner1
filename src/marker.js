const mapboxgl = require("mapbox-gl");

const buildMarker = function (type, coordinates) {
    console.log('build marker is running')
    const marker = document.createElement("div")
    marker.className = type
    new mapboxgl.Marker(marker).setLngLat(coordinates);
    console.log('build marker is done')
  }

module.exports = buildMarker
