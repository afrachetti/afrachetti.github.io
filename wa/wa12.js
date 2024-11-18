// Function to fetch and display a random comic
async function fetchRandomComic() 
{
    try {
        // generate a Random  number between 1 and 3000 to pick commic 
        const randomComicNumber = Math.floor(Math.random() *  3000 ) + 1 ; 

        // api call 
        const apiUrl = `https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`;

        // Fetch  From the API
        const response =  await fetch(apiUrl); 

        if  (!response.ok)  {
            throw new Error('Failed to fetch ');

        }


         const myData = await response.json(); 

        // Update the comic data
        document.getElementById('title').textContent = myData.title; 

        document.getElementById('image').src = myData.img ;
        document.getElementById('image').alt =  myData.alt;
        document.getElementById('alt-text').textContent = myData.alt;
        document.getElementById('date').textContent = `Published  :  ${myData.month}/${myData.day}/${myData.year}`; 

    } catch (error) {
        console.error('Error fetching the comic:', error);
        alert('Failed to load comic. Please try again.');
    }

}

// connect to buttons 
document.getElementById('new-comic-btn').addEventListener('click', fetchRandomComic);

