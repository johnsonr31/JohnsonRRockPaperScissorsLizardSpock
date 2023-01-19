// Variables
let compChoice = '';
let playerChoice = '';
let player1score = 0;
let player2score = 0;
let computerScore = 0;

// Divs that will hide or unhide
let mainMenu = document.getElementById("mainMenu");
let cpuOptions = document.getElementById("cpuOptions");
let cpuMenu = document.getElementById("cpuMenu");

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
    cpuMenu.innerHTML = CreateTitle();
    
}

function CreateTitle() {
    let h1 = document.createElement("h1");
    h1.className = "title";
    h1.textContent = "Hello World!";

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "bodyDiv";

    bodyDiv.appendChild(h1);
}

function getAPI() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then((response) => response.text())
    .then((data) => compChoice = data);
}

getAPI();
