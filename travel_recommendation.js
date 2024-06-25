function travelSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('SearchBox').value;
    console.log('Search for ', searchTerm);
    const searchString = searchTerm.toLowerCase();
    console.log('Searching for ', searchString);
    const apiUrl = 'https://clarkm4705.github.io/GetAwayTravel/travel_recommendation_api.json';
    console.log(apiURL);
    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const recommendationInfo = document.getElementById('travelsearchresults');
            console.log(JSON.stringify(data));
            recommendationInfo.innerHTML = `<p>JSON results</p>`;
            
        })
        .catch(error => {
            console.error('Error fetching recommendations', error);
            const recommendationInfo = document.getElementById('travelsearchresults');
            recommendationInfo.innerHTML = `<p>Failed to fetch recommendations. Please try again or <a href = "./contact.html">Contact Us</a> for help.</p>`;

    });
}  

function clearSearch() {
    document.getElementById('SearchBox').value = "";
    document.getElementById('travelsearchresults').innerHTML = "";
}
document.getElementById('SearchButton').addEventListener('click', travelSearch);
document.getElementById('ResetButton').addEventListener('click', clearSearch);
