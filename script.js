
const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await response.json();

        console.log(json.message);
        dogImageDiv.innerHTML = `<img src='${json.message}' height=400 width=450 />`;
    } catch (error) {
        console.error('Error fetching dog:', error);
    }
};
dogButton.onclick = () => getNewDog()