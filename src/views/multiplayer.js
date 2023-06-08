import { html,page } from '../library.js';

let multiplayerView = (gameData, matrixElement) => html`
<section class="gameSection">
    <div class="scoreContainer">
        <h3 class="title">${gameData.playerOneName} | ${gameData.playerTwoName} </h3>
    </div>
    ${matrixElement}
</section>
`;


export async function showMultiPlayerGame(ctx) {

    let gameData = JSON.parse(localStorage.getItem('gameData'));
    gameData.playerOneScore = 0;
    gameData.playerTwoScore = 0;
    let gameMatrix = [];

    //initialize matrix
    for (let m = 0; m < gameData.mDimension; m++) {
        gameMatrix[m] = new Array(gameData.nDimension);
        for (let n = 0; n < gameData.nDimension; n++) {
            gameMatrix[m][n] = getRandomOperation();
        }
    }
    gameMatrix[0][0] = 0;
    gameMatrix[gameData.mDimension - 1][gameData.nDimension - 1] = 0;
    gameData.playerOneCoordinates = [0, 0];
    gameData.playerTwoCoordinates = [gameData.mDimension - 1, gameData.nDimension - 1];



    //create the dom element for visualizing
    let matrixELement = document.createElement('div');
    matrixELement.classList.add('matrixContainer');
    for (let m = 0; m < gameData.mDimension; m++) {
        let tr = document.createElement('tr');
        for (let n = 0; n < gameData.nDimension; n++) {
            let td = document.createElement('td');
            td.id = `${m}${n}`;
            td.textContent = gameMatrix[m][n];
            td.addEventListener('click', (e) => move(gameData, e));
            tr.appendChild(td);
        }

        matrixELement.appendChild(tr);
    }

    await ctx.render(multiplayerView(gameData, matrixELement));

    document.getElementById("00").classList.add("tdClickPlayerOne");
    document.getElementById(`${gameData.mDimension - 1}${gameData.nDimension - 1}`).classList.add("tdClickPlayerTwo");
}

function move(gameData, e) {

    //find the player who is on turn
    let playerOnTurn = gameData.playerTurn;

    let currentPlayerCoordinates = "00";

    if (playerOnTurn == "playerOne") {
        currentPlayerCoordinates = `${gameData.playerOneCoordinates[0]}${gameData.playerOneCoordinates[1]}`;
    }
    else {
        currentPlayerCoordinates = `${gameData.playerTwoCoordinates[0]}${gameData.playerTwoCoordinates[1]}`;
    }

    //find possible moves
    //if it is from the available fields make the move
    //get the td which the user clicked

    let clickedTdCoordinates = e.target.id;
    let clickedTd = document.getElementById(clickedTdCoordinates);
    let allAllowedFields = allowedFields(currentPlayerCoordinates[0], currentPlayerCoordinates[1], gameData);


    if (allAllowedFields.includes(clickedTdCoordinates)) {

        //check which class to set based on the player
        if (playerOnTurn == 'playerOne') {

            gameData.playerOneScore = scoreAfterOperation(gameData.playerOneScore, clickedTd.textContent);
            clickedTd.classList.add('tdClickPlayerOne');
            gameData.playerOneCoordinates = [clickedTdCoordinates[0], clickedTdCoordinates[1]];
        }
        else {
            gameData.playerTwoScore = scoreAfterOperation(gameData.playerTwoScore, clickedTd.textContent);
            clickedTd.classList.add('tdClickPlayerTwo');
            gameData.playerTwoCoordinates = [clickedTdCoordinates[0], clickedTdCoordinates[1]];
        }
    }
    else {
        return;
    }


    let hasFieldsOne = allowedFields(gameData.playerOneCoordinates[0], gameData.playerOneCoordinates[1], gameData);
    let hasFieldsTwo = allowedFields(gameData.playerTwoCoordinates[0], gameData.playerTwoCoordinates[1], gameData);
    if(hasFieldsOne == 0 || hasFieldsTwo == 0){

        console.log(playerOnTurn);

        if(playerOnTurn="playerOne"){

        localStorage.setItem('playerWinner', gameData.playerOneName);
        }
        else{
            localStorage.setItem('playerWinner', gameData.playerTwoName);

        }

        if( gameData.playerOneScore >gameData.playerTwoScore){
            localStorage.setItem('bestScore',gameData.playerOneScore);
        }
        else{
            localStorage.setItem('bestScore',gameData.playerTwoScore);
        }
        


        page.redirect('/winner');
    }
    //click only on them 
    let td = document.getElementById(`${currentPlayerCoordinates[0]}${currentPlayerCoordinates[1]}`);
    td.classList.add("tdClickPlayerOne");


    //changing the turn to the other player
    if (gameData.playerTurn == "playerOne") {
        gameData.playerTurn = "playerTwo";
    }
    else {
        gameData.playerTurn = "playerOne";
    }
}


//generates a random number from 1 to 9
function getRandomFrom1To9() {
    return Math.floor((Math.random() * 9) + 1);
}

//generates a random number from 1 to 5
function getRandomFrom1To5() {
    return Math.floor((Math.random() * 5) + 1);
}

//generates a random number from 0 to 5
function getRandomFrom0To5() {
    return Math.floor((Math.random() * 5));
}

//generates a random number to insert in the matrix
function getRandomOperation() {
    let operation = Math.floor((Math.random() * 4) + 1); // 1-addition; 2-subtraction; 3-multiplication; 4-division
    let result;
    switch (operation) {
        //addition
        case 1:
            result = getRandomFrom1To9();
            break;
        //subtraction
        case 2:
            let number2 = getRandomFrom1To9();
            result = -number2;
            break;
        //multiplication
        case 3:
            let number3 = getRandomFrom0To5();
            if (number3 == 0) {
                result = number3
            }
            else {
                result = "x" + number3;
            }
            break;
        //division
        case 4:
            let number4 = getRandomFrom1To5();
            result = "/" + number4;
            break;
    }

    return result;
}

function allowedFields(m, n, gameData) {
    let allowedIds = [];

    m = parseInt(m);
    n = parseInt(n);

    if (m - 1 >= 0) {

        if (document.getElementById(`${m - 1}${n}`).classList.length == 0) {
            allowedIds.push(`${m - 1}${n}`);
        }
    }
    if (m - 1 >= 0 && n + 1 < gameData.nDimension) {

        if (document.getElementById(`${m - 1}${n + 1}`).classList.length == 0) {
            allowedIds.push(`${m - 1}${n + 1}`);
        }
    }
    if (n + 1 < gameData.nDimension) {

        if (document.getElementById(`${m}${n + 1}`).classList.length == 0) {
            allowedIds.push(`${m}${n + 1}`);
        }
    }
    if (m + 1 < gameData.mDimension && n + 1 < gameData.nDimension) {

        if (document.getElementById(`${m + 1}${n + 1}`).classList.length == 0) {
            allowedIds.push(`${m + 1}${n + 1}`);
        }
    }
    if (m + 1 < gameData.mDimension) {

        if (document.getElementById(`${m + 1}${n}`).classList.length == 0) {
            allowedIds.push(`${m + 1}${n}`);
        }
    }
    if (m + 1 < gameData.mDimension && n - 1 >= 0) {

        if (document.getElementById(`${m + 1}${n - 1}`).classList.length == 0) {
            allowedIds.push(`${m + 1}${n - 1}`);
        }
    }
    if (n - 1 >= 0) {

        if (document.getElementById(`${m}${n - 1}`).classList.length == 0) {
            allowedIds.push(`${m}${n - 1}`);
        }
    }
    if (m - 1 >= 0 && n - 1 >= 0) {

        if (document.getElementById(`${m - 1}${n - 1}`).classList.length == 0) {
            allowedIds.push(`${m - 1}${n - 1}`);
        }
    }

    return allowedIds;

}

function scoreAfterOperation(currentScore, operation) {
    let result = 0;

    if (operation.length==1) {
        result = currentScore + parseInt(operation);
    }
    else if(operation[0]=="-"){
        result = currentScore + parseInt(operation);
    }
    else {
        if (operation[0] == "/") {
            result = Math.round(currentScore / parseInt(operation[1]));
        }
        else {
            result = Math.round(currentScore * parseInt(operation[1]));
        }
    }

    return result;
}