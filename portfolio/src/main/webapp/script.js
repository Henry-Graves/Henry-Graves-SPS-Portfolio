// Adds a random hobby to the page.
function showRandomHobby() {
    const hobbies =
        ['Doing Absolutely Nothing', 'Breathing', 'Forgetting to Blink', 'Tennis', 'Guitar', 'Walking in Nature', 
         'Making Coffee', 'Reading Manga (ask me for recommendations!)', 'Calisthenics', 'Valorant', 'Learning Personal Finance', 
         'Learning More about Software Development!'];
     
    // Pick a random hobby different from the last one, using localStorage to verify difference.     
    var randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    var resultHobby;

    if(localStorage.getItem('resultHobby') === undefined) {
        resultHobby = randomHobby;
        localStorage.setItem('resultHobby', resultHobby);
    } 
    else {
        resultHobby = localStorage.getItem('resultHobby');
    }

    while (randomHobby === resultHobby) {
        randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    }
    resultHobby = randomHobby;
    localStorage.setItem('resultHobby', resultHobby);

    // Add it to the page.
    const hobbyContainer = document.getElementById('hobby-container');
    hobbyContainer.innerText = resultHobby;
}

// Fetches the hardcoded string from the server and adds it to the page.
async function showRandomString() {
    const responseFromServer = await fetch('/string');
    const strings = await responseFromServer.json();

    // Pick a random string different from the last one, using localStorage to verify difference.
    var randomString = strings[Math.floor(Math.random() * strings.length)];
    var resultString;

    if(localStorage.getItem('resultString') === undefined) {
        resultString = randomString;
        localStorage.setItem('resultString', resultString);
    } 
    else {
        resultString = localStorage.getItem('resultString');
    }

    while (randomString === resultString) {
        randomString = strings[Math.floor(Math.random() * strings.length)];
    }
    resultString = randomString;
    localStorage.setItem('resultString', resultString);

    // Add it to the page
    const stringContainer = document.getElementById('string-container');
    stringContainer.innerText = resultString;
}