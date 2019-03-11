console.log('index.js is running!');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2hhcmx5bm1hbnV5YWciLCJhIjoiY2p0NGp0cWEzMGQxeDRhcGgwMDM2cDF0ayJ9.5olSGs4LadDBrVcLJigCUA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
