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
      });
    });
  });
  
var artists = [
    K8vZ9171lO7,
    K8vZ917pAdf,
    K8vZ917GtZV,
    K8vZ9174tq7,
    K8vZ917f9T7,
    K8vZ917u6-0,
    K8vZ91719tf,
    K8vZ91739Nf]
    
    var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?attractionId=" + artists + "&api_key=PwjOqJ1ArxVSVKKV4d5it1cg9HXjOLXA";

    $.ajax({
        url: queryURL,
        method: "GET",
        type: "json"

    })
        .then(function (response) {

            var artistId = response._embedded.attractions[0].id;
  console.log(artistId);
});
