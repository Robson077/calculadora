function insertValue(num) {
    const input = document.getElementById("inputValue").value
    document.getElementById("inputValue").value = input + num
}

function calculate() {
    const input = document.getElementById("inputValue").value

    document.getElementById("inputValue").value = eval(input)
}

function clearInput() {
    document.getElementById("inputValue").value = ""
}

function invert() {
    calculate()

    const input = document.getElementById("inputValue").value
    document.getElementById("inputValue").value = input * -1
}

function percent() {
    
    const input = document.getElementById("inputValue").value
    document.getElementById("inputValue").value = input / 100
}