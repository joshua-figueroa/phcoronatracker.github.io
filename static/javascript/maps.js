let legend = document.getElementById('legend-container');

function initMap() {
    // Styles a map in night mode.
    var location = {lat: 12.879721, lng: 121.774017};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 6,
        mapTypeId: 'terrain',
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'},{visibility: "off"}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'},{visibility: "off"}]},
            {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'},{visibility: "off"}]
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
        ],
        mapTypeControl: false
    });
    
    var infoWindow = new google.maps.InfoWindow();

    map.data.loadGeoJson('https://phcoronatracker.com/static/JSON/mapdata.json');  
    map.data.setStyle(function(feature) {
        var cases = feature.getProperty('cases');
        var color = 'green'
        if(cases > 0 && cases <= 10) {
            color = 'yellowgreen';
        } else if(cases > 10 && cases <= 50) {
            color = '#EEEE03'
        } else if(cases > 51 && cases <= 100) {
            color = 'orange'
        } else if(cases > 100 && cases <= 250) {
            color = 'orangered'
        } else if(cases > 250 && cases <= 500) {
            color = 'red'
        } else if(cases > 500 && cases <= 1000) {
            color = '#C21A84'
        } else if(cases > 1000) {
            color = 'purple'
        }
        return {
            strokeColor: 'white',
            strokeWeight: 0.5,
            strokeOpacity: 1,
            fillColor: color,
            fillOpacity: 1
        }
    });
    map.data.addListener('mouseover', function(event) {
        var feature = event.feature, cases = feature.getProperty('cases'), death = feature.getProperty('death'), rec = feature.getProperty('rec');
        if(cases == undefined) {
            cases = 0;
            death = 0;
            rec = 0;
        }
        var text = '<h6>' + feature.getProperty('NAME_1') + '</h6><span>Cases - ' + cases.toLocaleString() + '</span><br><span>Deaths - ' + death.toLocaleString() + '</span><br><span>Recoveries - ' + rec.toLocaleString() + '</span>';
        map.data.revertStyle();
        map.data.overrideStyle(feature, {strokeWeight: 2.5});
        infoWindow.setContent(text);
        infoWindow.setPosition(event.latLng);
        infoWindow.open(map);
    });
    map.data.addListener('mouseout', function(event) {
        map.data.revertStyle();
        infoWindow.close();
    });
    
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(legend);

    google.maps.event.addDomListener(window, "load", initMap);
}