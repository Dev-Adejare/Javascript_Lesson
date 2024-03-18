// Get Elements with DOM ----> Create an array of Questions.
const question = document.getElementById('question');
const progressText = document.getElementById ('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const game = document.getElementById('game');
const loader = document.getElementById('loader');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let currentCounter = 0;
let availableQuestion = [];

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
)
.then((res) => {
  return res.json();
})
.then((loadingQuestions) => {
  questions = loadingQuestions.results.map((loadingQuestion) => {
    const formattedQuestion = {
      question: loadingQuestion.question,
    };

    const answerChoices = [...loadingQuestion.incorrect_answers]; //this create a new array that will specify all the incorrect answer & put inside an array
   
    formattedQuestion.answer = Math.floor(Math.random() * answerChoices.length) + 1;  //
    
    answerChoices.splice(
      formattedQuestion.answer - 1,
      0,
      loadingQuestion.correct_answer
    );                                //splice is use here to insert the correct answer into the answer choices, answechoices is a variable

    answerChoices.forEach((choice, i) => {
      formattedQuestion["choice" + (i + 1)] = choice;   // i + 1 is added here to let us know that the choice start from 1-4 
    });                                        // here we map through the answer choices to get the correct answer from the incorrect answers

    return formattedQuestion;
  });

 
  startGame();
 
})
.catch((err) => {
  console.log(err);
});
 
 
  

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 7;

// Start Quiz

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    // console.log(availableQuestion);
    

    game.classList.remove("hidden");
    loader.classList.add("hidden");
    getNewQuestion();
  };
    

const getNewQuestion = () => {
  if(availableQuestion.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./end.html")
  }                                              //
    
  questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    question.innerText = currentQuestion.question

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    })
    availableQuestion.splice(questionIndex, 1);
    acceptingAnswer = true;

}

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    e.preventDefault();

    if(!acceptingAnswer) return;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = 
    selectedAnswer == currentQuestion.answer ? "correct" : "inCorrect";  //this if the answer we slect is correct and if yes it'll apply the correct choice (green color) to the element & if no it apply red color

    if(classToApply === "correct") {
      incrementScore(CORRECT_BONUS);  // this add the bonus 10
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion()
    },1000)
    

  });
});

const incrementScore = (num) => {
  score +=num;
  scoreText.innerText = score  // this is what shows the score num on the quiz app
}

// startGame();


