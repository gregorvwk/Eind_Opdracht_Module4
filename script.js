
const filmGrid = document.getElementById("film-grid");
const searchBtn = document.getElementsByClassName("search__btn")

// add all movies to the DOM

const movieseperate = movies.map(movieArray => ({movieArray}))

const addMoviesToDom = function(i) {
    const createImg = document.createElement("img")
    filmGrid.appendChild(createImg)
    createImg.src = movieseperate[i].movieArray.Poster
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
            console.log("Hey ik ben princesse films");
        break;
        case "x-men-films":
            filterMovies("X-Men")
            console.log("Hey ik ben X-men films");
        break;
        case "avenger-films":
            filterMovies("Avenger")
            console.log("Hey ik ben Avenger films");
        break;
        case "batman-films":
            filterMovies("Batman")
            console.log("Hey ik ben Batman films");
        break;
        case "latest-films":
            filterLatest()
            console.log("Hey ik ben latets films");
        break;
    }
}

// Movie filters

const filterMovies = function(movieTitle){
    filmGrid.innerHTML = ""
    let nameFilterMovies = movies.Title.forEach(movieTitle)
    console.log(nameFilterMovies)
    for (i = 0; i < nameFilterMovies.length; i++){
    const createImg = document.createElement("img")
    filmGrid.appendChild(createImg)
    createImg.src = nameFilterMovies[i].Poster
    }
}

const filterLatest = function(){
    filmGrid.innerHTML = ""
    let latestMovies =  movies.filter(movieArray => movieArray.Year >= 2014)
    for (i = 0; i < latestMovies.length; i++){
    const createImg = document.createElement("img")
    filmGrid.appendChild(createImg)
    createImg.src = latestMovies[i].Poster
    }
}