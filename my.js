//create a working tic-tac-toe board -Done
//when a section is clicked show X or O randomly for each 9 sections -Done
//create constructor functions for your code- dont let it change your function -Done

//Solution should use ONLY jQuery or vanilla JavaScript - not some combination thereof -Done
//Users should see a 3x3 grid for the tic-tac-toe board -Done
//A user should be able to click on different squares to make a move -Done
//Every click will alternate between marking an X and O -Done
//Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors (either background or text--both is better)-Done but with cats
//Add a reset button that will clear the contents of the board  -Done!
//Deploy your game online, using GitHub pages. If you're not sure how to do this, refer back to the earlier GitHub lesson.

//If I had more time I would:
//show and style the tokens for each playe below the board
//allow players to enter their name
//create an alert for each player to go


console.log("hello");


var playerTurn = "player_1";


//when a player clicks they are assigned a class of cat 1 and the first cat pic appears then each turn alternates until all cells are full
	$('.cells').click(function(){
		if (playerTurn === "player_1") {
			playerTurn = "player_2";
			$(this).addClass('cat1');
		} else {
			playerTurn = "player_1";
			$(this).addClass('cat2');
		}
		$(this).unbind("click"); //stops the player from being able to click again
	});



//rest button for game - removes the classes added to the cells in the game board 
	$('.reset').click(function(){
		$('.cells').removeClass('cat1');
		$('.cells').removeClass('cat2');		
	});

// //#topMiddle
// //when user clicks randomly select x or o then stop depsnging on who click

// //$('#img1', '#img2').on("click", function(){
// //	$(this).append("<img src ='https://orig00.deviantart.net/57ab/f/2011/157/7/0/poptart_cat_journal_doll_by_yellowfangofstarclan-d3i8v6f.gif'/>");
// //	console.log("click 2");
// //});

// //#topRight
// //when user clicks randomly select x or o then stop depsnding on who clcick

// //$('.cells').click(function(){

// //	console.log("click 3");
// });


// //#middleLeft
// //when user clicks randomly select x or o then stop

// $('#middleLeft').click(function(){
// 	console.log("click 4");
// });

// //#middle
// //when user clicks randomly select x or o then stop
// $('#middle').click(function(){
// 	console.log("click 5");
// });


// //#middleRight
// //when user clicks randomly select x or o then stop
// $('#middleRight').click(function(){
// 	console.log("click 6");
// });


// //#bottomLeft
// //when user clicks randomly select x or o then stop
// $('#bottomLeft').click(function(){
// 	console.log("click 7");
// });


// //#bottomMiddle
// //when user clicks randomly select x or o then stop
// $('#bottomMiddle').click(function(){
// 	console.log("click 8");
// });

// //#bottomRight
// //when user clicks randomly select x or o then stop

// $('#bottomRight').click(function(){
// 	console.log("click 9");
// });







