const slides = document.querySelectorAll(".slide")

slides.forEach(function (slide) {
    slide.addEventListener("click", function () {
        //active vymaže vše
        deleteActiveClass()
        //active přidá na kliknutý
        slide.classList.add("active")
    })
})

function deleteActiveClass() {
    slides.forEach(function (slide) {
        slide.classList.remove("active")
    })
}
