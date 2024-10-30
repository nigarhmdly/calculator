const display = document.getElementById('display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.getElementById('clear')
const calculate = document.getElementById('calculate')


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        display.value += operator.innerText
    })
})

numbers.forEach(number => {
    number.addEventListener('click',() => {
        display.value += number.innerText
    })
});

calculate.addEventListener('click',() => {
    display.value = eval(display.value)
})

clear.addEventListener('click',() => {
    display.value = ''
})