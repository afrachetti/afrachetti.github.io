// Get country name from page
const params = new URLSearchParams(window.location.search);
 const countryName = params.get('country');
const hero = document.getElementById('hero');

// get  GeoJSON Data for country 
fetch('countries.geojson')
    .then(response => response.json())
    .then(data => {
    
        const countryFeature = data.features.find(feature => feature.properties.country === countryName
        );

    
        if (countryFeature) {
            const { photos, dates, flag } = countryFeature.properties;

            // makes background the flag 
            if (flag) {
                hero.style.backgroundImage = `url('${flag}')`;
                 hero.style.backgroundSize = "cover";
                hero.style.backgroundPosition = "center";
            }

            // counrty name and dates travled 
            document.getElementById('country-name').textContent = countryName;
            document.getElementById('travel-dates').textContent = `Dates Traveled: ${dates}`;

             // out images in carousel
            const carousel = document.getElementById('carousel');
              photos.forEach((photo, index) => {
                const card = document.createElement('div') ;
                 card.className = 'carousel-card';
                card.innerHTML = `
                    <img src="${photo}" alt="Photo from ${countryName}">

                    <h3>Photo ${index + 1}</h3>
                    
                `;
                carousel.appendChild(card);
            });

            // nav buttons 
            const prevButton = document.getElementById('prev') ;
            const nextButton = document.getElementById('next');
            let currentIndex = 0;

            prevButton.addEventListener('click', () => {
                const  totalCards = carousel.children.length;

                 currentIndex = (currentIndex - 1 + totalCards) % totalCards;

                carousel.style.transform = `translateX(-${currentIndex * 100}%)`
                ;
            });

            nextButton.addEventListener('click', () => {
                const totalCards = carousel.children.length;
                currentIndex = (currentIndex + 1) % totalCards;
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        } else {
            // no counrty found 
            document.getElementById('country-name').textContent = 'Country Not Found';
        }
    })
    .catch(error => console.error('cant find  GeoJSON:', error));