// Variables
let compChoice = '';
let playerChoice = '';

// Divs that will hide or unhide
let mainMenu = document.getElementById("mainMenu");
let cpuOptions = document.getElementById("cpuOptions");

// Buttons
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let cpu1of1Btn = document.getElementById("cpu1of1Btn");
let cpu3of5Btn = document.getElementById("cpu3of5Btn");
let cpu4of7Btn = document.getElementById("cpu4of7Btn");


// Functions
function getAPI() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then((response) => response.text())
    .then((data) => console.log(data));
}

getAPI();