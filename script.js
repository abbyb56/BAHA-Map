mapboxgl.accessToken = 'pk.eyJ1IjoiYWJieWI1NiIsImEiOiJjbWg5Y240ZmIwOGp2MmxweGl5bndsbWg1In0.5Up7SKH2tfaVz3DzQRf90Q';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML 
  style: 'mapbox://styles/abbyb56/cmh9cui05009j01rahlvofn17', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });

map.on('load', function() {
  map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/abbyb56/BAHA-Map/4d27a94fcb320119441a7e77a0bee1c06583c7b7/data/183data.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#7C83FD',
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

     // Add click event for popups
    map.on('click', 'points-layer', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;
    
          // Create popup content using the properties from the data
           const popupContent = `
              <div>
                  <h3>${properties.Landmark}</h3>
                  <p><strong>Address:</strong> ${properties.Address}</p>
                  <p><strong>Architect & Date:</strong> ${properties["Architect+ Date"]}</p>
                  <p><strong>Designated:</strong> ${properties.Designated}</p>
                  ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">Source Information</a></p>` : ''}
                  ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
              </div>
    `      ;
        // Build and attach popup to coordinates
          new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(popupContent)
              .addTo(map);
      });
        
        // Change cursor to pointer when hovering over points
      map.on('mouseenter', 'points-layer', () => {
              map.getCanvas().style.cursor = 'pointer';
      });

      // Change cursor back when leaving points
      map.on('mouseleave', 'points-layer', () => {
            map.getCanvas().style.cursor = '';
      });       
  });
  ``
