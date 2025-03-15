let userScore = 0;
let compScore = 0;
// Accessing All Choicses
const choices = document.querySelectorAll(".choice");
const userScoreVal= document.getElementById("user-score");
const compScoreVal = document.getElementById("comp-score")
const msg = document.querySelector("#msg")
//Rotating Buttons on click
choices.forEach((choice) => {
  let rotated = false;
  choice.addEventListener("click", () => {
    choice.style.transition = "all 0.5s";
    choice.style.transform = rotated ? "rotate(0deg)" : "rotate(360deg)";
    rotated = !rotated;
  });
});
//Draw Game Condition
drawGame = () => {
  msg.innerText="DRAW!";
  msg.style.backgroundColor="#FF00FF";
};
//Show Winner Function
const showWinner =(userWin) => {
    if(userWin){
        userScore++
        userScoreVal.innerText = userScore;
        msg.innerText="You WIN";
        msg.style.backgroundColor="#39FF14";
    }else {
      compScore++
      compScoreVal.innerText = compScore;
        msg.innerText="🤖 WIN";
        msg.style.backgroundColor="#D8BFD8";
    }
}
//Play game Function
const playGame = (userChoice) => {
  console.log(userChoice);
let CompChoice = genCompChoice()

  console.log(`${CompChoice}`);
    
  if (userChoice === CompChoice) {
    drawGame();
  }
  else {
    userWin = true
    if(userChoice==="rock"){
        userWin = CompChoice ==="paper" ? false : true;
    }
    else if(userChoice==="paper"){
        userWin = CompChoice ==="scissors"? false : true;
    }else {
        userWin = CompChoice ==="rock"? false : true;
    }
    showWinner(userWin);
  }
};
//User Choice Function
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
//Computer Choice Function
const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  return option[Math.floor(Math.random() * 3)];
};
