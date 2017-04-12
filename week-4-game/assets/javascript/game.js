$(document).ready(function() 
   {

   	var totalVariable=0;
   	var netVariable;
   	var wins=0;
   	var losses=0;
   	var clickSwitch="on";



	var questNum=Math.floor(Math.random()*101+19);

   	$("#questNum").text(questNum);
   	var crystalNum1=Math.floor(Math.random()*11+1);
   	var crystalNum2=Math.floor(Math.random()*11+1);
   	var crystalNum3=Math.floor(Math.random()*11+1);
   	var crystalNum4=Math.floor(Math.random()*11+1);
   	$("#crystals1").text(crystalNum1);
   	$("#crystals2").text(crystalNum2);
   	$("#crystals3").text(crystalNum3);
   	$("#crystals4").text(crystalNum4);
   	$("#endStatus").text("Click Away!")
	$("#wins").text(wins);
	$("#losses").text(losses);
	$("#total").text(totalVariable);




	$("#crystals1").click(function(){
		if (clickSwitch === "on")
		{
		totalVariable = totalVariable + crystalNum1;
		netVariable = questNum - totalVariable;
		$("#total").text(totalVariable);
		gameStatus();
		}
	});

		$("#crystals2").click(function(){
			if (clickSwitch === "on")
			{
		totalVariable = totalVariable + crystalNum2;
		netVariable = questNum - totalVariable;
		$("#total").text(totalVariable);
		gameStatus();
			}
	});


	$("#crystals3").click(function(){
			if (clickSwitch ==="on")
			{
		totalVariable = totalVariable + crystalNum2;
		netVariable = questNum - totalVariable;
		$("#total").text(totalVariable);
		gameStatus();
			}
	});

	$("#crystals4").click(function(){
			if (clickSwitch ==="on")
			{
		totalVariable = totalVariable + crystalNum2;
		netVariable = questNum - totalVariable;
		$("#total").text(totalVariable);
		gameStatus();
			}
	});

	function gameStatus(){
		if(netVariable===0){
			// alert("youwin");
			youWin();
		}
		else if (netVariable<0){
			// alert("youlose");
			youLose();
		}
	}
			
	function youWin(){
		wins++;
		// winningsound
		$("#total").text(totalVariable);
		$("#endStatus").text("You Win! Press <Enter> to start again.")
		$("#wins").text(wins);
		$("#losses").text(losses);
		clickSwitch="off";

	
			$(document).keypress(function(e) {
		    if(e.which == 13) {
		    	clickSwitch="on";
				netVariable=0;
				totalVariable=0;
				questNum=0;
				crystalNum1=0;
				crystalNum2=0;
				crystalNum3=0;
				crystalNum4=0;
				$("#total").text(totalVariable);
			
				questNum=Math.floor(Math.random()*101+19);
			   	$("#questNum").text(questNum);
			   	crystalNum1=Math.floor(Math.random()*11+1);
			   	crystalNum2=Math.floor(Math.random()*11+1);
			   	crystalNum3=Math.floor(Math.random()*11+1);
			   	crystalNum4=Math.floor(Math.random()*11+1);
			   	$("#crystals1").text(crystalNum1);
			   	$("#crystals2").text(crystalNum2);
			   	$("#crystals3").text(crystalNum3);
			   	$("#crystals4").text(crystalNum4);
			   	$("#endStatus").text("Click Away!");
			   }
		});
	}	
	
	function youLose(){
		losses++;
		clickSwitch="off";
		// winningsound
		$("#total").text(totalVariable);
		$("#endStatus").text("You Lose! Press <Enter> to start again.");
		$("#wins").text(wins);
		$("#losses").text(losses);
		$(document).keypress(function(e) {
		    if(e.which == 13) {
		    	clickSwitch="on";
				netVariable=0;
				totalVariable=0;
				questNum=0;
				crystalNum1=0;
				crystalNum2=0;
				crystalNum3=0;
				crystalNum4=0;
				$("#total").text(totalVariable);
			
				questNum=Math.floor(Math.random()*101+19);
			   	$("#questNum").text(questNum);
			   	crystalNum1=Math.floor(Math.random()*11+1);
			   	crystalNum2=Math.floor(Math.random()*11+1);
			   	crystalNum3=Math.floor(Math.random()*11+1);
			   	crystalNum4=Math.floor(Math.random()*11+1);
			   	$("#crystals1").text(crystalNum1);
			   	$("#crystals2").text(crystalNum2);
			   	$("#crystals3").text(crystalNum3);
			   	$("#crystals4").text(crystalNum4);
			   	$("#endStatus").text("Click Away!");
			   }
		});
	}	




	







   });		
		
