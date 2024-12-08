var monkeySound = document.querySelector("#monkey-sound");
    monkeySound.currentTime =0;
var failSound = document.querySelector("#fail-guess");
    failSound.currentTime =0;
    

let grid = document.querySelector(".grid"); /* This is for the element itself (as a whole) */
let cells = document.querySelector(".grid").children; /* These are comprised of the cells in the grid */




function randNum(min, max) { return Math.floor(Math.random()*cells.length); } /* Generate a random index */
let cellToHit = cells[randNum(0,cells.length)];


for (let i = 0; i < cells.length; i++) { cells[i].addEventListener("click", checkThisCell); }

let counter = 0;
const board = document.getElementById("status");
const score = document.getElementById("score");


function checkThisCell(event) { /* checks if the cell has been hit. If so, remove its actionlistener */
    
    const clickedCell = event.target;

    countAttempts();

    clickedCell.removeEventListener("click", checkThisCell);

    if(clickedCell == cellToHit) {
        monkeySound.play();
        monkeyFound(clickedCell); 
        for (let i = 0; i < cells.length; i++) { cells[i].removeEventListener("click", checkThisCell); }
    } else {

        failSound.play();
    }

}

function countAttempts() {
    counter++;
    score.innerText = counter;
    board.innerText = "Try again:";

}




let finalScore = 0;
let monkey;

function monkeyFound(event) {

    monkey = event.target;
    document.getElementById(cellToHit.getAttribute("id")).style.backgroundImage = "url('monkey.png')";
    
    
        
   
            finalScore = counter;
            score.innerText = finalScore;
    
            if (finalScore == 1) { board.innerText = "Perrrrfect!" }
            else if (finalScore < 3) { board.innerText = "Awesome!" }
            else if (finalScore < 6) { board.innerText = "Good job!" }
            else if (finalScore < 8) { board.innerText = "Not too bad!" }
            else { board.innerText = "You're a cute monkey." }          

    
}


 




















