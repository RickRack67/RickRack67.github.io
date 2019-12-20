var database = [
  {
    question: "Who is the 45th president of the United States?",
    option1: "Barack Obama",
    option2: "Donald Trump",
    option3: "J.F.Kennedy",
    option4: "Yoda",
    answer: "2"
  },
  {
    question: "Who led Germany in World War 2",
    option1: "Adolf Hitler",
    option2: "Kaeser William",
    option3: "Dwayne Johnson",
    option4: "Winston Churchill",
    answer: "1"
  },
  {
    question: "When did the Atzecs predict the world will end?",
    option1: "3019",
    option2: "1987",
    option3: "2012",
    option4: "789",
    answer: "3"
  },
  {
    question: "How old is Siri",
    option1: "7",
    option2: "8",
    option3: "9",
    option4: "3333",
    answer: "1"
  },
  {
    question: "What is a state of a volcano",
    option1: "Sleepy",
    option2: "Angry",
    option3: "Exploding",
    option4: "Extinct",
    answer: "4"
  }
];

var scoreDiv = document.querySelector(".score");
var questionDiv = document.querySelector(".question");
var option1Div = document.querySelector(".option-1-content");
var option2Div = document.querySelector(".option-2-content");
var option3Div = document.querySelector(".option-3-content");
var option4Div = document.querySelector(".option-4-content");
var optionDivs = document.querySelectorAll(".option");

var numberOfQuestions = database.length;

function generateRandomQuestionNumber() {
  var questionNumber = Math.floor(Math.random() * numberOfQuestions);
  return questionNumber;
}

var score = 0;
var answer;

function displayQuestionAndOptions() {
  var questionNumber = generateRandomQuestionNumber();
  var currentQuestion = database[questionNumber];
  questionDiv.innerHTML = currentQuestion.question;
  option1Div.innerHTML = currentQuestion.option1;
  option2Div.innerHTML = currentQuestion.option2;
  option3Div.innerHTML = currentQuestion.option3;
  option4Div.innerHTML = currentQuestion.option4;
  answer = currentQuestion.answer;
  scoreDiv.innerHTML = `Score : ${score}`;
  database.splice(questionNumber, 1);
  numberOfQuestions--;
}

displayQuestionAndOptions();

for (var i = 0; i < optionDivs.length; i++) {
  optionDivs[i].addEventListener("click", checkAnswer);
}

function checkAnswer(event) {
  if (event.target.dataset.value == answer) {
    score++;
    scoreDiv.innerHTML = `Score: ${score}`;
  }

  if (numberOfQuestions > 0) {
    displayQuestionAndOptions();
  } else {
    alert(`Your score is ${score}.`);
  }
}
