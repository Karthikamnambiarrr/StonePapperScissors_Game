let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");


const genComp=()=>{
    let options = ["rock","paper","scissor"];
    let i = Math.floor(Math.random()*options.length);
    return options[i];
    
}
choices.forEach(choice=>{
    choice.addEventListener("click",()=>{
     const userChoice = choice.getAttribute("Id");
     playGame(userChoice)
    })
})

const gameDraw=()=>{
    msg.innerHTML=`Game is Draw.Play Again`;
    msg.style.backgroundColor="blue";

}

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        msg.innerText=`You win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore+=1;
    }
    else{
        msg.innerText=`You loose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore+=1
    }
}

const showScores=()=>{
    document.querySelector("#user-score").innerText=userScore;
    document.querySelector("#comp-score").innerText=compScore;
}



const playGame=(userChoice)=>{
    console.log("User choice = ",userChoice);
    compChoice = genComp();
    console.log("Computer choice = ",compChoice);
    if (userChoice===compChoice){
        gameDraw()
    }
    else{
        userWin=true;
        if(userChoice=="rock"){
            userWin = compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin = compChoice=="scissor"?false:true;
        }
        else{
            userWin = compChoice=="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
        showScores();
    }
}








