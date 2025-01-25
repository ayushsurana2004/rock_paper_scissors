let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#computer-score");

const generateComputerChoice=()=>{
    let option=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game draw.";
    msg.style.backgroundColor="darkcyan";
}

function showWinner(userWin,userchoice,compChoice) {
    if (userWin) {
        userScore++;
        user_score.innerText=userScore;
        console.log("You win");
        msg.innerText=`You Win!  Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        comp_score.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You lose!  ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userchoice) =>{
    console.log("User choice is : ",userchoice);
    const compChoice=generateComputerChoice();
    console.log("Computer choice is : ",compChoice);

    if(userchoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock")
            userWin=compChoice==="paper"?false:true;
        else if(userchoice==="paper")
            userWin=compChoice==="scissors"?false:true;
        else
            userWin=compChoice==="rock"?false:true;
        showWinner(userWin,userchoice,compChoice);
    }
    

}

choice.forEach((choices)=>{
    console.log(choices);
    choices.addEventListener("click",()=>{
        const userchoice=choices.getAttribute("id");
        console.log(userchoice," was selected");
        playGame(userchoice);
    })
})