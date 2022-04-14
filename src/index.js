//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const fetchDogs = () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => data.message.forEach(data => addImage(data)))
}

const fetchBreeds = () => {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        addBreed(data)
        handleChange(data => { return data })
    })
}






function addImage(pictures) {
    const container = document.getElementById("dog-image-container");
    const img = document.createElement('img');
    img.src = pictures;
    container.append(img);
}



let breedsObject = {};

function addBreed(breeds) {
    breedsObject = Object.keys(breeds.message);
    const breedMessage = breeds.message;
    createLi(breedMessage);
}


function createLi (breeds) {
    const ul = document.querySelector("#dog-breeds")
    for(const breed in breeds) {
        if (breeds[breed].length !== 0) {
            const array = breeds[breed];
            array.forEach(nestedBreed => {
                const innerLi = document.createElement("li");
                innerLi.innerText = `${nestedBreed} ${breed}`;
                ul.appendChild(innerLi);
            })
        } else {
            const li = document.createElement("li");
            li.innerText = breed;
            ul.appendChild(li);
        }
    }
}


const dropdown = document.querySelector("#breed-dropdown")



const li = document.getElementsByTagName("li");
document.addEventListener("click", handleClick);

function handleClick (e) {
    if(e.target.tagName.toLowerCase() === "li") {e.target.style.color = "red"};
}




dropdown.addEventListener("change", handleChange);

function handleChange(e) {
    const letter = e.target.value;
    filteredBreeds = breedsObject.filter(breed => breed.startsWith(letter));

    const obj = {};
    filteredBreeds.forEach(breed => obj[breed] = "")
    const ul = document.querySelector("#dog-breeds")
    ul.innerHTML = "";
    createLi(obj);
}


fetchDogs();
fetchBreeds();