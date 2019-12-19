The Odin Project -> Web Development 101 -> Project: Rock Paper Scissors

First project I'm posting publicly to the Odin project. Proud of what I created. Hopefully, I go back to this in a few months and think the code is god awful, but I slogged through issues, figured out fixes, and got a funtioning program. Quite satisfying. 

I feel much more confident on DOM manipulation now. I didn't make great use of 'addEventListener' - an onclick event would have accomplished the same, but the benefit of 'addEventListener' seems to be in its scalability. I just didn't have a need for the scale with this one. Good to get in the habit of that approach though so when I do need it, I know how to do it. 

*Update* I had an issue with my onclick event that the initial click did nothing. When I converted my code to the addEventListener method, that issue went away. I don't understand it yet, but I like it. 
 
Assignment
    1. Start a new git repo for your project.

    2. Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.
    
    3.Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
    
    4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

        a. make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

        b. Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:

            function playRound(playerSelection, computerSelection) {
        	    // your code here!
            }

            const playerSelection = 'rock'
            const computerSelection = computerPlay()
            console.log(playRound(playerSelection, computerSelection))

        ​
    5. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
        a. At this point you should be using console.log() to display the results of each round and the winner at the end.
        
        b. Use prompt() to get input from the user. Read the docs here if you need to.
        
        c. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
        
        d. Feel free to create more “helper” functions if you think it would be useful.

Part 2:
    1. Go back to your “Rock Paper Scissors” game from a previous lesson and give it a simple UI so that the player can play the game by clicking on buttons rather than typing their answer in a prompt.
        a. Copy your original code into a new file so you don’t lose it.
        b. For now, remove the logic that plays exactly five rounds.
        c. Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
        d. Add a div for displaying results and change all of your console.logs into DOM methods.
        e. Display the running score, and announce a winner of the game once one player reaches 5 points.
        f. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
        g. Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!



