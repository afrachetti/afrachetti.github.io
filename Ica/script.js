
const apiEndpoint = 'https://catfact.ninja/fact';

// Function to fetch a random cat fact
async function getFact() {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {

      throw new Error('Failed to fetch joke');
    }
    const data = await response.json();
    console.log(data.fact) ; // Log the fact  to the console
    displayRes(data.fact);

  } catch (error) {


    console.error(error.message);  

    alert('An error occurred while fetching the cat joke. Please try again  later. ');
  }
}

// Function to display the fetched fact
function displayRes(fact ) {
  const factText = document.getElementById('fact-text');
    factText.textContent = fact;
}

// Event listener for the button click
document.getElementById('fetch-fact')
  .addEventListener('click', getFact);

// Display a fact when the page loads
window.onload = getFact;