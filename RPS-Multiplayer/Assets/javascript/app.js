var config = {
  apiKey: " AIzaSyD7qrk3bKwxOBeDXM6ew6z-_x22XF6-3to",
  authDomain: "fir-presence.firebaseapp.com",
  databaseURL: "https://prs-mp.firebaseio.com",
  storageBucket: "fir-presence.appspot.com"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// -------------------------------------------------------------- (CRITICAL - BLOCK) --------------------------- //
// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {

  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#connected-viewers").html(snap.numChildren());
});

// ------------------------------------
// Initial Values
var playerOneWins = 0;
var playerOneName = "";
var playerOneLosses = 0;
var playerTwoWins = 0;
var playerTwoName = "";
var playerTwoLosses = 0;
var turn = 1;
var write2Messenger= "";
var choice = "";

//onpage load display name prompt, set playeronename as "Player one" & player two as two 

//Combat symbol and Messenger will already appear on page
//Player Instructions "Please submit name"
//wait for first player to type in Name
//assign player one values and push to firebase
//write player one name to page

//wait for second player to type in name
//assign player two values, assign turn value to 1 and push to firebase
//display score as 0:0


//onclick pone, if turn = 1
//push choice to firebase
//set turn, 2 & push to firebase
//set to player two visibily


//onclick ptwo, if turn =2
//push choice to firebase
//evaluate results and diplay score
//push new score to firebase
//wait a couple of seconds
//set turn to 1 & push to firebase
//set player one visibility