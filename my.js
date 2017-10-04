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
var scoreP1 = [];
var scoreP2 = [];
var winner = [
[1,2,3], 
[4,5,6],
[7,8,9],
];
var counter = 0;

//when a player clicks they are assigned a class of cat 1 and the first cat pic appears then each turn alternates until all cells are full
$('.cells').click(function(){
	if (playerTurn === "player_1") {
		playerTurn = "player_2";
		$(this).addClass('cat1');
		scoreP1.push($(this));
		console.log(scoreP1);
		//if (scoreP1 === ($('topLeft').attr('id') === "topLeft") && ($('topMiddle').attr('id') === "topMiddle") && ($('topRight').attr('id') === "topRight")) {
		//	console.log("Player 1 wins");
		//}
	} 
	else {
		playerTurn = "player_1";
		$(this).addClass('cat2');
		scoreP2.push($(this));
		console.log(scoreP2);
		//if (scoreP2[0].attr('id') === $('#topLeft') && scoreP2[1].attr('id') === $('#topMiddle') && scoreP2[2].attr('id') === $('#topRight')) {
		//	console.log("Player 2 wins");
		//}
	}
	$(this).unbind("click"); //stops the player from being able to click again

});

function gameWinner() {
	for (var i = 0; i < winner.length; i++) {
		counter = 0;
		for (var j = 0; j < winner[i].length; j++) 
			if(playerTurn.indexOf(winner[i][j]) !== -1) { 
        		counter++;
			} if (counter === 3) {
				alert(playerTurn + " wins!");
			}	
	}		
}

console.log(playerTurn);

gameWinner();

//fill out for loops
//check if there is cat 1 at that number
//winner[i][j] <== looking at the `ith` array in `winner`, then the `jth` element of that array


//rest button for game - removes the classes added to the cells in the game board 
	$('.reset').click(function(){
		$('.cells').removeClass('cat1');
		$('.cells').removeClass('cat2');		
	});








