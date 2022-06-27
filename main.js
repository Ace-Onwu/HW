document.querySelector('button').addEventListener('click', grab)


function grab(){
    let name = document.querySelector('input').value
    const url = `https://api.nationalize.io?name=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        document.querySelector('p').innerText = data.country[0].country_id
        
    })
    
    .catch(err=>{
        console.log(`error ${err}`)
    })
}