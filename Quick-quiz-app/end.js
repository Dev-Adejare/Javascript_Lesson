const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

console.log(mostRecentScore);

finalScore.innerText = mostRecentScore; //this means that once we have input inside innertext, we have recentscore displaying

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});  //this means that if there's nothing in the savescorebtn, it will be unclickable & if otherwise should be clickable.