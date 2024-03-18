const highScores = JSON.parse(localStorage.getItem("highScore")) || [];
const highScoresList = document.getElementById("highScoresList");
const list = document.createElement("li"); // here, we create list so as for it to appear instead of creating it in highscore html

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class= "high-score">${score.name} - ${score.score}</li>`; //here, we create score.name to display the name of the player and score.score to display the scores number
  })
  .join(""); //score here is just a varaible name, we can use anything.
