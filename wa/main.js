// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :NamesList: went for a walk. When they got to :LocationList:, they stared in horror for a few moments, then :EventList:. Bob saw the whole thing, but was not surprised — :NamesList: weighs 300 pounds, and it was a hot day.";

const NamesList = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const LocationList = ["the soup kitchen", "Disneyland", "the White House"];
const EventList = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

   const Name = randomValueFromArray(NamesList);
  const Location = randomValueFromArray(LocationList);
   const Event = randomValueFromArray(EventList);
 
  newStory = newStory.replace(/:NamesList:/g, Name);
  

 
  newStory = newStory.replace(":LocationList:", Location);
  newStory = newStory.replace(":EventList:", Event);

  if (customName.value !== '') {
    const name = customName.value;

    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone"; // Convert pounds to stone
    const temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade"; // Convert Fahrenheit to Centigrade
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}