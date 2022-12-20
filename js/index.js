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
