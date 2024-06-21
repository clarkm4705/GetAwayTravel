function travelSearch(event) {
    event.preventDefault();
    const searchString = document.getElementById('SearchBox');
    console.log(searchString.toLowerCase());
    
    fetch(./travel_recommendation_api.json)
    .then(response => response.json())
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
document.getElementById('navbarsearchform').addEventListener('submit', travelSearch);
