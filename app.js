// Render gameboard object and create players

const gameBoard = (() => {

    const createPlayer = (name, marker) => {
        return { name, marker };
    }

    let gameSq = document.getElementsByClassName("gameSquare")
    let board = [];
    // gererate gameboard with default image, set img data values, append img to gameboard

    for (let i = 0;i < gameSq.length;i++) { //for each sq on the grid
        const card = document.createElement("img") // create img
        card.setAttribute("src", "images/white.png") // set img to blank img
        card.setAttribute("data-value", i) // set data-value to NA
        card.addEventListener("click", updateBoard)
        gameSq[i].appendChild(card) // append img to gameSq Div
        board.push(card.getAttribute("data-value")) // push data-value to board array
    };
    // console.log("Board loaded " + board)
    return board;

});




function updateBoard() {

    // declare players
    // const playerOne = createPlayer("Player 1", cross);
    // // const playerTwo = createPlayer("Player 2", circle);
    const markedBoard = gameBoard();
    let activePlayer;
    let playerOneTracker = [];
    let playerTwoTracker = [];

    //check winning combo
    function checkWinner() {

        for (let i = 0;i < markedBoard.length - 1;i++) {
            if (winningCombos[i] === "X, X, X" || winningCombos[i] === "O, O, O") {
                console.log(winningCombos[i])
                console.log("winning")
                //alert this winner
                //continue playing game
            } else {
                console.log("losing")
            }
        }
    }

    // winning combos
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    checkWinner()


    // check for winner
    // for each number in board does it match with any of winningCombos - if true declate winner to current winner.
    // check if playerOneTracker || playerTwoTraCKER data array contains any of the winning combos
    // go through each array in PlayerTracker 
    // then go through each array in winning combo - if any of the combos are true
    // declare winner to this active player



    // update DOM board
    // update gametrackers - store game
    //
    // player click -> has the img already been clicked? what is its value? If value is x - select another option
    // store value in playerTracker
    // change value of clicked img to X 
    // if the playerTracker contains any of the winning combos -> alert winner
    // remember clicked img


    if (activePlayer === "playerOne" || activePlayer === "") {
        let clickedVal = this.getAttribute("data-value")
        playerOneTracker.push(clickedVal)
        console.log(playerOneTracker)
        this.setAttribute("src", "images/o.jpeg")
        activePlayer = "playerTwo"
        return playerOneTracker
    } else if (activePlayer === "playerTwo") {
        let clickedVal = this.getAttribute("data-value")
        playerTwoTracker.push(clickedVal)
        console.log(playerTwoTracker)
        this.setAttribute("src", "images/x.jpeg")
        activePlayer = "playerTwo"
        return playerTwoTracker
    }
}


gameBoard()

// const operateGame = (() => {

//     // declare players

//     // check winner function
//     function checkWinner(player1Score, player2Score) {
//     }


// }



// returning functions: check for winner, next player

// Build the functions 
//  that allow players to add marks to a specific spot on the board
//  and then tie it to the DOM - letting players click on the gameboard to place their marker.
// Don’t forget the logic that keeps players from playing in spots that are already taken!
// Think carefully about where each bit of logic should reside.
// Each little piece of functionality should be able to fit in:-
// the game, player or gameboard objects
//..but take care to put them in “logical” places.
// Spending a little time brainstorming here can make your life much easier later!