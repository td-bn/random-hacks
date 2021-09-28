const choices = ['rock', 'paper', 'scissors']

function computerPlay() {
    // Return computer's random selection
    const index = Math.floor(Math.random() * 3)
    
    return choices[index]
}

function getWinner(player, computer) {
    // Evaluation matrix, indices as in array above
    const winner = [
        [0, 1, -1],
        [1, 0, -1],
        [1, -1, 0]
    ]
    return winner[player][computer]
}

function evaluateRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    const playerIndex = choices.indexOf(playerSelection)
    const computerIndex = choices.indexOf(computerSelection)

    return getWinner(playerIndex, computerIndex)
}

function playRound() {
    let winner = 0
    let playerSelection, computerSelection

    // While the result isn't a draw
    while (winner == 0) {
        playerSelection = getUserSelection()
        computerSelection = computerPlay()

        console.log(playerSelection, computerSelection)
        winner = evaluateRound(playerSelection, computerSelection)
    }

    let result
    if (winner == 1) {
        result = `Round won! ${playerSelection} beats ${computerSelection}`
    } else {
        result = `Round lost! ${computerSelection} beats ${playerSelection}`
    }
    console.log(result)

    return winner;
}

function getUserSelection() {
    return window.prompt('Please enter your choice [rock, paper, scissor]', 'rock')
}

function game(rounds) {
    let playerWins = 0

    for (let i=0; i<rounds; i++) {
        // Result is either 1 or -1
        playerWins += playRound()
    }

    return playerWins > 0 ? 'Player Wins!' : 'Computer Wins!'
}

// Play a Bo3 game
console.log( game(3) )
