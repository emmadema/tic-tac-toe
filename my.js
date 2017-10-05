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
function clickCells(){
	$('.cells').click(function(){
		if (playerTurn === "player_1") {
			playerTurn = "player_2";
			$(this).addClass('cat1');
			scoreP1.push($(this));
			console.log(scoreP1);
		} 
		else {
			playerTurn = "player_1";
			$(this).addClass('cat2');
			scoreP2.push($(this));
			console.log(scoreP2);
		}
		$(this).unbind("click"); //stops the player from being able to click again
		winnerCheck();
	});
}

clickCells();
//calls the click cells function


function winnerCheck() {
	for( rowNumber = 0; rowNumber < winner.length; rowNumber++){
		// console.log("Row Number is " + rowNumber);
		//go through each row
		var cellClass = $('#' + winner[rowNumber][0]).attr('class');
		//get the cell class of each value in each row
		if (cellClass.indexOf(' ') >= 0) {
		//checking to see if there is a space in the cellClass if the value is mor ethan -1 keep going
		} else {
			continue; // if there is no space go back to the start of the finction
		}
		var counter = 0;
		//creates a counter varibale for the cells
		for(cellNumber = 1; cellNumber < winner[rowNumber].length; cellNumber++){
			//
			// console.log("Cell number is " + winner[rowNumber][cellNumber]);
			var cellNum = winner[rowNumber][cellNumber];
			// console.log($('#' + cellNum));
			if (cellClass === $('#' + cellNum).attr('class')){
			//if the cell class of the first cell is equal to the cell class of the second cell add one to the counter
				counter++;
			}
			else {
			//if it is not equal break
				break;
			}	
		}

		if (counter === 2){
			alert('game over');
		// if the counter getds to 2 the game is over
		//the counter is at 2 beacuse we start with and initial one and then contuine through two more to comapre
		}
	}
}


//fill out for loops
//check if there is cat 1 at that number
//winner[i][j] <== looking at the `ith` array in `winner`, then the `jth` element of that array


//rest button for game - removes the classes added to the cells in the game board 
	$('.reset').click(function(){
		$('.cells').removeClass('cat1');
		//removes class of cat 1 from the cells
		$('.cells').removeClass('cat2');
		//removes class of cat 2 from the cells
		clickCells();		
		//restarts the click cells function
	});








