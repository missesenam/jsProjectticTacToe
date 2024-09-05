const gamecells = document.querySelectorAll(".elementbox")
const showWinner = document.getElementById('displayWinner')
let starter = 'cross';
const options = ['', '', '', '', '', '', '', '', '']
// the game
function gameAsth(){
    Array.from(gamecells).forEach((cell, index) =>{
        cell.id = index
        cell.addEventListener('click', showCorC);
    })
}
gameAsth()
// the function to show cross or circle
function showCorC(e){
    const player = document.createElement('div')
    player.classList.add(starter)
    e.target.append(player)
    //if cross then circle
    if(starter === 'cross'){
        starter = 'circle'
    } else{
        starter = 'cross' 
    }
    // show who's turn
    showWinner.textContent = `it is  ${starter}'s trun`;
    e.target.removeEventListener('click', showCorC)
    winnerStatus()
}
// who's the winner
function winnerStatus(){
    // possibilities of winning
    const winningpossibilities = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    let estaWinner = false;
    // cross wins
    winningpossibilities.forEach(poss => {
        const crosswins = poss.every(cel => gamecells[cel].firstChild?.classList.contains('cross'))
        if (crosswins){
            showWinner.textContent = 'Cross is the winner'
            estaWinner = true;
            //stop playing
        stopGame()
            // gamecells.forEach(box => box.replaceWith(box.cloneNode(true)))
        }
    })
    // circle wins
    winningpossibilities.forEach(poss => {
        const circlewins = poss.every(cel => gamecells[cel].firstChild?.classList.contains('circle'))
        if (circlewins){
            showWinner.textContent = 'Circle is the winner'
            estaWinner = true;
        stopGame()
        }
    })
    // draw
    
    const allCells = [...gamecells].every(cell => cell.firstChild);
if (allCells && !estaWinner) {
    showWinner.textContent = 'It\'s a Draw!';
    stopGame()
}
}
    // Stop playing
function stopGame() {
    gamecells.forEach(box => box.replaceWith(box.cloneNode(true)));
}










