console.log("hello world");

let humanScore = 0
let compScore = 0
let roundNum =0
const body = document.querySelector("body")

function getCompChoice() {
    let x = Math.floor(Math.random() * (3 - 0))
    if (x === 0) {
        return "Rock";
    }
    else if (x === 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let a = prompt(`Enter a value between 0 to 2
    0 means Rock
    1 means Paper
    2 means Scissor`
    )
    if (a == 0) {
        return "Rock";
    }
    else if (a == 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function playRound(humanChoice, computerChoice) {
    let humanSelection = humanChoice.toLowerCase()
    const res = document.querySelector("#result")
    humanSelection = humanSelection[0].toUpperCase() + humanSelection.substring(1)
    if (humanSelection == "Rock") {
        if (computerChoice == "Paper") {
            compScore++
            console.log("You loose! Paper beats Rock")
            res.innerHTML = `You loose! Paper beats Rock<br>computer Score = ${compScore}, human Score = ${humanScore} `
            
        }
        else if (computerChoice == "Scissor") {
            console.log("You won! Rock beats Scissor")
            humanScore++
            res.innerHTML = `You won! Rock beats Scissor<br>computer Score = ${compScore}, human Score = ${humanScore} `
            
        }
        else {
            console.log("Draw! both showed Rock")
            res.innerHTML = `Draw! both showed Rock<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
    }
    else if (humanSelection == "Paper") {
        if (computerChoice == "Scissor") {
            console.log("You loose! Scissor beats Paper")
            compScore++
            res.innerHTML = `You loose! Scissor beats Paper<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
        else if (computerChoice == "Rock") {
            console.log("You won! Paper beats Rock")
            humanScore++
            res.innerHTML = `You won! Paper beats Rock<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
        else {
            console.log("Draw! both showed Paper")
            res.innerHTML = `Draw! both showed Paper<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
    }
    else if (humanSelection == "Scissor") {
        if (computerChoice == "Rock") {
            console.log("You loose! Rock beats Scissor")
            compScore++
            res.innerHTML = `You loose! Rock beats Scissor<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
        else if (computerChoice == "Paper") {
            console.log("You won! Scissor beats Paper")
            humanScore++
            res.innerHTML = `You won! Scissor beats Paper<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
        else {
            console.log("Draw! both showed Scissor")
            res.innerHTML = `Draw! both showed Scissor<br>computer Score = ${compScore}, human Score = ${humanScore} `
        }
    }
    roundNum++;
    if (roundNum === 5) {
        let result = document.querySelector("#result");
        if (humanScore > compScore) {
            result.innerHTML = "Human wins!";
        } else if (compScore > humanScore) {
            result.innerHTML = "Comp wins!";
        } else {
            result.innerHTML = "Tie";
        }
        notice.innerHTML= "Refresh page to play again"
        // Disable buttons after 5 rounds
        document.querySelectorAll(".btn").forEach(button => {
            button.disabled = true;
        });
    }
}


// const rock = document.querySelector("#rock")
// const paper = document.querySelector("#paper")
// const scissor = document.querySelector("#scissor")
// const result = document.querySelector("#result")
const notice= document.querySelector(".notice")

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const comp = getCompChoice();
        const selectedChoice = button.id;
        playRound(selectedChoice, comp);
    });
});

