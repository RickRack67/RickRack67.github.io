var buttonsHTML = document.querySelectorAll("button")
for (var i = 0; i < buttonsHTML.length; i++) {
    buttonsHTML[i].addEventListener('click', handleInput)
}

var scoreRight = 0
var scoreWrong = 0

var correctHTML = document.querySelectorAll(".correct")

function handleInput() {
    if (event.target.classList[0] == "wrong") {
        event.target.style.color = "rgb(209, 36, 36)"
        scoreRight += 1
    }
    else if (event.target.classList[0] == "correct") {
        event.target.style.color = "green"
        scoreWrong += 1
    }
}


var correctCounter = document.getElementById('correct-counter')
correctCounter.innerHTML = scoreRight

var wrongCounter = document.getElementById('wrong-counter')
wrongCounter.innerHTML = scoreWrong