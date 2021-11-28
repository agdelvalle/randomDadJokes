const button = document.querySelector('#btn');

// const show = function(data){
//     console.log({data : data})
// }

// get joke
async function getJoke(){
    const joke = document.querySelector('#joke');
    joke.innerHTML = "Waiting for a joke...";
    const getData = await fetch('https://icanhazdadjoke.com/', 
    {headers: {
        Accept: 'application/json'}
    })
    const results = await getData.json(); 
    console.log(results.joke)

    joke.innerHTML = results.joke;
};

// display joke on click
button.addEventListener('click', function(){
    getJoke();
    console.log('working');
});