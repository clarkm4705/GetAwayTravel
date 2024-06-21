function travelSearch(event) {
    event.preventDefault();
    fetch(./travel_recommendation_api.json)
    .then(response => response.json())
    .then(data => {
        const recommentationInfo = document.getElementById('recommendationInfo');
        console.log(JSON.stringify(data));
        recommendationInfo.innerHTML = `<div><p>JSON results</p></div>`;
        
    })
    .catch(error => {
        console.error('Error fetching recommendations', error);
        const recommendationInfo = document.getElementById('recommendationInfo');
        recommendationInfo.innerHTML = `<p>Failed to fetch recommendations. Please try again or <a href = "./contact.html">Contact Us</a> for help.</p>`;

    });
}  
document.getElementById('navbarsearchform').addEventListener('submit', travelSearch);
