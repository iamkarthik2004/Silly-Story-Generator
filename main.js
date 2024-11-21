const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to get a random value from an array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// English Story Template with placeholders
const storyText = 'It was a chilly day, and :insertx: was out for a walk. As they passed :inserty:, they couldn’t believe their eyes:insertz:.';

// Possible values for the placeholders
const insertX = ['a curious adventurer', 'a young scientist', 'a daring explorer'];
const insertY = ['an ancient castle', 'the bustling city market', 'a mysterious forest clearing'];
const insertZ = [
  'a hidden treasure was revealed',
  'a dragon appeared in front of them',
  'the ground beneath them started glowing',
];

// Event listener to handle story generation on button click
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // Select random values for each placeholder
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders with random values
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // If user entered a custom name, replace the default character with that name
  if (customName.value !== '') {
    newStory = newStory.replace('a curious adventurer', customName.value);
  }

  // If UK is selected, adjust the story's units
  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone'; // Convert pounds to stone
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // Convert Fahrenheit to Celsius
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  // Display the generated story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
