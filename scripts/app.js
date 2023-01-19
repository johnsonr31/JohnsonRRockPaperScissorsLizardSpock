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


// Functions
function ClearScreen() {
    mainMenu.innerHTML = "";
}


function CpuPage() {
    CreateTitle();
    
}

function CpuOneRoundPage() {

}

// CPU Menu Function
function CreateTitle() {
    let returnToMenuBtn = document.createElement("a");
    returnToMenuBtn.className = "btn btn-primary";
    returnToMenuBtn.textContent = "Back to Menu";
    returnToMenuBtn.addEventListener("click", function(){
    cpuMenu.innerHTML = "";

    })

    let h1 = document.createElement("h1");
    h1.className = "pageHeading";
    h1.textContent = "CPU Match";

    let p = document.createElement("p");
    p.className = "paragraphText";
    p.textContent = "Please select how many rounds you'd like to play:"

    let btnRow = document.createElement("div");
    btnRow.className = "row menuBtns";

    let btnCol1 = document.createElement("div");
    btnCol1.className = "col-4 menuBtn";
    
    let btnCol2 = document.createElement("div");
    btnCol2.className = "col-4 menuBtn";
    
    let btnCol3 = document.createElement("div");
    btnCol3.className = "col-4 menuBtn";

    let btn1 = document.createElement("div");
    btn1.className = "btn btn-primary";
    btn1.textContent = "One Round";
    
    let btn2 = document.createElement("div");
    btn2.className = "btn btn-primary";
    btn2.textContent = "Best 3 out of 5";
    
    let btn3 = document.createElement("div");
    btn3.className = "btn btn-primary";
    btn3.textContent = "Best 4 out of 7";

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "bodyDiv";
    
    bodyDiv.appendChild(returnToMenuBtn);
    bodyDiv.appendChild(h1);
    bodyDiv.appendChild(p);
    cpuMenu.appendChild(bodyDiv);
    bodyDiv.appendChild(btnRow);
    btnRow.appendChild(btnCol1);
    btnRow.appendChild(btnCol2);
    btnRow.appendChild(btnCol3);
    btnCol1.appendChild(btn1);
    btnCol2.appendChild(btn2);
    btnCol3.appendChild(btn3);
}

// CPU One Round Mode Function
// function CreateTitle() {
//     let h1 = document.createElement("h1");
//     h1.className = "pageHeading";
//     h1.textContent = "Player Turn";

//     let p = document.createElement("p");
//     p.className = "paragraphText";
//     p.textContent = "Please select Rock, Paper, Scissors, Lizard, or Spock:"

//     let btnRow = document.createElement("div");
//     btnRow.className = "row menuBtns";

//     let btnCol1 = document.createElement("div");
//     btnCol1.className = "col-4 menuBtn";
    
//     let btnCol2 = document.createElement("div");
//     btnCol2.className = "col-4 menuBtn";
    
//     let btnCol3 = document.createElement("div");
//     btnCol3.className = "col-4 menuBtn";
    
//     let btnCol4 = document.createElement("div");
//     btnCol4.className = "col-4 menuBtn";
    
//     let btnCol5= document.createElement("div");
//     btnCol5.className = "col-4 menuBtn";

//     let btn1 = document.createElement("div");
//     btn1.className = "btn btn-primary";
//     btn1.textContent = "Rock";
    
//     let btn2 = document.createElement("div");
//     btn2.className = "btn btn-primary";
//     btn2.textContent = "Paper";
    
//     let btn3 = document.createElement("div");
//     btn3.className = "btn btn-primary";
//     btn3.textContent = "Scissors";

//     let btn4 = document.createElement("div");
//     btn4.className = "btn btn-primary";
//     btn4.textContent = "Spock";
    
//     let btn5 = document.createElement("div");
//     btn5.className = "btn btn-primary";
//     btn5.textContent = "Lizard";

//     let bodyDiv = document.createElement("div");
//     bodyDiv.className = "bodyDiv";
    
//     bodyDiv.appendChild(h1);
//     bodyDiv.appendChild(p);
//     cpuMenu.appendChild(bodyDiv);
//     bodyDiv.appendChild(btnRow);
//     btnRow.appendChild(btnCol1);
//     btnRow.appendChild(btnCol2);
//     btnRow.appendChild(btnCol3);
//     btnRow.appendChild(btnCol4);
//     btnRow.appendChild(btnCol5);
//     btnCol1.appendChild(btn1);
//     btnCol2.appendChild(btn2);
//     btnCol3.appendChild(btn3);
//     btnCol3.appendChild(btn4);
//     btnCol3.appendChild(btn5);
// }

function getAPI() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then((response) => response.text())
    .then((data) => compChoice = data);
}

getAPI();

// Event Listeners
cpuBtn.addEventListener("click", function(){
    ClearScreen();
    CpuPage();
    console.log(compChoice);
})