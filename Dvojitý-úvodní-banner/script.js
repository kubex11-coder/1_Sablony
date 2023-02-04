const containerSlider = document.querySelector(".container-slider")
const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")
const arrowUp = document.querySelector(".arrow-up")
const arrowDown = document.querySelector(".arrow-down")
const slidesLength = slideRight.querySelectorAll("div").length

let numberActiveSlide = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

arrowUp.addEventListener("click", () => {
    changeSlide("up")
})

arrowDown.addEventListener("click", () => {
    changeSlide("down")
})

function changeSlide(direction) {
    if (direction === "up") {
        numberActiveSlide++
        if (numberActiveSlide >= slidesLength) {
            numberActiveSlide = 0
        }
    } else {
        numberActiveSlide--
        if (numberActiveSlide < 0) {
            numberActiveSlide = slidesLength - 1
        }
    }

    // namísto 100vh se dá použít třeba konkrétní počet px - např {numerActiveSlide * 500}px - pokud nebudu mít banner na height 500px a né přes 100vh
    slideRight.style.transform = `translateY(-${numberActiveSlide * 100}vh)`

    slideLeft.style.transform = `translateY(${numberActiveSlide * 100}vh)`
}
