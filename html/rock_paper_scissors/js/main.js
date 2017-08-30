
var botScore=0,
	playerScore=0;
	document.getElementById("scissors").onclick=playerThrowsScissors;
	document.getElementById("paper").onclick=playerThrowsPaper;
	document.getElementById("rock").onclick=playerThrowsRock;
	document.getElementById("lizard").onclick=playerThrowsLizard;
	document.getElementById("spock").onclick=playerThrowsSpot;
function playerThrowsRock(){
	var botsWeapon= getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon, "scissors");
}
function playerThrowsPaper(){
var botsWeapon=getRandomWeapon();
checkWhoWon(botsWeapon, "paper");
}
function playerThrowsLizard(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon, "lizard")
}
function playerThrowsSpot(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon, "spock")
}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.20){
		botsWeapon="scissors";
	}
	else if(randomNumber<.40){
		botsWeapon="paper";
	}
	else if (randomNumber<.60) {
		botsWeapon="lizard"
	}
	else if (randomNumber<.80) {
		botsWeapon="spock"

	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard")||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="spock")||
		(botsWeapon=="rock" && playersWeapon=="scissors")||
		(botsWeapon=="rock" && playersWeapon=="lizard")||
		(botsWeapon=="lizard" && playersWeapon=="spock")||
		(botsWeapon=="lizard" && playersWeapon=="paper")||
		(botsWeapon=="spock" && playersWeapon=="rock")||
		(botsWeapon=="spock" && playersWeapon=="scissors")
		)
		{
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("YURPPPPPPP");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
