console.log("hello world");

function getCompChoice() {
    let x = Math.floor(Math.random() * (3 - 0))
    console.log(x)
    if (x === 0) {
        console.log("Rock");
    }
    else if (x === 1) {
        console.log("Paper");
    }
    else {
        console.log("Scissor");
    }
}
getCompChoice()

function getHumanChoice() {
    let a = prompt(`Enter a value between 0 to 2
    0 means Rock
    1 means Paper
    2 means Scissor`
    )
    if (a === 0) {
        console.log("Rock")
    }
    else if (a === 1) {
        console.log("Paper");
    }
    else {
        console.log("Scissor");
    }
}
getHumanChoice()