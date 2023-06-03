import { html } from '../library.js';


let multiplayerView = (gameData, matrixElement) => html`
<section class="gameSection">
    <div class="scoreContainer">
        <h3 class="title">${gameData.playerOneName} Score:${gameData.playerOneScore} ${gameData.playerTwoName} Score:${gameData.playerTwoScore}</h3>
    </div>
    ${matrixElement}
</section>
`;


export async function showMultiPlayerGame(ctx) {

    let gameData = JSON.parse(localStorage.getItem('gameData'));
    let gameMatrix = [];

    //initialize matrix
    for (let m = 0; m < gameData.mDimension; m++) {
        gameMatrix[m]= new Array(gameData.nDimension);
        for (let n = 0; n < gameData.nDimension; n++) {
            gameMatrix[m][n] = getRandomOperation();
        }
    }
    gameMatrix[0][0] = 0;
    gameMatrix[gameData.mDimension - 1][gameData.nDimension - 1] = 0;


    //create the dom element for visualizing
    let matrixELement = document.createElement('div');
    matrixELement.classList.add('matrixContainer');
    for (let m = 0; m < gameData.mDimension; m++) {
        let tr = document.createElement('tr');
        for (let n = 0; n < gameData.nDimension; n++) {
            let td = document.createElement('td');
            td.textContent = gameMatrix[m][n];
            td.addEventListener('click', () => move(gameData));
            tr.appendChild(td);
        }
        matrixELement.appendChild(tr);
    }


    await ctx.render(multiplayerView(gameData, matrixELement));

}

function move(gameData) {

    console.log(gameData.playerTurn);

    //changing the turn to the other player
    if (gameData.playerTurn == "playerOne") {
        gameData.playerTurn = "playerTwo";
    }
    else {
        gameData.playerTurn = "playerOne";
    }
}


//generates a random number from 1 to 10
function getRandomFrom1To10() {
    return Math.floor((Math.random() * 10) + 1);
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
    let operation = Math.floor((Math.random() * 4) + 1); // 1-addition; 2-substraction; 3-multiplication; 4-division
    let result;
    switch (operation) {
        //addition
        case 1:
            result = getRandomFrom1To10();
            break;
        //subtraction
        case 2:
            let number2 = getRandomFrom1To10();
            result = -number2;
            break;
        //multiplication
        case 3:
            let number3 = getRandomFrom0To5();
            if (number3 == 0){
                result = number3
            }
            else{
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