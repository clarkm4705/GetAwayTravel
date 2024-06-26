function travelSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('SearchBox').value;
    console.log('Search for ', searchTerm);
    const searchString = searchTerm.toLowerCase();
    console.log('Searching for ', searchString);
    const apiUrl = 'https://clarkm4705.github.io/GetAwayTravel/travel_recommendation_api.json';
    console.log(apiUrl);
    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const recommendationInfo = document.getElementById('travelsearchresults');
            console.log(JSON.stringify(data));
            if (searchString == "country" || searchString == "countries") {
                for (const countries of data.countries) {
                const country = document.createElement("div");
                const countryName = document.createElement("h3");
                countryName.textContent = countries.name;
                country.appendChild(countryName);
                recommendationInfo.appendChild(country);
                }
            } else if (searchString == "temple" || searchString == "temples") {
                for (const temples of data.temples) {
                const temple = document.createElement("div");
                const templeName = document.createElement("h3");
                templeName.textContent = temples.name;
                temple.appendChild(templeName);
                recommendationInfo.appendChild(country);
                }
            } else if (searchString == "beach" || searchString == "beaches") {
                for (const beaches of data.beaches( {
                const beach = document.createElement("div");
                const beachName = document.createElement("h3");
                beachName.textContent = beaches.name
                beach.appendChild(beachName);
                recommendationInfo.appendChild(beach);
                }
            } else {
                console.log("No results");
                recommendationInfo.innerHTML = `<p>No results found. Try searching for something else.</p>`;
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
    document.getElementById('travelsearchresults').innerHTML = "";
}
document.getElementById('SearchButton').addEventListener('click', travelSearch);
document.getElementById('ResetButton').addEventListener('click', clearSearch);
