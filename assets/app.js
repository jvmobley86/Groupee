var artist = "ShawnMendes"; //need to change this out to an array later on [];
var ticketApikey = "eyAxFU6bJI5DbKGIOKnrAd38BP42m5kf"
var queryURL = `https://app.ticketmaster.com/discovery/v2/attractions/.json?apikey=${ticketApikey}&keyword=` + artist;
//string literals(new laguage to look up)




//pull Artist name and get venue information

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response.data);
    // var artistId = response._embedded.attractions[0].id

});


// trim venue information to cities near Dallas


//order nearest to furthest by date

//bring it to UI with ticketmaster link

