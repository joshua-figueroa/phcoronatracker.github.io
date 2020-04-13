let citymap = {
    manila: {
        center: {lat: 14.599512, lng: 120.984222},
        cases: 3510
    }, 
    rizal: {
        center: {lat: 14.6037, lng: 121.3084},
        cases: 270
    },
    bulacan: {
        center: {lat: 14.8527, lng: 120.8160},
        cases: 92
    },
    cavite: {
        center: {lat: 14.4791, lng: 120.8970},
        cases: 176
    },
    laguna: {
        center: {lat: 14.2691, lng: 121.4113},
        cases: 201
    },
    batangas: {
        center: {lat: 13.7565, lng: 121.0583},
        cases: 73
    },
    cagayan: {
        center: {lat: 17.6132, lng: 121.7270},
        cases: 14
    },  
    davao_sur: {
        center: {lat: 6.7663, lng: 125.3284},
        cases: 76
    }, 
    iloilo: {
        center: {lat: 10.7202, lng: 122.5621},
        cases: 20
    }, 
    isabela: {
        center: {lat: 16.9754, lng: 121.8107},
        cases: 9
    }, 
    lanao_sur: {
        center: {lat: 7.8232, lng: 124.4198},
        cases: 8
    }, 
    negros_occ: {
        center: {lat: 10.2926, lng: 123.0247},
        cases: 10
    }, 
    pampanga: {
        center: {lat: 15.0794, lng: 120.6200},
        cases: 46
    }, 
    benguet: {
        center: {lat: 16.4023, lng: 120.5960},
        cases: 19
    }, 
    bataan: {
        center: {lat: 14.6417, lng: 120.4818},
        cases: 35
    }, 
    la_union: {
        center: {lat: 16.6159, lng: 120.3209},
        cases: 13
    }, 
    negros_or: {
        center: {lat: 9.6282, lng: 122.9888},
        cases: 7
    }, 
    nueva_ecija: {
        center: {lat: 15.5784, lng: 121.1113},
        cases: 42
    }, 
    abra: {
        center: {lat: 17.5951, lng: 120.7983},
        cases: 3
    }, 
    aklan: {
        center: {lat: 11.8166, lng: 122.0942},
        cases: 7
    }, 
    capiz: {
        center: {lat: 11.3889, lng: 122.6277},
        cases: 4
    }, 
    camsur: {
        center: {lat: 13.5250, lng: 123.3486},
        cases: 8
    }, 
    cebu: {
        center: {lat: 10.3157, lng: 123.8854},
        cases: 35
    }, 
    cotabato_city: {
        center: {lat: 7.2047, lng: 124.2310},
        cases: 6
    }, 
    davao_oro: {
        center: {lat: 7.5125, lng: 126.1763},
        cases: 2
    }, 
    lanao_norte: {
        center: {lat: 7.8722, lng: 123.8858},
        cases: 6
    }, 
    oriental_mindoro: {
        center: {lat: 13.0565, lng: 121.4069},
        cases: 6
    }, 
    sulatan_kudarat: {
        center: {lat: 6.5069, lng: 124.4198},
        cases: 3
    },
    tarlac: {
        center: {lat: 15.4755, lng: 120.5963},
        cases: 25
    },
    quezon: {
        center: {lat: 13.9414, lng: 121.6234},
        cases: 27
    },
    zamboanga_sur: {
        center: {lat: 7.8383, lng: 123.2967},
        cases: 10
    },
    davao_norte: {
        center: {lat: 7.5618, lng: 125.6533},
        cases: 11
    },
    nueva_viscaya: {
        center: {lat: 16.3301, lng: 121.1710},
        cases: 5
    },
    davao_oriental: {
        center: {lat: 7.3172, lng: 126.5420},
        cases: 3
    },
    pangasinan: {
        center: {lat: 15.8949, lng: 120.2863},
        cases: 32
    },
    zambales: {
        center: {lat: 15.5082, lng: 119.9698},
        cases: 17
    },
    marinduque: {
        center: {lat: 13.4767, lng: 121.9032},
        cases: 4
    },
    south_cotabato: {
        center: {lat: 6.3358, lng: 124.7741},
        cases: 4
    },
    albay: {
        center: {lat: 13.1775, lng: 123.5280},
        cases: 11
    },
    samar: {
        center: {lat: 11.5795, lng: 124.9748},
        cases: 3
    },
    misamis_occ: {
        center: {lat: 8.3375, lng: 123.7071},
        cases: 2
    },
    ilocos_sur: {
        center: {lat: 17.2279, lng: 120.5740},
        cases: 1
    },
    ilocos_norte: {
        center: {lat: 18.1647, lng: 120.7116},
        cases: 3
    },
    romblon: {
        center: {lat: 12.5778, lng: 122.2691},
        cases: 1
    },
    catanduanes: {
        center: {lat: 13.7089, lng: 124.2422},
        cases: 1
    },
    antique: {
        center: {lat: 11.3806, lng: 122.0635},
        cases: 1
    },
    camiguin: {
        center: {lat: 9.1732, lng: 124.7299},
        cases: 1
    },
    bukidnon: {
        center: {lat: 8.0515, lng: 124.9230},
        cases: 1
    },
    agusan_norte: {
        center: {lat: 8.9456, lng: 125.5319},
        cases: 1
    },
    maguindanao: {
        center: {lat: 6.9423, lng: 124.4198},
        cases: 1
    },
    cotabato: {
        center: {lat: 7.204667, lng: 124.231044},
        cases: 3
    }
};

function initMap() {
    // Styles a map in night mode.
    var location = {lat: 12.879721, lng: 121.774017};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 6,
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