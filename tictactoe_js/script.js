let currPlayer='X'
let gameBoard=['','','','','','','','',''];
let gameOver=false

const cells=document.querySelectorAll('.cell');
const resetButton=document.getElementById('reset-btn');
cells.forEach((cell,ind)=>{
    cell.addEventListener('click',()=>{
        if(gameOver||gameBoard[ind])return;
        makeMove(ind);
        if(!gameOver) setTimeout(computerMove,500);

    });
});

resetButton.addEventListener('click',resetGame);
function makeMove(ind){
    gameBoard[ind]=currPlayer;
    cells[ind].textContent=currPlayer;
    if(checkWinner())return;
    currPlayer=currPlayer==='X'? 'O':'X';
}

function checkWinner(){
    const winCombos=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for (let combo of winCombos){
        if(gameBoard[combo[0]] && gameBoard[combo[0]]===gameBoard[combo[1]]&& gameBoard[combo[0]]===gameBoard[combo[2]]){
            alert(`Player ${currPlayer} wins!`);
            gameOver=true;
            return true;

        }
    }

    if(!gameBoard.includes('')){
        alert("it's a draw!");
        gameOver=true
        return true;
    }

    return false;

}


function resetGame(){
    currPlayer='X'
    gameBoard=['','','','','','','','',''];
    gameOver=false;
    cells.forEach(cell=>cell.textContent='')
}
