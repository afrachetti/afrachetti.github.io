
// Load the GeoJSON data
fetch('countries.geojson')
    .then(response => response.json())
    .then(geojsonData => {
        const galleryContainer = document.getElementById('project-gallery');

        const regionFilter = document.getElementById('region-filter');

        const regions = new Set();

        // create the gallery and filter
        geojsonData.features.forEach(feature => {

            const { country, photos, region } = feature.properties ;

             regions.add(region);

            if (photos.length > 0) {
                const card = document.createElement('div');
                card.className = 'card';
                 card.setAttribute('data-region', region);
                card.innerHTML = `
                    <img src="${photos[0]}" alt="${country}" class="card-image">
                    <div class="card-content">
                         <h3>${country}</h3>
                        <a href="gallery.html?country=${encodeURIComponent(country)}" class="btn">View Gallery</a>
                    </div>
                `;
                galleryContainer.appendChild(card);
            }
        });

        // Populate region filter dropdown
        regions.forEach(region => {
            const option  = document.createElement('option');

             option.value = region; 
             
            option.textContent = region;
            regionFilter.appendChild(option) ;
        });

        // Filter displaid gallerys  based on region
        regionFilter.addEventListener('change', () => {

             const selectedRegion = regionFilter.value;
            const cards =  document.querySelectorAll('.card') ;


            cards.forEach(card => {
                 if (selectedRegion  === 'all' || card.getAttribute('data-region') ===  selectedRegion) {

                    card.style.display =  'block';
                } else {
                          card.style.display = 'none' ; 
                }
            });
        });
    })
    .catch(error => console.error('cant load  GeoJSON:', error));
