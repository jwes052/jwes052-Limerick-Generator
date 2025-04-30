/*
function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generateJoke(event) {
  event.preventDefault();

  let apiKey = "1eb1e9a390fc1d4beo3ea647ft15a929";
  let context =
    "You are a hilarious AI Assitant that tells hokes. Be polite and provide a short answer, you are funny but not rude. The joke must be provided in HTML format. Example: <p>this is the joke</p> <p>this is the answer</p>";
  let prompt = "Tell a funny joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Hmmmmm let me think of one for you......";

  axios.get(apiUrl).then(displayJoke);
}

let jokeClick = document.querySelector("#myJokeButton");
jokeClick.addEventListener("click", generateJoke);

*/

function displayLimerick(response) {
    console.log(response.data.answer);
  
    new Typewriter("#myLimerick", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 10,
    });
  }

function generateLimerick(event) {
    event.preventDefault();
  
/*get the subject and assign it to a variable*/
    let limerickSubject = document.querySelector("#myLimerickSubject");

    let apiKey = "1eb1e9a390fc1d4beo3ea647ft15a929";
    let context =
      "You are a hilarious AI Assitant that writes limericks.Be polite, you are funny but not rude and should be provided in HTML format. Example: <p>this is the first line of the limerick</p> <p>this is the second line of the limerick</p>";
    let prompt = `Write a funny limerick on the subject of ${limerickSubject.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let LimerickElement = document.querySelector("#myLimerick");
    LimerickElement.innerHTML = "Hmmmmm let me think of one for you......";
  
    axios.get(apiUrl).then(displayLimerick);
  }

  let submitClick = document.querySelector("#myLimerickButton");
  submitClick.addEventListener("click", generateLimerick);