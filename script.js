
const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')
const audioPlayer = document.getElementById('audio-player')

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
// Counter to keep track of the number of clicks
let clickCount = 0;
// Counter to keep track of the number of clicks
dogButton.addEventListener("click", function () {
    // Increment the click count
    clickCount++;
    // Check if it's the third click
    if (clickCount % 3 === 0) {
        // Play the audio
        audioPlayer.play();
    }
});