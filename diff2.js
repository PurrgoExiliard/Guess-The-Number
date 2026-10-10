// hide other text than clicked button and then hide this button
function diff2() {
    chooseDif2.classList.add("force")
    chooseDif1.classList.add("hideD")
    GameTitle.classList.add("hideD")
    difTitle.classList.add("hideD")
    ez = false
    setTimeout(() => {
        chooseDif1.remove()
        chooseDif2.remove()
        GameTitle.remove()
        difTitle.remove()
        divDifs.remove()
        hardDiff()
        showNumeber()
    }, 2000);

}

//REPAIR LATER
let err = document.createElement("span")
err.innerText = "This mode is out of order. Use manual check instead"
err.classList.add("err")
let help = false

// function diff2() {
//     if (help == false) {
//         body.appendChild(err)
//         help = true
//     }

// }
//remove check button from controls and add timeout instead


let timeLeft2 = document.createElement("progress")
timeLeft2.setAttribute("max", "100")
timeLeft2.setAttribute("value", "100")

function hardDiff() {
    checkButton.remove()

}

function showInput2() {

    goal.remove()
    timeLeft.remove()
    timeLeft2.value = 100
    controls.appendChild(timeLeft2)
    gameDiv.appendChild(controls)
    let time3 = 100

    let timeout3 = setInterval(() => {
        if (time3 == 0) {
            checkInput()
            clearInterval(timeout3)

        }
        timeLeft2.value = time3
        time3--

        console.log(time3)
    }, 100)
}