let citymap = {
    manila: {
        center: {lat: 14.599512, lng: 120.984222},
        cases: 211
    }, 
    rizal: {
        center: {lat: 14.6037, lng: 121.3084},
        cases: 12
    },
    bulacan: {
        center: {lat: 14.8527, lng: 120.8160},
        cases: 8
    },
    cavite: {
        center: {lat: 14.4791, lng: 120.8970},
        cases: 8
    }
};



function initMap() {
    // Styles a map in night mode.
    var location = {lat: 12.879721, lng: 121.774017};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 5,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
            },
            {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
            },
            {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
            },
            {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
            },
            {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
            },
            {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
            },
            {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
            },
            {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
            },
            {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
            }
        ]
    });

    for(var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].cases) * 2000
        });
    }
}