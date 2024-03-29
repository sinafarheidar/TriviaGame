// Questions for the quiz
var questions = [
    {
      title: "Who scored the most points in an NBA game?:",
      choices: ["Kobe Bryant", "Wilt Chamberlain", "Michael Jordan", "Kevin Durant"],
      answer: "Wilt Chamberlain"
    },
    {
      title: "What year did Allen Iverson win MVP?:",
      choices: ["2001", "2006", "1996", "2010"],
      answer: "2001"
    },
    {
        title: "How many points did Kobe score his last game?:",
        choices: ["27", "60", "43", "15"],
        answer: "60"
      },
      {
        title: "Who was the first team to blow a 3-1 lead in the Finals?:",
        choices: ["Clippers", "Warriors", "Kings", "Cavaliers"],
        answer: "Warriors"
      },
      {
        title: "Who was the NBA's youngest MVP?:",
        choices: ["Gordon Hayward", "LeBron James", "Derrick Rose", "Stephen Curry"],
        answer: "Derrick Rose"
      },
  ];
  // End of questions for the quiz


  var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var resultEl = document.querySelector("#answerResult");
var round = 0;
var score = 0;
score = document.querySelector("#score");

var secondsLeft = 16;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left on this question";

//     if(secondsLeft == 0) {
//       sendMessage();
//       round++;
//       clearInterval(timerInterval);
//       secondsLeft = 16;
//       newQuestion();
//       setTime();
//     }
//   }, 1000);
// }



function sendMessage() {
  timeEl.textContent = " ";

  var h2El = document.createElement("h2");

  h2El.textContent = "You're out of time!"
  mainEl.appendChild(h2El);

}


// Displays questions 
function newQuestion() {

  // setTime();  
        questionEl.innerHTML = "";
        answersEl.innerHTML = "";
        var question = questions[round].title;
    
        var h1El = document.createElement("h1");
        h1El.textContent = question;
        questionEl.appendChild(h1El);

        for (var i = 0; i < questions[round].choices.length; i++) {
          var btnEl = document.createElement("button");
          btnEl.textContent = questions[round].choices[i];
          btnEl.setAttribute("data-index", round);
          btnEl.setAttribute("class", "answerOption btn btn-outline-secondary col-md-12");
          answersEl.appendChild(btnEl);
        }
        // return window.location.assign("end.html")
        
}

// Event listener for clicking answer options
document.addEventListener("click", function(e) {
  if (event.target.classList.contains("answerOption")) {
    var guess = event.target.textContent;
    var correct = guess === questions[round].answer;
  
    if (correct) {
      score.textContent++;
     resultEl.innerHTML = "";
     resultEl.innerHTML = "Correct!";
       } else {
        resultEl.innerHTML = "";
        resultEl.innerHTML = "WRONG!";
    }




    
    
    round++;
    newQuestion();
    // setTime();
  }
  
})

newQuestion();
