/*timer*/
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
/*winning board combinations*/
const winCombos = [
    [s0, s1, s2],
    [s3, s4, s5],
    [s6, s7, s8],
    [s0, s3, s6],
    [s1, s4, s7],
    [s2, s5, s8],
    [s0, s4, s8],
    [s6,s4, s2]
]

/* Player Vs Player Start Function */
function pvpStart(){

    /* Disable Player Vs Computer Button*/
document.getElementById("PVC").disabled=true;

let choices = ['X', 'O'];

let num = choices.length-1;

let players = ['Player 1', 'Player 2'];

let max = players.length-1;

let min = 0;

/* X or O Random */

let playerVal = Math.floor(Math.random() * (num-min+1) );

/* Who goes first Random */

let goFirst = Math.floor(Math.random() * (max-min+1) );

let printPlayer = players[goFirst];
let printPlayerVal = choices[playerVal];
document.getElementById("first").innerHTML = printPlayer+ " goes first! And is " + printPlayerVal + "'s";
document.getElementById("startMessage").setAttribute("class", "dissapear");
document.getElementById("startText").innerHTML ="";

/* logic*/

}

/* Player Vs Computer Start Function */

function pvcStart(){
    
player1 = "X";

let Computer = "O";

let players = [player1, Computer];

let max = players.length-1;

let min = 0;



/* Who goes first Random */

let goFirst = Math.floor(Math.random() * (max-min+1) );

globalThis.printPlayer = players[goFirst];
    document.getElementById("first").innerHTML = printPlayer+ " goes first!";
    document.getElementById("startText").innerHTML ="";
    document.getElementById("startText").setAttribute("class", "dissapear");
    document.getElementById("startMessage").setAttribute("class", "dissapear");

/* Disable PVP radio button */

document.getElementById("PVP").disabled=true;

/* Each cell Onclick function*/

/*Logic*/

}
/* Start/Reset Button Function */
function start(){
    document.getElementById("PVC").disabled=false;
    document.getElementById("PVP").disabled=false;
    document.getElementById("PVC").checked=false;
    document.getElementById("PVP").checked=false;
    document.getElementById("first").innerHTML ="";
    document.getElementById("startMessage").setAttribute("class", "startMessage");
    document.getElementById("startText").innerHTML ="Select a Game Mode to begin!";
    document.getElementById("startText").setAttribute("class", "startText");
    /*Clear the board*/
    document.getElementById("s0").innerHTML = "";
    document.getElementById("s1").innerHTML = "";
    document.getElementById("s2").innerHTML = "";
    document.getElementById("s3").innerHTML = "";
    document.getElementById("s4").innerHTML = "";
    document.getElementById("s5").innerHTML = "";
    document.getElementById("s6").innerHTML = "";
    document.getElementById("s7").innerHTML = "";
    document.getElementById("s8").innerHTML = "";
    /*reset timer*/
    totalSeconds = 0;
  }
