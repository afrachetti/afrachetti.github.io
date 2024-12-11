 //  start leaflet map
 const map = L.map('map').setView([20, 0], 2);

 // Add openstreet map for base map
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Load the GeoJSON data from countries.geojson
 fetch('./countries.geojson')
      .then(response => response.json())


     .then(geojsonData => {
         // Adds the GeoJSON data to the map
         L.geoJSON(geojsonData, {
             onEachFeature: function (feature, layer) {
                 const { country, photos, pageUrl } = feature.properties;
 
                 
                 layer.on('click', function () {
 
                       window.location.href = `gallery.html?country=${encodeURIComponent(feature.properties.country)}`;// when pin clicked go to contry page 
                 });

           
                 let  popupContent = `<h3>${country}</h3>`;
                   popupContent  += `<div class='popup-content'>`;

                  photos.forEach(photo => { 
 
                     popupContent += `<img src="${photo}"  alt="Photo from ${country}">` ;
                  });
 
                  popupContent += `</div>`;
 
                   layer.bindPopup(popupContent); 
             }
          }).addTo(map) ;

         
     })

      .catch(error => console.error('Error with GeoJSON:', error));