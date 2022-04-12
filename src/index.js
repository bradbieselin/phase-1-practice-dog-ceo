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

    imageLink.forEach(element => img.src = element);
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

document.addEventListener("click", handleClick);

function handleClick (e) {
    e.target.style.color = "red"
}

fetchDogs();
fetchBreeds();