const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


// Declaring the array of image filenames
const pics = ['/img/1984_Porsche_944_coupe_(19473129259).jpg', '/img/400px-Porsche_944_LM_rear-right_Porsche_Museum.jpg', '/img/1986_944_Turbo.jpg', '/img/1986_Porsche_944_Turbo.jpg', '/img/Porsche_944_S__Audi_R8_-_Flickr_-_Alexandre_Prévot_(2).jpg'];

// Declaring the alternative text for each image file
const altTexts = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
];

// Looping through images
for (let i=0; i<pics.length;i++){

    const newImage = document.createElement('img'); 

    newImage.setAttribute('src',  pics[i]); 
    newImage.setAttribute('alt', altTexts[i]); 
    thumbBar.appendChild(newImage);



    // Adding a click event listener to each thumbnail image
     newImage.addEventListener('click', () => {

        displayedImage.setAttribute('src', pics[i] );
         displayedImage.setAttribute('alt', altTexts[i]);
    });
};

// Wiring up the Darken/Lighten button
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {

         btn.setAttribute('class',  'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {

        btn.setAttribute('class', 'dark');

        btn.textContent = 'Darken';
        overlay.style.backgroundColor =  'rgb(0 0 0 / 0%)';
    }
});