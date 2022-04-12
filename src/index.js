//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const fetchDogs = () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => addImage(data))
}

function addImage(pictures) {
    const imageLink = pictures.message;
    const img = document.createElement('img');

    const random = Math.floor(Math.random() * 4)
    img.src = imageLink[random];
    document.querySelector("#dog-image-container").append(img);
}

const fetchBreeds = () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => addBreed(data))
}

function addBreed(breeds) {
    const breedMessage = breeds.message;
    for(const breed in breedMessage) {
        const li = document.createElement("li");
        li.innerText = breed;
        document.querySelector("#dog-breeds").append(li);
    }
}

const li = document.getElementsByTagName("li");

document.addEventListener("click", handleClick);
function handleClick (e) {
    if(e.target.tagName.toLowerCase() === "li") {e.target.style.color = "red"}
    
}

fetchDogs();
fetchBreeds();