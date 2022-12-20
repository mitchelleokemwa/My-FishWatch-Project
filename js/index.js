fetch("https://www.fishwatch.gov/api/species")
.then(response => response.json())
.then(data => {
  data.forEach((species, index) => {
    const card = document.getElementById(`card-${index + 1}`);
    const speciesName = species["Species Name"]
    const speciesImage = species["Species Illustration Photo"].src
    card.querySelector(".species-image").src = speciesImage;
    card.querySelector(".species-name").innerHTML = speciesName;
    card.querySelector(".population").innerHTML = `Population: ${species.Population}`;
    card.querySelector(".biology").innerHTML = `Biology: ${species.Biology}`;

  });
});




// fetch('https://www.fishwatch.gov/api/species')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     // Extract the population, species name, and taste from the data
//     const { Population, species, taste } = data;
//     // Create the card element
//     const card = document.createElement('div');
//     card.classList.add('card');
//     // Add the image element
//     const image = document.createElement('img');
//     const speciesImage = species['Species Illustration Photo'].src
//     image.src = speciesImage; // Set the image URL
//     card.appendChild(image);
//     // Add the population element
//     const populationElement = document.createElement('div');
//     populationElement.innerHTML = `Population: ${Population}`;
//     card.appendChild(populationElement);
//     // Add the species name element
//     const speciesNameElement = document.createElement('div');
//     const speciesName = species['Species Name']
//     speciesNameElement.innerHTML = `Species name: ${speciesName}`;
//     card.appendChild(speciesNameElement);
//     // Add the taste element
//     const tasteElement = document.createElement('div');
//     tasteElement.innerHTML = `Taste: ${taste}`;
//     card.appendChild(tasteElement);
//     // Render the card
//     document.body.appendChild(card);
//   });










// first  url
// const url1 = 'https://www.fishwatch.gov/api/species' 
// // all url
// let url = 'https://www.fishwatch.gov/api/species'

// document.addEventListener('DOMContentLoaded', () => {

//     document.getElementsByClassName('nav-item')[0].remove()

    
//     // const fetchData1 = () => {
//     fetch("https://www.fishwatch.gov/api/species").then(res => res.json())
//     .then(data =>   console.log(data))
//         const drupal =  document.getElementById('poster')
//         console.log(drupal)
//         drupal.src = firstFish.poster
//         const firstFishName = document.querySelector('#');
//         console.log(drupal)
//         console.log(drupal)
//         firstFishName.textContent = firstFish.title;
//         const fistFishBiology = document.querySelector('#biology');
//         fistFishBiology.textContent = `${firstFish.runtime} minutes`;

    

//     }
//     fetchData1()
//     const navBar = document.getElementById('movies-list')

//     //Create fetch 
//     const fetchAllMovies = url => {
//         fetch(url).then(res => res.json())
//         .then(movies => {
//             movies.forEach(movie => {
//                 displayAllMovies(movie)
//             });
//         })
//     }

//     // display movies lists
//     const displayAllMovies = movie => {
    
//         const li = document.createElement('li')
//         li.style.cursor ="pointer"
//         li.textContent = (movie.title)
//         navBar.appendChild(li)
//         displayMovieDetails()
//     }

//     // click to dsplay movie 
//     const displayMovieDetails = () => {
//         let children = navBar.children
       

//         for(let i=0; i<children.length; i++){
//             let child = children[i]
        

//             child.addEventListener('click',() => {
//                 fetch(`${url}/${i+1}`)

//                 .then(res => res.json())
//                 .then(movie => {
//                     document.getElementById('buy-ticket').textContent = 'Buy Ticket'
//                     setUpMovieDetails(movie)
//                 })

//             })
//         }
//     }
//     // create movie details 
//     function setUpMovieDetails(childMovie){
//         const preview = document.getElementById('poster')
//         preview.src = childMovie.poster;

//         const movieTitle = document.querySelector('#title');
//         movieTitle.textContent = childMovie.title;
//         const movieTime = document.querySelector('#runtime');
//         movieTime.textContent = `${childMovie.runtime} minutes`;
//         const movieDescription = document.querySelector('#film-info');
//         movieDescription.textContent = childMovie.description;
//         const showTime = document.querySelector('#showtime')
//         showTime.textContent = childMovie.showtime;
//         const tickets  = document.querySelector('#ticket-num')
//         tickets.textContent = childMovie.capacity - childMovie.tickets_sold;
//     }
//     const btn = document.getElementById('buy-ticket')

//             btn.addEventListener('click', function(e){
//                 let remTickets = document.querySelector('#ticket-num').textContent
//                 e.preventDefault()
//                 if(remTickets > 0){
//                     document.querySelector('#ticket-num').textContent  = remTickets-1
                    
//                 }
//                 else if(parseInt(remTickets, 10)===0){
//                     btn.textContent = 'Sold Out'
//                 }
//         })

//         fetchAllMovies(url)
//         fetchData1()
// })