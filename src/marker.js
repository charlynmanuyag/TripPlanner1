const mapboxgl = require('mapbox-gl');

const buildMarker = function(type, coordinates) {
  console.log('build marker is running');
  const marker = document.createElement('div');
  marker.className = type;
  return new mapboxgl.Marker(marker).setLngLat(coordinates);
};

module.exports = buildMarker;
