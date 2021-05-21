const jokesContainer = document.querySelector('#jokes')
const getJokes = document.querySelector('#get-joke') 

getJokes.addEventListener('click', async ()=>{

    const jokesResponds = await fetch('https://icanhazdadjoke.com/', {
    headers: {accept: 'application/json'}
  
})

const jokes = await jokesResponds.json()
jokesContainer.innerHTML = jokes.joke


})






