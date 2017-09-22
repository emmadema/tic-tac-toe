//create a working tic-tac-toe board
//when a section is clicked show X or O randomly for each 9 sections
//create constructor functions for your code- dont let it change your function

//Solution should use ONLY jQuery or vanilla JavaScript - not some combination thereof
//Users should see a 3x3 grid for the tic-tac-toe board
//A user should be able to click on different squares to make a move
//Every click will alternate between marking an X and O
//Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors (either background or text--both is better)
//Add a reset button that will clear the contents of the board
//Deploy your game online, using GitHub pages. If you're not sure how to do this, refer back to the earlier GitHub lesson.

console.log("hello");
//player X goes first
//establish who is going first and alert the user

//if (turn) {
//	game.player_1.playerMove();
//} else {
//	game.player_2.playerMove();
//}
//turn = !turn;


var playerTurn = "player_1";

//#topLeft 
//when user clicks randomly select x or o then stop depending on who clicks
//first access #topLeft id in th under tr under tb under table


	$('.cells').click(function(){
		if (playerTurn === "player_1") {
			playerTurn = "player_2";
			$(this).addClass('cat1');
		} else {
			playerTurn = "player_1";
			$(this).addClass('cat2');
		}
		$(this).unbind("click");

		$('.reset').click(function(){
			$(this).removeClass('cat1');		
		});
	});

//button click = 
//remove the class back to just cells
//reset
//$("button").click(resetFun);



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







