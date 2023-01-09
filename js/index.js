document.addEventListener('DOMContentLoaded', ()=>{
  loadData ()
})

const loadData = ()=>{
   
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
}

const handleLogin = document.getElementById("login-btn")
handleLogin.addEventListener('click', ()=>{
  
 document.getElementById('nav-fish').removeAttribute('hidden')
 document.getElementById('nav-fish').style.display = 'center'
 document.getElementById('jumbo').style.display = 'none'
 document.getElementById('card-fish').removeAttribute('hidden')
 document.getElementById('card-fish').style.display = 'center'
})
