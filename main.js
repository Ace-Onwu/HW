document.querySelector('button').addEventListener('click', getFreelancer)


function getFreelancer(){
let word = document.querySelector('input').value




const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  fetch(url)
        .then(res => res.json())
        .then(data =>{
           console.log(data[0].meanings[0].definitions[0].definition)
           
           document.querySelector('p').innerText = data[0].meanings[0].definitions[0].definition
          })
        .catch(err => {
          console.log(`error ${err}`)
        });


        


}