var scoreHTML = document.querySelector(".score")
var firstCheeseHTML = document.querySelector(".first-cheeses")
var secondCheeseHTML = document.querySelector(".second-cheeses")
var answerHTML = document.querySelector(".answer")

var score = 0
var counter = 0

function generateRandomNumber() {
    var number = Math.ceil(Math.random() * 10)
    return number
}

function displayQuestion() {
    answerHTML.focus()
    var number1 = generateRandomNumber()
    var number2 = generateRandomNumber()
    answer = number1 + number2
    for (var i = 0; i < number1; i++) {
        var image = document.createElement("img")
        image.src = "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43c0ca.png"
        firstCheeseHTML.appendChild(image)
    }
    for (var i = 0; i < number2; i++) {
        var image = document.createElement("img")
        image.src = "https://www.stickpng.com/assets/thumbs/580b57fbd9996e24bc43c0ca.png"
        secondCheeseHTML.appendChild(image)
    }
}



displayQuestion()

answerHTML.addEventListener('keyup', handleAnswerInput)

function handleAnswerInput() {
    if (event.key == "Enter") {

        counter += 1
        if (answer == answerHTML.value) {
            score += 1
        }
        answerHTML.value = ""
        scoreHTML.innerHTML = `Score: ${score}/${counter}`
        while (firstCheeseHTML.firstChild) {
            firstCheeseHTML.removeChild(firstCheeseHTML.firstChild)
        }
        while (secondCheeseHTML.firstChild) {
            secondCheeseHTML.removeChild(secondCheeseHTML.firstChild)
        }
        displayQuestion()
    }
};