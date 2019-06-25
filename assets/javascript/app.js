
// var zipcode = $('currentZip')

// $(document).on('click', '.btn', function () {
// //     var zipcode = $(this).attr("data-zipcode");

// var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?q="
// zipcode + "&apikey=eyAxFU6bJI5DbKGIOKnrAd38BP42m5kf";

// $.ajax({
//     method:"GET",
//     url: queryURL,
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   });
// // });

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         var x = document.getElementById("location");
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }


// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             x.innerHTML = "User denied the request for Geolocation."
//             break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML = "Location information is unavailable."
//             break;
//         case error.TIMEOUT:
//             x.innerHTML = "The request to get user location timed out."
//             break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML = "An unknown error occurred."
//             break;
//     }
// }
// function showPosition(position) {
//     var x = document.getElementById("location");
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude; 
//     var latlon = position.coords.latitude + "," + position.coords.longitude;


//     $.ajax({
//       type:"GET",
//       url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz&latlong="+latlon,
//       async:true,
//       dataType: "json",
//       success: function(json) {
//                   console.log(json);
//                   var e = document.getElementById("events");
//                   e.innerHTML = json.page.totalElements + " events found.";
//                   showEvents(json);
//                   initMap(position, json);
//                },
//       error: function(xhr, status, err) {
//                   console.log(err);
//                }
//     });

// }
// function showEvents(json) {
//     for(var i=0; i<json.page.size; i++) {
//       $("#events").append("<p>"+json._embedded.events[i].name+"</p>");
//     }
//   }
  
  
//   function initMap(position, json) {
//     var mapDiv = document.getElementById('map');
//     var map = new google.maps.Map(mapDiv, {
//       center: {lat: position.coords.latitude, lng: position.coords.longitude},
//       zoom: 10
//     });
//     for(var i=0; i<json.page.size; i++) {
//       addMarker(map, json._embedded.events[i]);
//     }
//   }
  
//   function addMarker(map, event) {
//     var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//       map: map
//     });
//     marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
//     console.log(marker);
//   }

=======
var artist = "ShawnMendes"; //need to change this out to an array later on [];
var ticketApikey = "eyAxFU6bJI5DbKGIOKnrAd38BP42m5kf"
var queryURL = `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${ticketApikey}&keyword=` + artist;

//string literals(new laguage to look up)




//pull Artist name and get venue information

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
    // var artistId = response._embedded.attractions[0].id

});

// trim venue information to cities near Dallas


//order nearest to furthest by date

//bring it to UI with ticketmaster link