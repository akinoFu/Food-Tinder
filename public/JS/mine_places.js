// REFERENCE: https://github.com/flowforfrank/places/blob/master/places.js

const request = {
    // using the coordinates of vancouver
    location: new google.maps.LatLng(49.2578263,-123.1939434),
    radius: 200,
    type: ['restaurant']
    //food: [document.getElementById('find_food').textContent]
};

const results = [];
const places = document.getElementById('places');
const service = new google.maps.places.PlacesService(places);

const callback = (response, status) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        results.push(...response);
    } else {
        displayResults();
    }
}

const displayResults = () => {
    results.filter(result => result.rating)
            .sort((a, b) => a.rating > b.rating ? -1 : 1)
            .forEach(result => {
                places.innerHTML += `<li>${result.name} Rating:${result.rating}</li>`;
            });
}

service.nearbySearch(request, callback);