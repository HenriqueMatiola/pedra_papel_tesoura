const optionImages = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")

const computerSrcImages = [
    'assets/pedra.png',
    'assets/papel.png',
    'assets/tesoura.png']

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Você",
    PP: "Empate",
    PS: "Computador",
    PR: "Você",
    SS: "Empate",
    SR: "Computador",
    SP: "Você"
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImages).indexOf(clickedImage)

    container.classList.add("start")
    resultText.textContent = "..."

    userResult.src = computerResult.src = computerSrcImages [0]

    setTimeout(() => {
        container.classList.remove("start")

        userResult.src = computerSrcImages[userIndex]

        const randomNumber = Math.floor(Math.random() * computerSrcImages.length)

        computerResult.src = computerSrcImages[randomNumber]

        const userValue = [ 'R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputerResult = userValue + computerValue
        const finalResult = winner[userComputerResult]

        if (userValue === computerResult) {
            resultText.textContent = 'Empate'
        } else {
            resultText.textContent = finalResult
        }


        // resultText.textContent = userValue === computerResult ? `Empate`: finalResult
    }, 2000)
}



optionImages.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})