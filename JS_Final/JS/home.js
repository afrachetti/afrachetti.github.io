 // Initialize map
 const map = L.map('map').setView([20, 0], 2);

 // Add OpenStreetMap tiles
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Load Geojson data
 fetch('countries.geojson')
     .then(response => response.json())
     .then(geojsonData => {
         // Add points to the map
         L.geoJSON(geojsonData, {
             onEachFeature: function (feature, layer) {
                 const { country, photos } = feature.properties;
                 layer.bindPopup(`<strong>${country}</strong>`);
             }
         }).addTo(map);

         // Create gallery cards
         const carousel = document.getElementById('gallery-carousel');
         geojsonData.features.forEach(feature => {
             const { country, photos } = feature.properties;
              if (photos.length > 0) {
                 const card = document.createElement('div');

                
                 card.className = 'card' ;
                  card.innerHTML = `
                     <img src="${photos[0]}" alt="${country}" class="card-image">
                     <div class="card-content">
                         <h3>${country}</h3>
                         <a href="gallery.html?country=${encodeURIComponent(country)}" class="btn">View Gallery</a>
                     </div>
                 `;
                 carousel.appendChild(card);
             }
         });

         // Carousel navigation
         const carouselTrack = document.querySelector('.carousel');

         const prevButton = document.getElementById('prev');
         const nextButton = document.getElementById('next');
         const cardWidth = carouselTrack.querySelector('.card').offsetWidth;
         const visibleCards = 3 ;
         let currentScroll  = 0;  

         prevButton.addEventListener('click', () =>  {
             currentScroll =  Math.max(currentScroll - cardWidth * visibleCards, 0);

             carouselTrack.style.transform = `translateX(-${currentScroll}px)`;
         });

         nextButton.addEventListener('click', () => {
             const maxScroll = (carouselTrack.children.length - visibleCards) * cardWidth;
             currentScroll = Math.min(currentScroll + cardWidth * visibleCards, maxScroll);
            
             carouselTrack.style.transform = `translateX(-${currentScroll}px)`;
         });
     })
     .catch(error => console.error('Error loading GeoJSON:', error));
     