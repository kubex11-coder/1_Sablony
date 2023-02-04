const input = document.querySelector(".input")
const search = document.querySelector(".search")
const button = document.querySelector(".btn")

button.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
})
