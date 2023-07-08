let inputColor = document.getElementById("input-color")
let generateColor = document.getElementById("generate-color")
let randomColor = document.getElementById("random-color")

generateColor.addEventListener("click", e => {
    if (inputColor.value != "") document.body.style.backgroundColor = inputColor.value
    inputColor.value = ""
})

randomColor.addEventListener("click", e => {
    let randomColorCode = random_color_generator()
    document.body.style.backgroundColor = randomColorCode
    inputColor.value = randomColorCode
})

// Generating random color in HSLA format
function random_color_generator() {
    let hue = Math.floor(Math.random() * 360)
    let saturation = Math.floor(Math.random() * 100)
    let lightness = Math.floor(Math.random() * 100)
    let alpha = Math.random().toFixed(2)
    let color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
    return color
}