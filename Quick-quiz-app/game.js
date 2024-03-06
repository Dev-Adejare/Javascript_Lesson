// Get Elements with DOM ----> Create an array of Questions.
const question = document.getElementById('question');
const progressText = document.getElementById ('progressText');
//score, progressBarFull, game, choice-text
const scoreText = document.getElementsByClassName('score');
const progressBarFull = document.getElementById('progressBarFull');
const game = document.getElementById('game');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let currentCounter = 0;
let availavbleQuestion = [];

let Questions = [
    
]