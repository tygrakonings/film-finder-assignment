

const addMoviesToDom = (movies) => {
    document.getElementById("filtered-list").innerHTML = "";
 return movies.map(function(movies) {

    let li = document.createElement("li");
    document.getElementById("filtered-list").appendChild(li);
    const img = document.createElement("img");
    img.src = movies.poster;
    const a = document.createElement("a");
    a.href = "https://www.imdb.com/title/" + movies.imdbID;
    li.appendChild(a);
    a.appendChild(img);


})
};

document.querySelectorAll("#radio-buttons").forEach(radioButtons => {
    radioButtons.addEventListener("change", function(event) {
       
handleOnChangeEvent(event);
   
})
})

addMoviesToDom(movies);

const handleOnChangeEvent = (event) => {
    console.log(event.target.id);

    switch (event.target.id) {

    case "all-movies":
            addMoviesToDom(movies);
     break;
    
    case "new-movies":
            const newMovies = movies.filter(movies => parseInt(movies.year) >2014);
            addMoviesToDom(newMovies);           
    break;

    case "avengers-movies":
             const avengerMovies = movies.filter(movies =>{
            return movies.title.toLowerCase().includes("avenger");
            })

            addMoviesToDom(avengerMovies);    
    break;

    case "xmen-movies":
             const xmenMovies = movies.filter(movies =>{
            return movies.title.toLowerCase().includes("x-men");
            })

            addMoviesToDom(xmenMovies);       
    break;

    case "princess-movies":
            const princessMovies = movies.filter(movies =>{
            return movies.title.toLowerCase().includes("princess");
            })

            addMoviesToDom(princessMovies);
    break;

    case "batman-movies":
             const batmanMovies = movies.filter(movies =>{
            return movies.title.toLowerCase().includes("batman");
            })

            addMoviesToDom(batmanMovies);       
    break;

        }
}







  
