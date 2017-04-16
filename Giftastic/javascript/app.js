// <div id = "animalButton">
// 	</div>
$(document).ready(function() 
{	
	var allAnimals = ["Donald Duck", "Bugs Bunny", "Daffy Duck", "Micky Mouse", "Yosemite Sam", "Road Runner", "Tom & Jerry", "Mini Mouse"]

	for (i = 0; i<allAnimals.length; i++) {
		var button = $("<button>");
		button.attr("class", "animalButton");
			

		var animal = allAnimals[i];
		console.log(animal);
	    button.text(animal);
	   $("#animal-buttons").append(button);
	}


	$(document).off('click','.animalButton').on('click', '.animalButton',function() {
		var animal = (this.innerHTML);
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
        	url: queryURL,
        	method: "GET"
        })
        
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          for (var i = 0; i < results.length; i++) {

          if (results[i].rating !== "r" && results[i].rating !== "pg-13" && results[i].rating !== "pg") {

           // Creating and storing a div tag
           var animalDiv = $("<div>");
           animalDiv.attr("class","animalDiv");

           // Creating a paragraph tag with the result item's rating
           var p = $("<p>").text("Rating: " + results[i].rating);

           // Creating and storing an image tag
           var animalImage = $("<img>");
           // Setting the src attribute of the image to a property pulled off the result item
           animalImage.attr("src", results[i].images.fixed_height_still.url);
           animalImage.attr("data-still", results[i].images.fixed_height_still.url);
           animalImage.attr("data-animate", results[i].images.fixed_height.url);
           animalImage.attr("data-state", "still");
           animalImage.attr("class", "gif");

             // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#animals").prepend(animalDiv);
     	 }
     	}

     }); 


    


     $(document).off('click', '.gif').on('click','.gif',function(){

   


	    	var state = $(this).attr("data-state");


	      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
	      // Then, set the image's data-state to animate
	      // Else set src to the data-still value
	      if (state === "still") {
	        $(this).attr("src", $(this).attr("data-animate"));
	        $(this).attr("data-state", "animate");
	      } else {
	        $(this).attr("src", $(this).attr("data-still"));
	        $(this).attr("data-state", "still");
	      }

     });

     $("#add-animal").click( function(event){
     	event.preventDefault();

   		alert("submit button pushed");
     	var newAnimal = $("#animal-input").val().trim();
  

     	var button = $("<button>");
		button.attr("class", "animalButton");		
	    button.text(newAnimal);
	   $("#animal-buttons").append(button);
     	


     });


     


  }); 



});