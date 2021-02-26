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

/**
 * Adds a random greeting to the page.
 */
function addRandomHobby() {
  const hobbies =
      ['Doing Absolutely Nothing', 'Breathing', 'Forgetting to Blink', 'Tennis', 'Guitar', 'Walking in Nature', 
      'Making Coffee', 'Reading Manga (ask me for recommendations!)', 'Calisthenics', 'Valorant', 'Learning Personal Finance', 
      'Learning More about Software Development!'];

  // Pick a random greeting.
  const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];

  // Add it to the page.
  const hobbyContainer = document.getElementById('hobby-container');
  hobbyContainer.innerText = hobby;
}


