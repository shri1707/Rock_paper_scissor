console.log("hello world");

let humanScore = 0
let compScore = 0

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
    humanSelection = humanSelection[0].toUpperCase() + humanSelection.substring(1)
    if (humanSelection == "Rock") {
        if (computerChoice == "Paper") {
            console.log("You loose! Paper beats Rock")
            compScore++
        }
        else if (computerChoice == "Scissor") {
            console.log("You won! Rock beats Scissor")
            humanScore++
        }
        else {
            console.log("Draw! both showed Rock")
        }
    }
    else if (humanSelection == "Paper") {
        if (computerChoice == "Scissor") {
            console.log("You loose! Scissor beats Paper")
            compScore++
        }
        else if (computerChoice == "Rock") {
            console.log("You won! Paper beats Rock")
            humanScore++
        }
        else {
            console.log("Draw! both showed Paper")
        }
    }
    else if (humanSelection == "Scissor") {
        if (computerChoice == "Rock") {
            console.log("You loose! Rock beats Scissor")
            compScore++
        }
        else if (computerChoice == "Paper") {
            console.log("You won! Scissor beats Paper")
            humanScore++
        }
        else {
            console.log("Draw! both showed Scissor")
        }
    }
}

let h= getHumanChoice()
console.log(h)
let c= getCompChoice()
console.log(c)
playRound(h,c);

