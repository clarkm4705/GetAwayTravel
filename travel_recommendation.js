function travelSearch(event) {
    event.preventDefault();
    fetch(./travel_recommendation_api.json)
    .then(response => response.json())
    .then(data => {
        const recommentationInfo = document.getElementById('recommendationInfo');
        recommendationInfo.innerHTML = `...`;
        
    })
    .catch(error => {
        console.error('Error fetching recommendations', error);
        const recommendationInfo = document.getElementById('recommendationInfo');
        recommendationInfo.innerHTML = `<p>Failed to fetch recommendations. Please try again.</p>`;

    });
}  
document.getElementById('navbarsearchform').addEventListener('submit', travelSearch);
