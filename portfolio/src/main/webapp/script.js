// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Adds a random hobby to the page.
function showRandomHobby() {
  const hobbies =
      ['Doing Absolutely Nothing', 'Breathing', 'Forgetting to Blink', 'Tennis', 'Guitar', 'Walking in Nature', 
      'Making Coffee', 'Reading Manga (ask me for recommendations!)', 'Calisthenics', 'Valorant', 'Learning Personal Finance', 
      'Learning More about Software Development!'];
  var resultHobby = " ";

  // Pick a random hobby different from the last one.
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];

  while (randomHobby == resultHobby) {
        randomHobby = hobbies[Math.floor(Math.random() * strings.length)];
    }
    resultHobby = randomHobby;

  // Add it to the page.
  const hobbyContainer = document.getElementById('hobby-container');
  hobbyContainer.innerText = resultHobby;
}

// Fetches the hardcoded string from the server and adds it to the page.
async function showRandomString() {
    const responseFromServer = await fetch('/string');
    const strings = await responseFromServer.json();
    var resultString = " ";

    // Pick a random string different from the last one.
    const randomString = strings[Math.floor(Math.random() * strings.length)];

    while (randomString == resultString) {
        randomString = strings[Math.floor(Math.random() * strings.length)];
    }
    resultString = randomString;

    // Add it to the page
    const stringContainer = document.getElementById('string-container');
    stringContainer.innerText = resultString;
}