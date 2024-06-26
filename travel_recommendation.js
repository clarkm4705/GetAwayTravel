function travelSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('SearchBox').value;
    console.log('Search for ', searchTerm);
    const searchString = searchTerm.toLowerCase();
    console.log('Searching for ', searchString);
    const apiUrl = 'https://clarkm4705.github.io/GetAwayTravel/travel_recommendation_api.json';
    console.log(apiUrl);
    clearSearch();
    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const recommendationInfo = document.getElementById('travelsearchresults');
            /*console.log(JSON.stringify(data));*/
            if (searchString === "country" || searchString === "countries") {
                console.log("Countries block");
                for (const countries of data.countries) {
                    const country = document.createElement("div");
                    const countryName = document.createElement("h3");
                    countryName.textContent = countries.name;
                    country.className = "country-div";
                    country.appendChild(countryName);
                        for (const cities of countries.cities) {
                            const city = document.createElement("div");
                            const cityName = document.createElement("h4");
                            const cityImage = document.createElement("img");
                            const cityDescription = document.createElement("p");
                            cityName.textContent = cities.name;
                            cityImage.src = cities.imageUrl;
                            cityImage.className = "search-img";
                            cityDescription.textContent = cities.description;
                            city.className = "city-div";
                            city.appendChild(cityName);
                            city.appendChild(cityImage);
                            city.appendChild(cityDescription);
                            country.appendChild(city);
                        }
                    recommendationInfo.appendChild(country);
                    recommendationInfo.classList.add("visible");
                }
            } else if (searchString === "temple" || searchString === "temples") {
                console.log("Temples block");
                for (const temples of data.temples) {
                    const temple = document.createElement("div");
                    const templeName = document.createElement("h3");
                    const templeImage = document.createElement("img");
                    const templeDescription = document.createElement("p");
                    templeName.textContent = temples.name;
                    templeImage.src = temples.imageUrl;
                    templeImage.className = "search-img";
                    templeDescription.textContent = temples.description;
                    temple.className = "temple-div";
                    temple.appendChild(templeName);
                    temple.appendChild(templeImage);
                    temple.appendChild(templeDescription);
                    recommendationInfo.appendChild(temple);
                    recommendationInfo.classList.add("visible");
                }
            } else if (searchString === "beach" || searchString === "beaches") {
                for (const beaches of data.beaches) {
                    console.log("beaches block");
                    const beach = document.createElement("div");
                    const beachName = document.createElement("h3");
                    const beachImage = document.createElement("img");
                    const beachDescription = document.createElement("p");
                    beachName.textContent = beaches.name;
                    beachImage.src = beaches.imageUrl;
                    beachImage.className = "search-img";
                    beachDescription.textContent = beaches.description;
                    beach.className = "beach-div";
                    beach.appendChild(beachName);
                    beach.appendChild(beachImage);
                    beach.appendChild(beachDescription);
                    recommendationInfo.appendChild(beach);
                    recommendationInfo.classList.add("visible");
                }
            } else {
                console.log("No results");
                recommendationInfo.innerHTML = `<p>No results found. Try searching for something else.</p>`;
                recommendationInfo.classList.add("visible");
            }
            
        })
        .catch(error => {
            console.error('Error fetching recommendations', error);
            const recommendationInfo = document.getElementById('travelsearchresults');
            recommendationInfo.classList.add("visible");
            recommendationInfo.innerHTML = `<p>Failed to fetch recommendations.</p><p>Please try again or <a href = "./contact.html">Contact Us</a> for help.</p>`;

    });
}  

function clearSearch() {
    document.getElementById('SearchBox').value = "";
    const recommendationInfo = document.getElementById('travelsearchresults');
    recommendationInfo.innerHTML = "";
    recommendationInfo.classList.remove("visible");
}
document.getElementById('SearchButton').addEventListener('click', travelSearch);
document.getElementById('ResetButton').addEventListener('click', clearSearch);
