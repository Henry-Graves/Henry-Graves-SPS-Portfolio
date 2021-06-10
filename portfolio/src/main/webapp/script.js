// Adds a random hobby to the page.
function showRandomHobby() {
    const hobbies =
        ['Doing Absolutely Nothing', 'Breathing', 'Forgetting to Blink', 'Tennis', 'Guitar', 'Walking in Nature', 
         'Making Coffee', 'Reading Manga (favorite: Attack on Titan)', 'Watching Anime (favorite: FLCL)', 'Valorant', 'Learning Personal Finance', 
         'Fixing 1 bug, creating 2'];
     
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

// Google Charts Library @ https://developers.google.com/chart 
// ---------------------------------------------------------------
google.charts.load('current', {'packages':['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

// Create a line chart and add it to the page.
function drawChart() {  
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', '%');
        data.addRows([
            ['1999', 58],
            ['2000', 62],
	        ['2001', 62],
	        ['2002', 60],
	        ['2003', 60],
	        ['2004', 61],
            ['2005', 62],
            ['2006', 61],
            ['2007', 65],
            ['2008', 62],
            ['2009', 57],
            ['2010', 56],
            ['2011', 54],
            ['2012', 53],
            ['2013', 52],
            ['2014', 54],
            ['2015', 55],
            ['2016', 52],
            ['2017', 54],
            ['2018', 55],
            ['2019', 55],
            ['2020', 55],
        ]);

    const options = {
        'title': 'Percentage of American adults investing in the stock market from 1999 - 2020',
        'legend': {position:'none'},
        'backgroundColor': 'White', 
        'colors':['#84a98c'],  
        'height': 400
    };
    
    const chart = new google.visualization.LineChart(document.getElementById('chart-container'));
    chart.draw(data, options);
}