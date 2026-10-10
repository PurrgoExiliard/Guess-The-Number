// hide other text than clicked button and then hide this button
        function diff1() {
            body.appendChild(gameDiv)
            chooseDif1.classList.add("force")
            chooseDif2.classList.add("hideD")
            GameTitle.classList.add("hideD")
            difTitle.classList.add("hideD")
            ez = true
            help = false
            err.classList.add("hide")
            controls.appendChild(checkButton)
            timeLeft2.remove()
            setTimeout(() => {
                chooseDif1.remove()
                chooseDif2.remove()
                GameTitle.remove()
                difTitle.remove()
                divDifs.remove() 
                err.remove()
                showNumeber()
            }, 2000);

        }



//check the player input 

            function checkInput(playerInput) {
                console.log(inputArea.value.toString(),number.toString())
                if (inputArea.value.toString() == number.toString()){
                    succes()
                } else {
                    fail()
                }

            }