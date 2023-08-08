const heading = document.querySelector("#text")
const speedOr = document.querySelector("#speed")
const text = "Vypisujeme tento text"

let idLetter = 1
let delay = 500 / speedOr.value

let printText = function () {
    heading.textContent = text.slice(0, idLetter)
    idLetter++

    // Pokud je idLetter větší než délka text, vyresetujeme
    if (idLetter > text.length) {
        idLetter = 1
    }

    // Spustí znovu funkci printText se zpožděním
    setTimeout(printText, delay)
}

printText()

speedOr.addEventListener("input", (e) => {
    delay = 500 / e.target.value
})
