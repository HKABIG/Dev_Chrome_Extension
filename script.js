fetch('https://backend-omega-seven.vercel.app/api/getjoke')
.then(data=> data.json()).then(jokeData=>{
    const question = jokeData[0].question;
    const punchline = jokeData[0].punchline;
    const jokeElementQ = document.getElementById('jokeElementQ')
    const jokeElementA = document.getElementById('jokeElementA')
    jokeElementQ.innerHTML = question;
    jokeElementA.innerHTML = punchline;
})