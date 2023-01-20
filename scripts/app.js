// Variables
let compChoice = '';
let playerChoice = '';
let versus = playerChoice + ' VS ' + compChoice;
let player1score = 0;
let player2score = 0;
let computerScore = 0;
let playCount = 0;
let result = '';


// This function will access the RPSLS API and save the result as a variable called "compChoice", which represents the computer opponent's choice
function getAPI() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
        .then((response) => response.text())
        .then((data) => compChoice = data);
}

getAPI();

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

// CPU Menu Function
function CreateTitle() {
    let returnToMenuBtn = document.createElement("a");
    returnToMenuBtn.className = "btn btn-primary";
    returnToMenuBtn.textContent = "Back to Menu";
    returnToMenuBtn.addEventListener("click", function () {
        cpuMenu.innerHTML = "";
        BackToTitle();
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



console.log(compChoice);

// CPU One Round Mode Function
function CreateOneRound() {
    let returnToMenuBtn = document.createElement("a");
    returnToMenuBtn.className = "btn btn-primary";
    returnToMenuBtn.textContent = "Back to Menu";
    returnToMenuBtn.addEventListener("click", function () {
        cpuMenu.innerHTML = "";
        BackToTitle();
    })

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
        getResult();
        ResultScreen();
    })

    let btn2 = document.createElement("div");
    btn2.className = "btn btn-primary";
    btn2.textContent = "Paper";
    btn2.addEventListener("click", function () {
        userChoice = "Paper";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

    let btn3 = document.createElement("div");
    btn3.className = "btn btn-primary";
    btn3.textContent = "Scissors";
    btn3.addEventListener("click", function () {
        userChoice = "Scissors";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

    let btn4 = document.createElement("div");
    btn4.className = "btn btn-primary";
    btn4.textContent = "Lizard";
    btn4.addEventListener("click", function () {
        userChoice = "Lizard";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

    let btn5 = document.createElement("div");
    btn5.className = "btn btn-primary";
    btn5.textContent = "Spock";
    btn5.addEventListener("click", function () {
        userChoice = "Spock";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

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
    btnRow.appendChild(btnCol4);
    btnRow.appendChild(btnCol5);
    btnCol1.appendChild(btn1);
    btnCol2.appendChild(btn2);
    btnCol3.appendChild(btn3);
    btnCol4.appendChild(btn4);
    btnCol5.appendChild(btn5);
}


function CreateFiveRounds() {
    let returnToMenuBtn = document.createElement("a");
    returnToMenuBtn.className = "btn btn-primary";
    returnToMenuBtn.textContent = "Back to Menu";
    returnToMenuBtn.addEventListener("click", function () {
        cpuMenu.innerHTML = "";
        BackToTitle();
    })

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
        getResult();
        ResultScreen();
    })

    let btn2 = document.createElement("div");
    btn2.className = "btn btn-primary";
    btn2.textContent = "Paper";
    btn2.addEventListener("click", function () {
        userChoice = "Paper";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

    let btn3 = document.createElement("div");
    btn3.className = "btn btn-primary";
    btn3.textContent = "Scissors";
    btn3.addEventListener("click", function () {
        userChoice = "Scissors";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

    let btn4 = document.createElement("div");
    btn4.className = "btn btn-primary";
    btn4.textContent = "Lizard";
    btn4.addEventListener("click", function () {
        userChoice = "Lizard";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

    let btn5 = document.createElement("div");
    btn5.className = "btn btn-primary";
    btn5.textContent = "Spock";
    btn5.addEventListener("click", function () {
        userChoice = "Spock";
        cpuMenu.innerHTML = "";
        console.log(userChoice);
        getResult();
        ResultScreen();
    })

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
    btnRow.appendChild(btnCol4);
    btnRow.appendChild(btnCol5);
    btnCol1.appendChild(btn1);
    btnCol2.appendChild(btn2);
    btnCol3.appendChild(btn3);
    btnCol4.appendChild(btn4);
    btnCol5.appendChild(btn5);
}



function getResult() {

    getAPI();
    if(userChoice == compChoice)
    {
        result = 'This round is a tie!';
        console.log(userChoice + ' VS ' + compChoice);
        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Paper")
    {
        result = 'Paper covers Rock:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);
        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Scissors")
    {
        result = 'Rock crushes Scissors:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Lizard")
    {
        result = 'Rock crushes Lizard:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Rock" && compChoice == "Spock")
    {
        result = 'Spock vaporizes Rock:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Paper" && compChoice == "Rock")
    {
        result = 'Paper covers Rock:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Paper" && compChoice == "Scissors")
    {
        result = 'Scissors cut Paper:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Paper" && compChoice == "Lizard")
    {
        result = 'Lizard eats Paper:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Paper" && compChoice == "Spock")
    {
        result = 'Paper Disproves Spock:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Scissors" && compChoice == "Rock")
    {
        result = 'Rock crushes Scissors:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Scissors" && compChoice == "Paper")
    {
        result = 'Scissors cut Paper:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Scissors" && compChoice == "Lizard")
    {
        result = 'Scissors decapitate Lizard:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Scissors" && compChoice == "Spock")
    {
        result = 'Spock smashes Scissors:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Lizard" && compChoice == "Rock")
    {
        result = 'Rock crushes Lizard:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Lizard" && compChoice == "Paper")
    {
        result = 'Lizard eats Paper:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Lizard" && compChoice == "Scissors")
    {
        result = 'Scissors decapitate Lizard:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Lizard" && compChoice == "Spock")
    {
        result = 'Lizard poisons Spock:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Spock" && compChoice == "Rock")
    {
        result = 'Spock vaporizes Rock:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Spock" && compChoice == "Paper")
    {
        result = 'Paper disproves Spock:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Spock" && compChoice == "Scissors")
    {
        result = 'Spock smashes Scissors:\nYou win!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }else if(userChoice == "Spock" && compChoice == "Lizard")
    {
        result = 'Lizard poisons Spock:\nComputer wins!';
        console.log(userChoice + ' VS ' + compChoice);        console.log(result);
    }
}



function BackToTitle(){
    let heading = document.createElement("h1");
    heading.className = "pageHeading";
    heading.textContent = "Rock, Paper, Scissors, Lizard, Spock";

    let menuBtnRow = document.createElement("div");
    menuBtnRow.className = "row menuBtns";

    let menuCol1 = document.createElement("div");
    menuCol1.className = "col-6 menuBtn";
    
    let menuCol2 = document.createElement("div");
    menuCol2.className = "col-6 menuBtn";

    let cpuMatchBtn = document.createElement("a");
    cpuMatchBtn.className = "btn btn-primary";
    cpuMatchBtn.textContent = "CPU Match";
    
    let pvpMatchBtn = document.createElement("a");
    pvpMatchBtn.className = "btn btn-primary";
    pvpMatchBtn.textContent = "PvP Match";

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "container";

    menuCol1.appendChild(cpuMatchBtn);
    menuCol2.appendChild(pvpMatchBtn);
    menuBtnRow.appendChild(menuCol1);
    menuBtnRow.appendChild(menuCol2);
    bodyDiv.appendChild(heading);
    bodyDiv.appendChild(menuBtnRow);
    mainMenu.appendChild(bodyDiv);

    cpuMatchBtn.addEventListener("click", function () {
        ClearScreen();
        CpuPage();
        console.log('Working');
    })
}

function ResultScreen(){
    let returnToMenuBtn = document.createElement("a");
    returnToMenuBtn.className = "btn btn-primary";
    returnToMenuBtn.textContent = "Back to Menu";
    returnToMenuBtn.addEventListener("click", function () {
        cpuMenu.innerHTML = "";
        BackToTitle();
    })

    let heading = document.createElement("h1");
    heading.className = "pageHeading";
    heading.textContent = "Results:";

    let winnerText = document.createElement("p");
    winnerText.className = "paragraphText";
    winnerText.textContent = result;

    let bodyDiv = document.createElement("div");
    bodyDiv.className = "container";

    bodyDiv.appendChild(returnToMenuBtn);
    bodyDiv.appendChild(heading);
    bodyDiv.appendChild(winnerText);
    cpuMenu.appendChild(bodyDiv);


}



// Event Listeners
cpuBtn.addEventListener("click", function () {
    ClearScreen();
    CpuPage();
    console.log('Working');
})

rulesBtn.addEventListener("click", function () {
    alert('RULES:\nRock crushes Scissors and Lizard\nPaper covers Rock and disproves Spock\nScissors cut Paper and decapitate Lizard\nLizard eats Paper and poisons Spock\nSpock smashes Scissors and vaporizes Rock');
})