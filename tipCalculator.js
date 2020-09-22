const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const peopleInput = document.querySelector('#people')
const totalCost = document.querySelector('#totalCost')

function calculateTip() {
    const billValue = parseInt(billInput.value)
    const tipValue = tipInput.value
    const peopleValue = peopleInput.value
    const tipAmount = billValue * tipValue / 100
    const total = tipAmount/peopleValue
    const cost = billValue + tipAmount
    display.innerHTML = total.toFixed(2) /* toFixed changes number to string and also limits number to # of decimals */
    totalCost.innerHTML = cost
}

calculateTip()

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
peopleInput.addEventListener('input', calculateTip)