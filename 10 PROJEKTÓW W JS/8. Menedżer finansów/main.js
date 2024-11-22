const addBtn = document.querySelector('.add-btn')
const deleteAllBtn = document.querySelector('.delete-all-btn')
const money = document.querySelector('.money-amount')
const whiteStyleBtn = document.querySelector('.white')
const darkStyleBtn = document.querySelector('.dark')
const incomeList = document.querySelector('.income-ul')
const expensesList = document.querySelector('.expenses-ul')
const inputName = document.querySelector('.name')
const inputAmount = document.querySelector('.amount-input')
const selectCategory = document.querySelector('.category')
const saveBtn = document.querySelector('.save-btn')
const cancelBtn = document.querySelector('.cancel-btn')
const popup = document.querySelector('.popup')
const error = document.querySelector('.error')
const white = document.querySelector('.white')
const dark = document.querySelector('.dark')

let countMoney = 0
let ID = 0
let root = document.documentElement
// style, pieniądze, usuwanie pojedyczne

const deleteAll = () => {
    incomeList.textContent = ''
    expensesList.textContent = ''
    money.textContent = '0'
}

const addTransactions = () => {
    popup.style.visibility = 'visible'
    selectCategory.value = '0'
}

const cancelTransaction = () => {
    popup.style.visibility = 'hidden'
    error.style.visibility = 'hidden'
    inputName.value = ''
    inputAmount.value = ''
    selectCategory.value = '0'
}

const saveTransaction = () => {
    
    if(inputName.value !== '' && inputAmount.value !== '' && selectCategory.value !== '0'){
        error.style.visibility = 'hidden'
        createTransaction()
    }else{
        error.style.visibility = 'visible'
    }
}

const createTransaction = () => {

    const newLi = document.createElement('li')
    newLi.setAttribute('id', ID)
    let i 

    switch(selectCategory.value) {
        case "Przychód":
            i = `<i class="fa-solid fa-money-check-dollar"></i>`
                break
        case "Jedzenie":
            i = `<i class="fa-solid fa-utensils"></i>`
                break
        case "Zakupy":
            i = `<i class="fa-solid fa-cart-shopping"></i>`
                break
        case "Kino":
            i = `<i class="fa-solid fa-film"></i>`
                break

    }
    if(inputAmount.value[0] === '-'){
        newLi.innerHTML = `
        ${i} ${inputName.value} <span>${inputAmount.value.toString().slice(1)}</span><span> zł</span><button class="delete-btn" onclick="deleteTransaction(${ID})"><i class="fa-solid fa-x"></i></button>`
        expensesList.appendChild(newLi)
    } else {
        newLi.innerHTML = `
        <i class="fa-solid fa-money-check-dollar"></i> ${inputName.value} <span>${inputAmount.value.toString().slice(0)}</span><span> zł</span> <button class="delete-btn" onclick="deleteTransaction(${ID})"><i class="fa-solid fa-x"></i></button onclick='deleteTransaction(e)'>`
        incomeList.appendChild(newLi)
    }

    ID++

    cancelTransaction()
}

const moneyShow = () => {

    let countMoney = 0

    if(incomeList.children.length !== 0){
        for(const li of incomeList.children){
            let span = Number(li.querySelector('span').textContent)
            countMoney = countMoney + span
        }
    }

    if(expensesList.children.length !== 0){
        for(const li of expensesList.children){
            let span = Number(li.querySelector('span').textContent)
            countMoney = countMoney - span
        }
    }

    money.textContent = countMoney
}

const deleteTransaction = id => {
    const transactionToDelete = document.getElementById(id)
    transactionToDelete.parentElement.removeChild(transactionToDelete)
    moneyShow()
}

const lightStyle = () => {
    root.style.setProperty('--first-color', '#F9F9F9')
    root.style.setProperty('--second-color', '#13161F')
    root.style.setProperty('--border-color', 'rgba(0,0,0,.3)')
}

const darkStyle = () => {
    root.style.setProperty('--first-color', '#13161F')
    root.style.setProperty('--second-color', '#F9F9F9')
    root.style.setProperty('--border-color', 'rgba(255,255,255,.4)')
}

deleteAllBtn.addEventListener('click', deleteAll)
addBtn.addEventListener('click', addTransactions)
cancelBtn.addEventListener('click', cancelTransaction)
saveBtn.addEventListener('click', saveTransaction)
saveBtn.addEventListener('click', moneyShow)
white.addEventListener('click', lightStyle)
dark.addEventListener('click', darkStyle)