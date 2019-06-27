function initMap(position, json) {
    // console.log("hello");
     console.log(json);
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: { lat:32.96, lng: -96.78 },
        zoom: 10
    });
    if (position!==undefined){
        for (var i = 0; i < json.page.size; i++) {
            addMarker(map, json._embedded.events[i]);
        }
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        var x = document.getElementById("location");
        x.innerHTML = "Location not found.";
    }
}
getLocation();


function showPosition(position) {
    var x = document.getElementById("location");
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    var LatLng = position.coords.latitude + "," + position.coords.longitude;


    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=eyAxFU6bJI5DbKGIOKnrAd38BP42m5kf&latlong=" + LatLng,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
             var e = document.getElementById("events");
            showEvents(json);
             initMap(position, json);
        },
        error: function (xhr, status, err) {
            console.log(err);
        }
    });

}

function showEvents(json) {
    for(var i=0; i<json.page.size; i++) {
      $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
    }
  }
  
function addMarker(map, event) {
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
        map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    console.log(marker);
}