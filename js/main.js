playerchoice = document.querySelectorAll(".choice")
playerchoice.forEach(btn => {
    btn.setAttribute ("onclick", "WhoWon(this)")
 });

 const RocPapSci = ['rock','paper','scissors']

function ComputerMove () {
    const choiceNumber = Math.floor(Math.random()*3);
    return RocPapSci[choiceNumber];
}


function WhoWon(val) {
    let computer = ComputerMove();
    let player;
    switch(val.id)
    {
        case "s":
            player = 'scissors'
            break;
        case "p":
            player = 'paper'
            break;
        case "r":
            player = 'rock'
            break;
    }

    let User = document.querySelector("#result-user-stat")
    let Computer = document.querySelector("#result-comp-stat")
    let Winner = document.querySelector("#result-final-stat")

    User.innerText =  "User : " + player
    Computer.innerText = "Computer: " + computer
    let playerScore = document.querySelector("#userScoreVal")
    let computerScore = document.querySelector("#compScoreVal")
    if(player === computer){
        Winner.textContent = 'Tie'
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            Winner.textContent = 'Computer Won';
            computerScore.textContent = Number(computerScore.textContent) + 1;

        }else{
            Winner.textContent = 'Player Won'
            playerScore.textContent = Number(playerScore.textContent) + 1;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            Winner.textContent = 'Computer Won';
            computerScore.textContent = Number(computerScore.textContent) + 1;
        }else{
            Winner.textContent = 'Player Won';
            playerScore.textContent = Number(playerScore.textContent) + 1;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            Winner.textContent = 'Computer Won';
            computerScore.textContent = Number(computerScore.textContent)  + 1;
        }else{
            Winner.textContent = 'Player Won';
            playerScore.textContent = Number(playerScore.textContent) + 1;
        }
    }
}
