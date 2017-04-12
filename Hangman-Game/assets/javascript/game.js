


var gameWord="";
var spacesInWord;
var emptySpaceBoxes=[];
var allGuessedLetters=[];
var revealedLetters;
var guessesRemaining;
var gameWord2;
var wins=0;
var losses=0;
var allLetters;
var letterGuessed;
var remainString;
var directionString;


var gameStatus= document.getElementById ("status");
var letterContainer = document.getElementById('lettersChosen');
var letters = document.createElement("div");
letterContainer.append(letters);
var wordBox = document.getElementById('hold'); 	
var winLose=document.getElementById("win-lose");
var inWinLose=document.createElement('div');
var directions=document.getElementById("anyKey");
var remainStatus=document.getElementById("remain");







firstLetterGuessed = function()
{
	allLetters= "Letters Guessed: </br>" + letterGuessed;
	letters.innerHTML= allLetters;
}

lettersAlreadyGuessed = function()
{
	allLetters= allLetters + ", " + letterGuessed;
	letters.innerHTML= allLetters;
}

revealLetter = function()
{
	for (var i = 0; i < gameWord.length; i++) 
  	{
    	if (gameWord[i].toLowerCase()=== letterGuessed) 
    	{
    		emptySpaceBoxes[i].innerHTML = letterGuessed;
		
      		revealedLetters += 1;
      		gotOne();
   		 } 
  	}
}

adjustGuesses = function()
{
	var noGuessReduction="0";
	var lowCaseGameWord = gameWord.toLowerCase();
	for(s=0; s<gameWord.length; s++)
	{	

		if(lowCaseGameWord.charAt(s) == letterGuessed)
		var noGuessReduction = noGuessReduction + 1;
		// alert (noGuessReduction);
	}
    
    if (noGuessReduction == 0) 
    {	
    		    	
		guessesRemaining -= 1;

		guessesRemain();
		gameStatusDisplay();
		sorry();	
  	} 
  	else 
	{	  			
		 gameStatusDisplay();
	}
}

document.onkeypress = function(event) 
{ 	
	
	if ((revealedLetters + spacesInWord === gameWord.length)|| (guessesRemaining < 1))
	{
		directionString="Pick a Letter";
		directions.innerHTML = directionString;
		resetLetterSpaces();
		play();
	

	
	}

	else if (event.keyCode==13)
	{
		directionString="Pick a Letter";
		directions.innerHTML = directionString;
	}

	else
	{
		
		directionString="";
		directions.innerHTML = directionString;
		guessesRemain();
		letterGuessed = event.key.toLowerCase();
		var reg = /[a-zA-Z]/i;
	    var n = letterGuessed.search(reg);

	   

		 if (( n == 0 ) && ( event.keyCode !== 13) )
		{ 		
			if (allGuessedLetters.length == 0)
			{	
				directionString="";
				directions.innerHTML=directionString;
				allGuessedLetters.push(letterGuessed);
			    firstLetterGuessed();	
			    revealLetter();	
			    adjustGuesses();			
			}
			
			else 
			{	
				// directionString="";
				// directions.innerHTML=directionString;
				var duplicate=0;
				for (var i= 0; i<allGuessedLetters.length; i++)
				{					
					if (allGuessedLetters[i].toLowerCase() === letterGuessed)
					{	
						duplicate = duplicate +1;
					}
				}			

				if (duplicate === 0)
				{
					// directionString="";
					// directions.innerHTML=directionString;

					allGuessedLetters.push(letterGuessed);
					lettersAlreadyGuessed();
					revealLetter();	
					adjustGuesses();					
			  	}
			  	else
			  	{
			  		alreadyPicked();
			  		winloseSong();
			  	}
			}				
		}
		else
		{
			notALetter();
		}
	}
}	





gameStatusDisplay = function () 
{
	

	if (guessesRemaining < 1) 
    {
    	 for (var y = 0; y < gameWord.length; y++) 
		 {   
		    // emptySpaceBoxes[y].innerHTML="";
		    emptySpaceBoxes[y].innerHTML=gameWord[y]
		  } 

        
		losses++;
		emptySpaceBoxes=[];
		allLetters="";
		letters.innerHTML= allLetters;
		winLose.appendChild(inWinLose);
		remainString="";
		remainStatus.innerHTML=remainString;
		// playSong();
		inWinLose.innerHTML="Charade You Are!"
		directions.innerHTML="Press Enter to Start";

		gameStatus.innerHTML = "Games Won: &nbsp;" + wins + 
    						   "&nbsp; &nbsp; &nbsp; &nbsp;	 &#9679; &nbsp; &nbsp; &nbsp; Games Lost: &nbsp;" + losses;
    
      
    }
	else if (revealedLetters + spacesInWord === gameWord.length) 
  	{	
  		for (var y = 0; y < gameWord.length; y++) 
		 {   
		
		    emptySpaceBoxes[y].innerHTML=gameWord[y]
		  } 
		  		wins++;	  		
		allLetters="";
		letters.innerHTML= allLetters;
	    winLose.appendChild(inWinLose);
	    remainString="";
		remainStatus.innerHTML=remainString;
  		inWinLose.innerHTML="Shine On!"
  		// playSong();
  		directions.innerHTML="Press Enter to Start";
    	gameStatus.innerHTML = "Games Won: &nbsp;" + wins + 
    						   "&nbsp; &nbsp; &nbsp; &nbsp;	 &#9679; &nbsp; &nbsp; &nbsp; Games Lost: &nbsp;" + losses;

  	}
       
    else
   {
   	
	
	
   	 
     gameStatus.innerHTML = "Games Won: &nbsp;" + wins + 
    						   "&nbsp; &nbsp; &nbsp; &nbsp;	 &#9679; &nbsp; &nbsp; &nbsp; Games Lost: &nbsp;" + losses;
  }
 }



setLetterSpaces = function () 
{                                                                   //gives element game
	var wordSpace = document.createElement('ul');	
	console.log(gameWord2);											//creates element <ul>
	for (var i = 0; i < gameWord2.length; i++)
	 {

		wordSpace.setAttribute('id', 'wordSpace'); 			//sets ID of element <ul>
		var letterSpace = document.createElement('li');           //creates element <li> 
		letterSpace.setAttribute('class', 'letterSpace');	//sets class of element <li> to" letterBox
		if (gameWord2.charAt(i) === "-") 
		{
			letterSpace.innerHTML = "-";			//writes "-" to all spaces in <li> elements
			spacesInWord += 1;
		}
		else 
		{
			letterSpace.innerHTML = "_";			//writes "_" to all letters in <li> element
		}
	
		emptySpaceBoxes.push(letterSpace); 
		wordSpace.appendChild(letterSpace);		//assigns<li>_</li> or <li>-</li>  to array element
	}		
	wordBox.appendChild(wordSpace);
}

play = function () {

	
  	
	gameWord = "Another Brick in the Wall";
	var wordCatalogue=[
	"The Great Gig in the Sky",
	"Money",
	"Us and Them",
	"Brain Damage",
	"Eclipse",
	"Another Brick in the Wall",
	"Mother",
	"Goodbye Blue Sky",
	"One of my Turns",
	"Hey You",
	"Comfortably Numb",
	"The Trial",
	"Shine On You Crazy Diamond",
	"Have a Cigar",
	"Wish You Were Here"]
    gameWord = wordCatalogue[Math.floor(Math.random() * wordCatalogue.length)];
    console.log(gameWord);
    gameWord2 = gameWord.replace(/\s/g, "-");
    console.log(gameWord2);
    console.log(gameWord);
    emptySpaceBoxes = [];
    guessesRemaining = 10;
    spacesInWord= 0;
    revealedLetters = 0;
    allGuessedLetter=[];
    allLetters="";
    setLetterSpaces();  
    gameStatusDisplay();
  }

  guessesRemain = function()
{
	remainString="Guesses Left: " + guessesRemaining;
	remainStatus.innerHTML= remainString;
   	 
}

  directions.innerHTML="Press Enter to Start";
  play();


notALetter = function()
{
		var notALetter = new Audio('assets/audio/notALetter.m4a');
        notALetter.play();
}

gotOne= function()
{
		var totalRevealed = revealedLetters + spacesInWord;
		console.log(totalRevealed);
		if (totalRevealed < gameWord.length) 
		{
		var gotOne= new Audio('assets/audio/gotOne.m4a');
        gotOne.play();
    	}

    	else
    	{
    		var shineOn = new Audio('assets/audio/shineOn.m4a');
        shineOn.play();
    	}
}

alreadyPicked = function()
{
	var alreadyPicked = new Audio('assets/audio/alreadyPicked.m4a');
    alreadyPicked.play();
}

sorry = function()
{
	if (guessesRemaining > 0)
	{
		var sorry = new Audio('assets/audio/sorry.m4a');
		sorry.play();
	}

	else if (guessesRemaining < 1) 
	{
    	var charadeYouAre = new Audio('assets/audio/charadeYouAre.m4a');
        charadeYouAre.play();    	
	}
}
resetLetterSpaces = function()
{
	wordBox.removeChild(wordSpace);
	winLose.removeChild(inWinLose);
	emptySpaceBoxes=[];
	allGuessedLetters=[];
	allLetters="";
	letters.innerHTML= allLetters;
}
