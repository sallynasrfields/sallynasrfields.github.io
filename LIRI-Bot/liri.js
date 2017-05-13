// Grabs data keys stored in file, keys.js and assigns to variable for usage with retrieveTweets() function.
var dataKeys = require("./keys.js");

//Grab twitter client object and assign to variable for usage with retrieveTweets() function.
var twitter = require('twitter');

//Grab spotify client object and assign to variable for usage with spotifyThis() function.
var spotify = require('spotify');

//Grab request client object and assign to variable for usage with movieThis() function.
var request = require('request');

//Grab fs client object and assign to variable for usage with doThis() function.
var command = require("fs");

//Grab third argument from command and assign to variable. This value will dictate the function to be called.
var functionCalled =  process.argv[2];


////////////////////////////////////////////////LOGIC STARTS HERE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// If statement is called when node liri.js my-tweets is enetered.
if (functionCalled == "my-tweets"){
  retrieveTweets();
}

// This will show your last 20 tweets and when they were created at in your terminal/bash window.
function retrieveTweets() {
	var client = new twitter(dataKeys.twitterKeys);
	var params = { screen_name: 'arisefields'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) { 	
		if (!error) {
			var data = []; //empty array to hold data
			for (var i = 0; i < tweets.length; i++) {
				data.push({
				'created at: ' : tweets[i].created_at,
				'Tweets: ' : tweets[i].text,
				'*******':"*********************************************",
				});
			}
			console.log(data);
		}
 	});
};

// If statement is called when node liri.js spotify-this-song '<song name here>' is entered
if (functionCalled == "spotify-this-song"){  
	var songName = "";
	songName = process.argv[3];
	spotifyThis(songName);
}

// This will function will display the following information about the song in your terminal/bash window
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
				'**************************************************************':"******************************************************************",
			});  
		}
		console.log(data);
	});
};



// If statement is called when statement node liri.js movie-this '<movie name here>' is entered
if (functionCalled == "movie-this"){  
	var movie = "";
	movie = process.argv[3];
	movieThis(movie);
}

// This function will output the following information to your terminal/bash window:
	//   * Title of the movie.
	//   * Year the movie came out.
	//   * IMDB Rating of the movie.
	//   * Country where the movie was produced.
	//   * Language of the movie.
	//   * Plot of the movie.
	//   * Actors in the movie.
	//   * Rotten Tomatoes URL.
	// and if the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
function movieThis(){
	if (movie === undefined) {
	movie = 'Mr.Nobody';
	};
	var url = 'http://www.omdbapi.com/?t=' + movie +'&y=&plot=long&tomatoes=true&r=json';
	request(url, function(error, body, data){
   		if (error){
     			console.log("Request has returned an error. Please try again.")
   		}
     	var response = JSON.parse(data);
		console.log("******************************")
		console.log("Movie title: " + response.Title);
		console.log("Release Year: " + response.Year);
		console.log("IMDB Rating: " + response.imdbRating);
		console.log("Country where filmed: " + response.Country);
		console.log("Language: " + response.Language);
		console.log("Movie Plot: " + response.Plot);
		console.log("Actors: " + response.Actors);
		console.log("Rotten Tomatoes URL: " + response.tomatoURL);
		console.log("******************************")
	});
};

// If statement is called when node liri.js do-what-it-says is enetered in terminal
if (functionCalled == "do-what-it-says"){
  doThis();
}

// Using the fs Node package, this function will take the text inside of random.txt and then use it to call one of the previously defined functions.
// In this case, it should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
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
