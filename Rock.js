let Choices = document.querySelectorAll(".main")
let You = document.querySelector(".Y");
let Computer = document.querySelector(".C");
let button1 = document.querySelector(".msg1");
let button2 = document.querySelector(".msg2");
let button3 = document.querySelector(".msg3");
let button4 = document.querySelector(".msg4");
let resetBtn = document.querySelector(".reset");

let userScore = 0;
let compScore = 0;

You.innerText = `${userScore}`;
Computer.innerText = `${compScore}`;

const genCompChoice = () =>{
    const options = ["Rock", "Paper", "Scissor"];
    const RandIdx = Math.floor(Math.random() * 3);
    return options[RandIdx];
}
Choices.forEach((main) => {
    main.addEventListener("click", ()=> {
    const userChoice = main.getAttribute("id");
    playGame(userChoice);

    })
});
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp Choice = ",compChoice)
    normal();
    drawGame(userChoice,compChoice);
    Winner(userChoice,compChoice);
    document.getElementsByClassName('Y').innerText = userScore;
    document.getElementsByClassName('C').innerText = compScore;
      
}
const drawGame = (userChoice,compChoice) => {
if(userChoice === compChoice){
    button2.classList.remove("hide2");
    button3.classList.add("hide3");
    button4.classList.add("hide4");
    button1.classList.add("hide1");
    }
}
const normal = () => {
button2.classList.add("hide2");
button3.classList.add("hide3");
button4.classList.add("hide4");
button1.classList.remove("hide1");
}
const Winner = (userChoice,compChoice) =>{
    if(userChoice != compChoice){
        if(userChoice === "Scissor" && compChoice === "Paper"){
            button2.classList.add("hide2");
            button3.classList.remove("hide3");
            button4.classList.add("hide4");
            button1.classList.add("hide1")
            button3.innerText =`You win ${userChoice} beats ${compChoice}`;
            userScore += 1;
            You.innerText = `${userScore}`;
        }
        else if(userChoice === "Rock" && compChoice === "Scissor"){
            button2.classList.add("hide2");
            button3.classList.remove("hide3");
            button4.classList.add("hide4");
            button1.classList.add("hide1");
            button3.innerText =`You win ${userChoice} beats ${compChoice}`;
            userScore += 1;
            You.innerText = `${userScore}`;
        }
        else if(userChoice === "Paper" && compChoice === "Rock"){
            button2.classList.add("hide2");
            button3.classList.remove("hide3");
            button4.classList.add("hide4");
            button1.classList.add("hide1");
            button3.innerText =`You win ${userChoice} beats ${compChoice}`;
            userScore += 1;
            You.innerText = `${userScore}`;
        }
           
        else if(userChoice === "Rock" && compChoice === "Paper"){
            button2.classList.add("hide2");
            button3.classList.add("hide3");
            button4.classList.remove("hide4");
            button1.classList.add("hide1");
            button4.innerText=`Comp win ${compChoice} beats ${userChoice}`;
            compScore += 1;
            Computer.innerText = `${compScore}`;
        }
        else if(userChoice === "Paper" && compChoice === "Scissor"){
            button2.classList.add("hide2");
            button3.classList.add("hide3");
            button4.classList.remove("hide4");
            button1.classList.add("hide1");
            button4.innerText=`Comp win ${compChoice} beats ${userChoice}`;
            compScore += 1;
            Computer.innerText = `${compScore}`;
        }
        else if(userChoice === "Scissor" && compChoice === "Rock"){
            button2.classList.add("hide2");
            button3.classList.add("hide3");
            button4.classList.remove("hide4");
            button1.classList.add("hide1");
            button4.innerText= `Comp win ${compChoice} beats ${userChoice}`;
            compScore += 1;
            Computer.innerText = `${compScore}`;
        }
    }
};

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    You.innerText = `${userScore}`;
    Computer.innerText = `${compScore}`;
    // Show the initial message and hide the others
    button1.classList.remove("hide1");
    button2.classList.add("hide2");
    button3.classList.add("hide3");
    button4.classList.add("hide4");
});

normal();
