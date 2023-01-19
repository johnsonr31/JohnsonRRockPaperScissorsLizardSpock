// Variables
let compChoice = '';
let playerChoice = '';
let player1score = 0;
let player2score = 0;
let computerScore = 0;

// Divs that will hide or unhide
let mainMenu = document.getElementById("mainMenu");
let cpuOptions = document.getElementById("cpuOptions");

// Buttons
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let cpu1of1Btn = document.getElementById("cpu1of1Btn");
let cpu3of5Btn = document.getElementById("cpu3of5Btn");
let cpu4of7Btn = document.getElementById("cpu4of7Btn");

// Event Listeners
cpuBtn.addEventListener("click", function(){
    ClearScreen();
    CpuPage();
    console.log(compChoice);
})

// Functions
function ClearScreen() {
    mainMenu.innerHTML = "";
}

function CpuPage() {
    // Create the heading for the CPU page
    let h2 = document.createElement("h2");
    h2.className = "cpuPageHeading";
    h2.textContent = "CPU Match";

    // Create the text for the CPU page
    let p = document.createElement("p");
    p.className = "cpuParagraphText";
    p.textContent = "Please choose how many rounds you would like to play.";
    
}

function getAPI() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then((response) => response.text())
    .then((data) => compChoice = data);
}

getAPI();
