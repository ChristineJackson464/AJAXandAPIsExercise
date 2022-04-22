// AJAXandAPIsExercise

// NOTE: Entering URL/Endpoints into Postman can be helpful in this exercise. 


// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())
const jokeJSI = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`)

// 1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)
p1.innerText = jokeJSI.setup

// OR
/* const (setup) =  jokeJSI
p1.innerText = setup
*/

// 1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)
const punchline = jokeJSI
p2.innerText = punchline
// OR
// p2.innerText = jokeJSI.punchline

// 2
//!
// Use the Friends API for questions 2 & 3 (Link below)…
// https://friends-quotes-api.herokuapp.com/

const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a. Use the "Returns a single random quote." endpoint/URL to GET a Random quote using axios
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

// 2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called friendsJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request).
.then(res => {
    alert ('#2 works')
    const friendsJS2 = res

// 2c. Inside of the same function, access the value for the "character" key in the friendsJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "quote" key in the friendsJS2 object and set it to the inner text for the p4 variable/element (If done correctly the character and quote for the quote should display on the webpage)
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})
//   2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).
.catch(err => {
    alert('#2 failed')
});

// 3
//! DID NOT ATTEMPT
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3b
async function quoteFunc() {
    // 3a. Use the "Returns a single random quote." endpoint/URL again to GET another Random Quote using axios
    try {
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
   
// 3b. Create a function that uses async/await called quoteFunc which sets the value returned from the axios GET request to a const variable called quoteJS3
// 3c. Inside of the same quoteFunc function, access the value for the "character" key in the quoteJS3 object and set it to the inner text for the p5 variable/element. Also, access the value for the "quote" key in the quoteJS3 object and set it to the inner text for the p6 variable/element (If done correctly the character and quote for the quote should display on the webpage)(NOTE: Don't forget the run the quoteFunc function)
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;

// 3d. Finally, include try and catch inside the quoteFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).   
    } catch (err) {
        console.log(err);
    }
}

quoteFunc()


// 4
// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api

const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a. Using Axios, Async/await, and the "Episode by Number" endpoint/URL display the name of the final episode in season two of "The Mandalorian" TV show as the inner text for the p7 variable/element. Also, use tvMazeFunc for the name of the async function you create. If done correctly the name of the episode should display on the webpage. (NOTE: Don't forget to run the tvMazeFunc function)(Hint: id is 38963).
// 4b. Finally, include try and catch inside the tvMazeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).
async function tvMazeFunc() {
    try {
        const tvMaze = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        p7.innerText = tvMaze.data.name;
    } catch(err) {
        console.log(err);
        alert('Error')
    }
}

tvMazeFunc() 

// OR
/*
const id = 38963;
const season = 2;
const episode = 8;
const tvMazeURL = `https://api.tvmaze.com/shows/38963/episodebynumber?season=${season}&number=${episode}`;

sync function tvMazeFunc() {
    try {
        const show = await axios.get(tvMazeURL);
        console.log('Question 4);
        console.log(show);
        p7.innerText = show.data.name;
    } catch(err) {
        console.log(err);
    }
}

tvMazeFunc() 
*/


// BONUS
//! DID NOT ATTEMPT

// B-5. Use the Poke API as well as Axios (https://pokeapi.co/) to display an image of Pikachu below the fourth div on the webpage (NOTE: You can use .then or Async Await to complete this question it is up to you)
const body = document.querySelector('body');

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')

.then(res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_default;
    body.append(img);
})


.catch(err => {
    console.log(err);
    alert(`You missed!`)
});

/* OR
async function pokePic() {
    try {
        const pikachuImg = 'https://pokeapi.co/api/v2/pokemon/pikachu';
        const pikachu = await axios.get(pikachuImg);
        const imgOne = document.createElement(`img);
        imgOne.src = pikachu.data.sprites.front_default;
        fourth.after(imgOne);
    } catch(err) {
        console.log(err);
        console.log(`You have lost, try again`)
        alert(`You have lost, try again`)
    }
}

pokePic();
*/


// B-6. Use the OMDb API as well as Axios (http://www.omdbapi.com/) to display a movie poster of your choice next to the image of Pikachu using the t parameter endpoint (NOTE: Technically it is a query string, but they call it a parameter on the documentation. Also, you will need to create/request a FREE API key at http://www.omdbapi.com/apikey.aspx to complete this. Finally, you can use .then or Async Await to complete this question it is up to you.)

/* 
My key: 
http://www.omdbapi.com/?i=tt3896198&apikey=bbbd5264
*/


async function bonusSix() {
    try {
        const getPoster = await axios.get(`http://www.omdbapi.com/?apikey=bbbd5264&t=The+Ghost+and+Mrs.+Muir`);
        const poster = document.createElement(`img`);
        poster.src = getPoster.data.Poster;
        body.append(poster);
    } catch(err) {
        console.log(err);
    }
}

bonusSix();

/*
OR

const image2 = document.createElement(`img`);
body.append(image2);

const APIkey = `bbbd5264`
const title = `The Ghost and Mrs. Muir`;
const OMDBurl = `http://www.omdbapi.com/?apikey=${apikey}&t=${title};

async function OMDb() {
    const response = await axios.get(OMDBurl);
    console.log(`Question 6`);
    console.log(response);
    image2.src = response.data.Poster;
}

OMDb(); 

*/