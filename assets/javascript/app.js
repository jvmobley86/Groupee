var ticketApikey = "PwjOqJ1ArxVSVKKV4d5it1cg9HXjOLXA"

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
      var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions/.json?apikey=PwjOqJ1ArxVSVKKV4d5it1cg9HXjOLXA&attractionId=" + follows;



      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        var artistId = response.artists[0].id;
        console.log(artistId);
      });


    });
  })});


  var artist = "Shawn Mendes"; //need to change this out to an array later on [];

  var queryURL = `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${ticketApikey}&keyword=` + artist;
  //string literals(new laguage to look up)
  //pull Artist name and get venue information
  
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      //attractionId
      var attractionId = (response._embedded.attractions[0].id)
  
      console.log(attractionId);
  
      var url = (response._embedded.attractions[0].url)
  
      //get artistId from url
      var artistId = url.split("artist/");
      console.log(artistId[1]);
  
  });


