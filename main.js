document.querySelector('button').addEventListener('click', grab)


function grab(){
    let name = document.querySelector('input').value
    const url = `https://api.agify.io?name=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('p').innerText = data.age
    })
    
    .catch(err=>{
        console.log(`error ${err}`)
    })
}