
const filmGrid = document.getElementById("film-grid");
const searchBtn = document.getElementsByClassName("search__btn")

// add all movies to the DOM

const movieseperate = movies.map(movieArray => ({movieArray}))

const addMoviesToDom = function(i) {
    const movieLi = document.createElement("li")
    const movieLink = document.createElement("a")
    const createImg = document.createElement("img")
    filmGrid.appendChild(movieLi).appendChild(movieLink).append(createImg)
    createImg.src = movieseperate[i].movieArray.Poster
    movieLink.href = "https://www.imdb.com/title/" + movieseperate[i].movieArray.imdbID
    movieLi.className = "film-poster"
}

for (i = 0; i < movies.length; i++){
    addMoviesToDom(i)
}

// btn DOM

for (i = 0; i < searchBtn.length; i++){
searchBtn[i].addEventListener("change", function(){
    handelOnChangeEvent()
})
}
const handelOnChangeEvent = function(){
    switch (event.target.value){
        case "princess-films":
            filterMovies("Princess")
        break;
        case "x-men-films":
            filterMovies("X-Men")
        break;
        case "avenger-films":
            filterMovies("Avenger")
        break;
        case "batman-films":
            filterMovies("Batman")
        break;
        case "latest-films":
            filterLatest()
        break;
    }
}

// Movie filters

const filterMovies = function(movieTitle){
    filmGrid.innerHTML = ""
    let nameFilterMovies = movies.filter((movieName) => {
        return movieName.Title.indexOf(movieTitle) != -1;
    })
    for (i = 0; i < nameFilterMovies.length; i++){
    const movieLi = document.createElement("li")
    const movieLink = document.createElement("a")
    const createImg = document.createElement("img")
    filmGrid.appendChild(movieLi).appendChild(movieLink).append(createImg)
    createImg.src = nameFilterMovies[i].Poster
    movieLink.href = "https://www.imdb.com/title/" + nameFilterMovies[i].imdbID
    movieLi.className = "film-poster"
    }
}


const filterLatest = function(){
    filmGrid.innerHTML = ""
    let latestMovies =  movies.filter(movieArray => movieArray.Year >= 2014)
    for (i = 0; i < latestMovies.length; i++){
    const movieLi = document.createElement("li")
    const movieLink = document.createElement("a")
    const createImg = document.createElement("img")
    filmGrid.appendChild(movieLi).appendChild(movieLink).append(createImg)
    createImg.src = latestMovies[i].Poster
    movieLink.href = "https://www.imdb.com/title/" + latestMovies[i].imdbID
    movieLi.className = "film-poster"
    }
}

// menu

let navTag = document.getElementById("nav-id")
let nav = document.getElementsByClassName("nav");
let image = document.getElementById("images");
let change = document.getElementsByClassName("change");

image.addEventListener("click", function(){
    if (navTag.className == "nav"){
        console.log("check")
        navTag.className = "change";
    } else {
        navTag.className = "nav";
    }
})