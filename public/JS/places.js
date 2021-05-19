  const request = {
    location: new google.maps.LatLng(49.2578263,-123.1939434),
    query: document.getElementById('find_food').textContent,
    radius: '50000',
    type: 'restaurant'
};

const places = document.getElementById('places');
const service = new google.maps.places.PlacesService(places);

service.textSearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.filter(result => result.rating)
        .sort((a, b) => a.rating > b.rating ? -1 : 1)
        .forEach(result => {
            places.innerHTML += `<li>Name: ${result.name}   Address: ${result.formatted_address}    Rating: ${result.rating}</li>`;
        })
    }
});


