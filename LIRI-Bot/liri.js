// the code you need to grab the data from keys.js. Then store the keys in a variable.

var dataKeys = require("./keys.js");

var twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var command = require("fs");

var functionCalled =  process.argv[2];






console.log(functionCalled);


if (functionCalled == "my-tweets")
{
  retrieveTweets();
}



// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.

function retrieveTweets() {

var client = new twitter(dataKeys.twitterKeys);



  var params = { screen_name: 'arisefields'};
  //client.get('statuses/user_timeline', {q: 'arisefields'}, function(error, tweets, response) {

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
 //console.log(tweets);
 
    if (!error) {
      var data = []; //empty array to hold data
      for (var i = 0; i < tweets.length; i++) {
        data.push({
            'created at: ' : tweets[i].created_at,
            'Tweets: ' : tweets[i].text,
        });
      }
      console.log(data);
  
    }
 });
};



if (functionCalled == "spotify-this-song")
{
  
  var songName = "";
  songName = process.argv[3];
  spotifyThis(songName);
}

// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to

// "The Sign" by Ace of Base

function spotifyThis(songName) {



  if (songName === undefined) {
    songName = 'the sign';
  };

  console.log("inspotify function");

  spotify.search({ type: 'track', query: songName }, function(err, data) {

 
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }

    var albums = data.tracks.items;
    var data = []; 




    for (var i = 0; i < albums.length; i++) {
      data.push({
       "Artist":              albums[i].album.artists[0].name,
        'Song Name':          albums[i].name,
        'Preview Song URL: ': albums[i].preview_url,
        'Album: ':            albums[i].album.name,
        '*******':"*********************************************",
       } );
  
    }
    console.log(data);

   });
};



if (functionCalled == "movie-this")
{
  
  var movie = "";
  movie = process.argv[3];
  movieThis(movie);
}

// node liri.js movie-this '<movie name here>'

// This will output the following information to your terminal/bash window:

//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
//   * Rotten Tomatoes URL.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

function movieThis(){

  if (movie === undefined) {
    movie = 'Mr.Nobody';
  };


var url = 'http://www.omdbapi.com/?t=' + movie +'&y=&plot=long&tomatoes=true&r=json';
request(url, function(error, body, data){

 // console.log(body);

   if (error)
   {
     console.log("Request has returned an error. Please try again.")
   }

     var response = JSON.parse(data);

   console.log("Movie title: " + response.Title);
   console.log("Release Year: " + response.Year);
   console.log("IMDB Rating: " + response.imdbRating);
   console.log("Country where filmed: " + response.Country);
   console.log("Language: " + response.Language);
   console.log("Movie Plot: " + response.Plot);
   console.log("Actors: " + response.Actors);
   console.log("Rotten Tomatoes URL: " + response.tomatoURL);


});
};

if (functionCalled == "do-what-it-says")
{
  doThis();
}

function doThis(){

  command.readFile("random.txt", "utf8", function(error, data) {
	    if(error){

     		console.log(error);

     	}

      else {

            argList = data.split(',');
            functionCalled = argList[0];
            parameter = argList[1];

            if (functionCalled == "my-tweets"){
                
                retrieveTweets();

            }

            if (functionCalled == "spotify-this-song"){
              
                songName = parameter;
                spotifyThis(songName);

            }

            if (functionCalled == "movie-this"){
                
                movie = parameter;
                movieThis(movie);

            }
       }
  });

};



// node liri.js do-what-it-says
//spotify-this-song,"I Want it That Way"

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.



