// Variables
let compChoice = '';
let playerChoice = '';
let player1score = 0;
let player2score = 0;
let computerScore = 0;
let result = '';
let playerWon = false;

// Divs that will hide or unhide
let mainMenu = document.getElementById("mainMenu");
let cpuOptions = document.getElementById("cpuOptions");
let cpuMenu = document.getElementById("cpuMenu");

// Buttons
let cpuBtn = document.getElementById("cpuBtn");
let pvpBtn = document.getElementById("pvpBtn");
let rulesBtn = document.getElementById("rulesBtn");
// let cpu1of1Btn = document.getElementById("cpu1of1Btn");
// let cpu3of5Btn = document.getElementById("cpu3of5Btn");
// let cpu4of7Btn = document.getElementById("cpu4of7Btn");


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
    returnToMenuBtn.addEventListener("click", function () {
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
    btn1.addEventListener("click", function () {
        cpuMenu.innerHTML = "";
        CreateOneRound();
    })

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
function CreateOneRound() {
    let h1 = document.createElement("h1");
    h1.className = "pageHeading";
    h1.textContent = "Player Turn";

    let p = document.createElement("p");
    p.className = "paragraphText";
    p.textContent = "Please select Rock, Paper, Scissors, Lizard, or Spock:"

    let btnRow = document.createElement("div");
    btnRow.className = "row choiceBtns";

    let btnCol1 = document.createElement("div");
    btnCol1.className = "col-12 choiceBtn";

    let btnCol2 = document.createElement("div");
    btnCol2.className = "col-12 choiceBtn";

    let btnCol3 = document.createElement("div");
    btnCol3.className = "col-12 choiceBtn";

    let btnCol4 = document.createElement("div");
    btnCol4.className = "col-12 choiceBtn";

    let btnCol5 = document.createElement("div");
    btnCol5.className = "col-12 choiceBtn";

    let btn1 = document.createElement("div");
    btn1.className = "btn btn-primary";
    btn1.textContent = "Rock";
    btn1.addEventListener("click", function () {
        userChoice = "Rock";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getAPI();
        console.log(compChoice);
    })

    let btn2 = document.createElement("div");
    btn2.className = "btn btn-primary";
    btn2.textContent = "Paper";
    btn2.addEventListener("click", function () {
        userChoice = "Paper";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
    })

    let btn3 = document.createElement("div");
    btn3.className = "btn btn-primary";
    btn3.textContent = "Scissors";
    btn3.addEventListener("click", function () {
        userChoice = "Scissors";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
    })

    let btn4 = document.createElement("div");
    btn4.className = "btn btn-primary";
    btn4.textContent = "Lizard";
    btn4.addEventListener("click", function () {
        userChoice = "Lizard";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
    })

    let btn5 = document.createElement("div");
    btn5.className = "btn btn-primary";
    btn5.textContent = "Spock";
    btn5.addEventListener("click", function () {
        userChoice = "Spock";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
    })

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "bodyDiv";

    bodyDiv.appendChild(h1);
    bodyDiv.appendChild(p);
    cpuMenu.appendChild(bodyDiv);
    bodyDiv.appendChild(btnRow);
    btnRow.appendChild(btnCol1);
    btnRow.appendChild(btnCol2);
    btnRow.appendChild(btnCol3);
    btnRow.appendChild(btnCol4);
    btnRow.appendChild(btnCol5);
    btnCol1.appendChild(btn1);
    btnCol2.appendChild(btn2);
    btnCol3.appendChild(btn3);
    btnCol4.appendChild(btn4);
    btnCol5.appendChild(btn5);
}

// This function will access the RPSLS API and save the result as a variable called "compChoice", which represents the computer opponent's choice
function getAPI() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
        .then((response) => response.text())
        .then((data) => compChoice = data);
}

function getResult() {
    if(userChoice == compChoice)
    {
        result = 'This round is a tie!';
        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Paper")
    {
        result = 'Computer wins!';
        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Scissors")
    {
        result = 'You win!';
        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Lizard")
    {
        result = 'You win!';
        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Spock")
    {
        result = 'Computer wins!';
        console.log(result);
    }
}



// Event Listeners
cpuBtn.addEventListener("click", function () {
    ClearScreen();
    CpuPage();
    console.log(compChoice);
})