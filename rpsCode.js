
//if the html pages and the location stuff doesnt work, use the rpsCode.html file instead
/*
Programed by Connor Baglin
2/28/2020
P.4
Rock, Paper, Scissors
todo try class
*/
//variables
let a;
let b;
let c;
let win;
let playerScore = 0;
let aiScore = 0;
let buttonPush;
let repeats = 0;

let tell=function() {
	sAlert(playerScore, aiScore);
}  
//random number generator
let numGen=function() {
	min = Math.ceil(0);
	max = Math.floor(2);
	return Math.floor(Math.random()*(max-min+1));
}
//choice
let rock=function(){
		buttonPush=0;
		main();
	}
let paper=function(){
	buttonPush=1;
	main();
}
let scissors=function(){
		buttonPush=2
		main();
	}
//score stuff
let count=function(thing) {
	if (thing === true) {
		playerScore++;
	} else if (thing === false) {
		aiScore++;
	}
}
let sAlert=function(x, y) {
	if(x==0&&y==0){
		alert('Please play before trying to look at the score...');
	}else if(x!=1&&y!=1){	
		if (x > y) {
			alert(`You are in the lead! The score is ${x} to ${y}!`);
		} else if (x < y) {
			alert(`You are losing. You have ${x} points and are losing by ${y-x} points.`);
		} else if (x == y) {
			alert(`The score is all tied up at ${x} to ${y}.`);
		} else {
			alert("scorealerterror");
		}
	}else{
		if (x > y) {
			alert(`You are winning! The score is ${x} to ${y}!`);
		} else if (x < y) {
			alert(`You are behind. You have ${x} point and the computer has ${y} points.`);
		} else if (x == y) {
			alert(`The score is all tied up at ${x} to ${y}.`);
		} else {
			alert("scorealerterror");
		}
	}
}



	//compare
let compare=function(x, y) {
		if (x == 0 && y == 2) {
			win = true;
		} else if (x == 1 && y == 0) {
			win = true;
		} else if (x == 2 && y == 1) {
			win = true;
		} else if (x == y) {
			win = "tie";
		} else {
			win = false;
		}
		return win;
	}
	//decide
let decide=function(bool) {
	let aiAnswer='';
	if (b==0) {
		aiAnswer = "rock";
	} else if (b==1) {
		aiAnswer = "paper";
	} else if (b==2) {
		aiAnswer = "scissors";
	} else {
		alert(b);
	}
	if (bool == true) {
		alert("You won! The computer chose " + aiAnswer + ".");
	} else if (bool == false) {
		alert("You lost. The computer chose " + aiAnswer + ".");
	} else if (bool == "tie") {
		alert("You tied with the computer. You chose " + aiAnswer + ".");
	} else {
		alert("reply error");
	}
}

//main 
function main() {
	a=buttonPush;
	b=numGen();
	c=compare(a,b)
	decide(c);
	count(win);
	repeats++;
	console.log(repeats);
};  
