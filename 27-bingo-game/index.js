var inputHTMLs = document.querySelectorAll("input")

for (var i = 0; i < inputHTMLs.length; i++) {
    var inputHTML = inputHTMLs[i];

    inputHTML.onkeypress = function (e) {
        if (e.keyCode == '13') {// only if enter is passed
            e.target.parentElement.innerHTML = e.target.value // replace input with the value of the input
        }
    }
}


var startButtonHTML = document.getElementById('start-button');

startButtonHTML.onclick = function (e) {
    var inputHTML = document.querySelectorAll('input')
    if (inputHTML.length != 0) {
        alert('Fill up the grid first!');
    } else {
        startBingo();
    }

    startBingo();
}

function startBingo() {
    var cells = document.getElementsByClassName('cell');

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];

        cell.style.backgroundColor = 'indigo';

        cell.addEventListener('click', function (e) {
            e.target.style.backgroundColor = 'red'
        });

    }
}