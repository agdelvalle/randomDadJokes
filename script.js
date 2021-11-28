const button = document.querySelector('#btn');

// get joke
async function getJoke(){
    const joke = document.querySelector('#joke');
    const loadingText = ['This one is the best...', 'Waiting for a joke...', "Here's a good one...", "You're gonna laugh for sure..."]
    joke.style.backgroundColor = "#69A562";
    joke.style.color = "whitesmoke";
    joke.innerHTML = loadingText[Math.floor(Math.random()*4)];
    const getData = await fetch('https://icanhazdadjoke.com/', 
    {headers: {
        Accept: 'application/json'}
    })
    const results = await getData.json(); 
    // check
    console.log(results.joke)
    // display joke
    joke.style.backgroundColor = "whitesmoke";
    joke.style.color = "#C98B35";
    joke.innerHTML = results.joke;
};

// display joke on click
button.addEventListener('click', function(){
    getJoke();
    // console.log('working');
});