
$('#twitter-button').on('click', function () {
  // Initialize with your OAuth.io app public key
  OAuth.initialize('g9j5u5tf85eLD996yMLho6dGHb0');
  // Use popup for OAuth
  OAuth.popup('twitter').then(twitter => {

    twitter.get('/1.1/friends/list.json?').then(data => {
      window.location.href = "main.html";


      var follows = data.users
      for (var i = 0; i < follows.length; i++) {

        console.log(follows[i].name);
      }
      var follows = data.users[i].name //need to change this out to an array later on [];
      var ticketApikey = "PwjOqJ1ArxVSVKKV4d5it1cg9HXjOLXA"
      var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions/.json?apikey=PwjOqJ1ArxVSVKKV4d5it1cg9HXjOLXA&attractionId=" + follows;


      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        var artistId = response.artists[0].id;
        console.log(artistId);
      });


    });
  });


var artist = "Shawn Mendes"; //need to change this out to an array later on [];

var queryURL = `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${ticketApikey}&keyword=` + artist;
//string literals(new laguage to look up)
//pull Artist name and get venue information

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response._embedded.attractions[0].id);
  // var artistId = response._embedded.attractions[0].id

});

});




// function initMap(position, json) {
  
//   var mapDiv = document.getElementById('map');
//   var map = new google.maps.Map(mapDiv, {
//     center: { lat: 32.96, lng: -96.78 },
//     zoom:10
//   });
//   if (position !== undefined) {
//     for (var i = 0; i < json.page.size; i++) {
//       addMarker(map, json._embedded.events[i]);
//     }
//   }
//   //google.maps.event.addDomListener(window, 'load', initialize);
//   //google.maps.event.addListener(marker, 'click', function() {console.log(marker.title)}); 
// }

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     var x = document.getElementById("location");
//     x.innerHTML = "Location not found.";
//   }
// }
// getLocation();


// function showPosition(position) {
//   $("#location").text("Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude)
//   var LatLng = position.coords.latitude + "," + position.coords.longitude;


//   $.ajax({
//     type: "GET",
//     url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=eyAxFU6bJI5DbKGIOKnrAd38BP42m5kf&latlong=" + LatLng,
//     async: true,
//     dataType: "json",
//     success: function (json) {
//       console.log(json);
//       var e = document.getElementById("events");
//       showEvents(json);
//       initMap(position, json);
//     },
//     error: function (xhr, status, err) {
//       console.log(err);
//     }
//   });

// }

// function showEvents(json) {
//   for (var i = 0; i < json.page.size; i++) {
//     $("#events").append($("<p>").text(json._embedded.events[i].name));
//   }
// }

// function addMarker(map, event) {
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//     map: map,
//     title: "hi there"
//   });
//   marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
//   var infowindow = new google.maps.InfoWindow({
//     content: marker.title
//   });
//   console.log(marker);
//   google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker) });
// }





