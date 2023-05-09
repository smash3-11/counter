let num = document.getElementById("num")
let random = document.getElementById("random")
let dicrease = document.getElementById("dicrease")
let resert = document.getElementById("resert")
let increase = document.getElementById("increase")

let count = 0

random.addEventListener("click", () => {
    count = Math.floor(Math.random() * 200) - 100
    num.textContent = count
})

// Math.floor(Math.random() * (max - min + 1)) + min;
dicrease.addEventListener("click", () => {
 count--
 num.textContent = count
})

resert.addEventListener("click", () => {
    count = 0
    num.textContent = count
})

increase.addEventListener("click", () => {
    count++
    num.textContent = count
})

