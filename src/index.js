// Your code here
// Load  the DOM content
document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the local server.
    fetchAnimals();
  });
  // Fetch http://localhost:300/characters.
  function fetchAnimals() {
    fetch("http://localhost:3000/characters")
      .then((resp) => resp.json())
      .then(myCharacter);
  }
  // Takes in a number of characters but only renders them one by one
  function myCharacter(characters) {
    characters.forEach(myDetails);
  }