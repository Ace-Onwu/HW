//The user will enter a cocktail. Get a cocktail name, 
//photo, and instructions and place them in the DOM

//Event Listener: click button and a function occurs
 
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data =>{
        console.log(data) // console log the object 
        document.querySelector('h2').innerText = data[0].height
        document.querySelector('img').src = data[0].url
        document.querySelector('h3').innerText = data[0].width
       
    })
    .catch(err => { // if something goes wrong
        console.log('error ${err}')
    })



