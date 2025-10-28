mapboxgl.accessToken = 'pk.eyJ1IjoiYWJieWI1NiIsImEiOiJjbWg5Y240ZmIwOGp2MmxweGl5bndsbWg1In0.5Up7SKH2tfaVz3DzQRf90Q';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML 
  style: 'mapbox://styles/abbyb56/cmh9cui05009j01rahlvofn17', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });