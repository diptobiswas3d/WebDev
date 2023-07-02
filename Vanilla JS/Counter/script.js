let minus = document.getElementById("btn-minus")
let reset = document.getElementById("btn-reset")
let plus = document.getElementById("btn-plus")
let score = document.getElementById("score")

let counter = 0


minus.addEventListener("click", e => {
    counter -= 1
    score.innerHTML = counter
})
reset.addEventListener("click", e => {
    counter = 0
    score.innerHTML = counter
})
plus.addEventListener("click", e => {
    counter += 1
    score.innerHTML = counter
})
