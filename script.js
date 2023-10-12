
const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response => Response.json())
        .then(json => {
            dogImageDiv.innerHTML = `<img src = '${json.message}' height=400 width=450 />` 
        })
}
dogButton.onclick = () => getNewDog()