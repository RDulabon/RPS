var playerScore = 0;
var cpuScore = 0;

document.getElementById("rock").addEventListener("click", function () {
    document.getElementById("playerChoice").innerHTML="rock";
    computerSelection();  
    playRound();  
});

document.getElementById("paper").addEventListener("click", function () {
    document.getElementById("playerChoice").innerHTML="paper"; 
    computerSelection(); 
    playRound();
});

document.getElementById("scissors").addEventListener("click", function () {
    document.getElementById("playerChoice").innerHTML="scissors"; 
    computerSelection(); 
    playRound();   
});


let computerSelection = function () {
    var cpu = Math.floor(Math.random()*3)+1;
    if (cpu == 1) {
        document.getElementById("cpuChoice").innerHTML="rock";
    } else if (cpu == 2) {
        document.getElementById("cpuChoice").innerHTML="paper"; 
    } else {
        document.getElementById("cpuChoice").innerHTML="scissors";
    }
} 

let playRound = function () {
    var player = document.getElementById("playerChoice").innerHTML;
    var cpu = document.getElementById("cpuChoice").innerHTML;
  
    if (player == "rock" && cpu == "paper") {
        cpuScore += 1;
    } else if (player == "rock" && cpu == "scissors") {
        playerScore += 1; 
    } else if (player == "paper" && cpu == "scissors") {
        cpuScore += 1;
    } else if (player == "paper" && cpu == "rock") {
        playerScore += 1;
    } else if (player == "scissors" && cpu == "rock") {
        cpuScore += 1;
    } else if (player == "scissors" && cpu == "paper") {
        playerScore += 1;
    } else return;
    document.getElementById("cpuScore").innerHTML=cpuScore;
    document.getElementById("playerScore").innerHTML=playerScore;

    if (playerScore == 5) {
        alert('Game Over! Player 1 wins!');
        document.getElementById("cpuScore").innerHTML=0;
        document.getElementById("cpuChoice").innerHTML="R/P/S?";
        cpuScore = 0; 
        document.getElementById("playerScore").innerHTML=0; 
        document.getElementById("playerChoice").innerHTML="R/P/S?";
        playerScore = 0; 
    } else if (cpuScore == 5) {
        alert('Game Over! CPU wins!');
        document.getElementById("cpuScore").innerHTML=0;
        document.getElementById("cpuChoice").innerHTML="R/P/S?";
        cpuScore = 0;
        document.getElementById("playerScore").innerHTML=0; 
        document.getElementById("playerChoice").innerHTML="R/P/S?";
        playerScore = 0; 
    } else return; 
}