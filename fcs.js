//create all elements of game

let mainMenu = document.createElement("div")
let GameOver = document.createElement("h2")
let GameTitle = document.createElement("h1")
let body = document.getElementById("body")
let gameDiv = document.createElement("div")
let checkButton = document.createElement("button")
let inputArea = document.createElement("input")
let labelInput = document.createElement("label")
let divDifs = document.createElement("div")
let difTitle = document.createElement("h2")
let goal = document.createElement("span")
let controls = document.createElement("div")
let timeLeft = document.createElement("progress")
    //elements to choose difficulty
let chooseDif1 = document.createElement("button")
let chooseDif2 = document.createElement("button")

let ez = false
    //set atributes to elements 

function resetAtr() {
    number = (Math.floor(Math.random() * 10)).toString();
    timeLeft2 = document.createElement("progress")
    timeLeft2.setAttribute("max", "100")
    timeLeft2.setAttribute("value", "100")
    GameOver = document.createElement("h2")
    GameTitle = document.createElement("h1")
    body = document.getElementById("body")
    gameDiv = document.createElement("div")
    checkButton = document.createElement("button")
    inputArea = document.createElement("input")
    labelInput = document.createElement("label")
    divDifs = document.createElement("div")
    difTitle = document.createElement("h2")
    goal = document.createElement("span")
    controls = document.createElement("div")
    timeLeft = document.createElement("progress")
        //elements to choose difficulty
    chooseDif1 = document.createElement("button")
    chooseDif2 = document.createElement("button")

    timeLeft.setAttribute("max", 100)
    controls.appendChild(labelInput)
    controls.appendChild(inputArea)
    controls.appendChild(checkButton)
    goal.innerText = ""


    checkButton.setAttribute("onclick", "checkInput(this)")
    inputArea.setAttribute("type", "number")
    inputArea.setAttribute("id", "input")
    chooseDif1.setAttribute("onclick", "diff1()")
    chooseDif2.setAttribute("onclick", "diff2()")
    labelInput.setAttribute("for", "input")
    inputArea.setAttribute("name", "inputPlayer")
    chooseDif1.classList.add("buttonDiff")
    chooseDif2.classList.add("buttonDiff")
    divDifs.classList.add("difs")
    difTitle.classList.add("difTitle")
    GameTitle.classList.add("title")

    //add text to elements 
    labelInput.innerText = "Write the number"
    checkButton.innerText = "Check"
    chooseDif1.innerText = "Manual check"
    chooseDif2.innerText = "Time limit check"
    difTitle.innerText = "Choose the difficulty"
    GameTitle.innerText = "Guess the number - the game"
}

mainMenu.setAttribute("class", "menu")
timeLeft.setAttribute("max", 100)
controls.appendChild(labelInput)
controls.appendChild(inputArea)
controls.appendChild(checkButton)
goal.innerText = ""
checkButton.setAttribute("onclick", "checkInput(this)")
inputArea.setAttribute("type", "number")
inputArea.setAttribute("id", "input")
chooseDif1.setAttribute("onclick", "diff1()")
chooseDif2.setAttribute("onclick", "diff2()")
labelInput.setAttribute("for", "input")
inputArea.setAttribute("name", "inputPlayer")
chooseDif1.classList.add("buttonDiff")
chooseDif2.classList.add("buttonDiff")
divDifs.classList.add("difs")
difTitle.classList.add("difTitle")
GameTitle.classList.add("title")

//add text to elements 
labelInput.innerText = "Write the number"
checkButton.innerText = "Check"
chooseDif1.innerText = "Manual check"
chooseDif2.innerText = "Time limit check"
difTitle.innerText = "Choose the difficulty"
GameTitle.innerText = "Guess the number - the game"

//create the number pattern 

let number = (Math.floor(Math.random() * 10)).toString();

//make website load

window.addEventListener("load", (event) => {
    loadSite()
})


//add pulse effect to start screen button

let a = setTimeout(() => {
    document.getElementById("start").setAttribute("onclick", "start()")
    document.getElementById("pulse").classList.add("pulse")
    document.getElementById("start").classList.add("pulse")
}, 5000)

//loading script

function loadSite() {
    let button = document.createElement("div")
    button.classList.add("expand")
    button.setAttribute("id", "pulse")
    let start = document.createElement("span")
    start.classList.add("show")
    start.innerText = "start"
    start.setAttribute("id", "start")
    button.appendChild(start)
    body.appendChild(button)
}

//hide the start button and remove it

function start() {
    document.getElementById("start").setAttribute("class", "hide")
    document.getElementById("pulse").classList.add("hide")
    document.getElementById("pulse").classList.remove("pulse")
    setTimeout(() => {
        title()
        document.getElementById("pulse").remove()
    }, 5000)
}

//show title

function title() {
    body.appendChild(GameTitle)
    body.appendChild(mainMenu)
    setTimeout(() => {
        addGameDiv()
    }, 500)
}

//add the game div to website

function addGameDiv() {
    mainMenu.appendChild(gameDiv)
    setTimeout(() => {
        addDifTitle()
    }, 500)
}

//add difficulty title to game div

function addDifTitle() {
    mainMenu.append(difTitle)
    setTimeout(() => {
        addButtons()
    }, 500)
}
//add choose difficulty buttons to game div

function addButtons() {
    divDifs.appendChild(chooseDif1)
    divDifs.appendChild(chooseDif2)
    setTimeout(() => {
        mainMenu.appendChild(divDifs)
    }, 2000)
}

//add the game UI

function showInput() {
    goal.remove()
    timeLeft.remove()
    gameDiv.appendChild(controls)
}

//add number to patter 

function addNumber() {
    number += (Math.floor(Math.random() * 10)).toString()
    showNumeber()
}

//show number for player

function showNumeber() {
    gameDiv.appendChild(goal)
    goal.innerText = number
    timeLeft.value = 100
    gameDiv.appendChild(timeLeft)
    let time = 100
    let timeout = setInterval(() => {
        if (time == 0) {
            if (ez == true) {
                showInput()
            } else {
                showInput2()
            }
            clearInterval(timeout)
        } else {
            timeLeft.value = (time)
            time = (time - 1)
        }
    }, 100)
}

//make win function

function succes() {
    controls.remove()
    inputArea.value = ""
    let good = document.createElement("h2")
    good.innerText = "Correct"
    gameDiv.appendChild(good)
    setTimeout(() => {
        good.remove()
        controls.remove()
        addNumber()
    }, 1000)
}

//make game over


function fail() {
    gameDiv.remove()
    GameOver.innerText = "You failed the memory test. The correct number was " + number
    let resetBtn = document.createElement("button")
    resetBtn.classList.add("show")
    resetBtn.innerText = "Reset"
    resetBtn.setAttribute("onclick", "reset(this)")
    body.appendChild(GameOver)
    body.appendChild(resetBtn)

}

//reset game on game obver

function reset(x) {
    x.classList.add("hide")
    GameOver.classList.add("hide")
    setTimeout(() => {
        resetAtr()
        title()
    }, 2000)
}