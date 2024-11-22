const changeBtn = document.querySelector('.change-btn')
const inputBefore = document.querySelector('.before-change')
const inputAfter = document.querySelector('.after-change')
const cost = document.querySelector('.cost')
const selectBefore = document.querySelector('#currency-before')
const selectAfter = document.querySelector('#currency-after')
const URL = 'https://api.exchangerate.host/convert?'
// 'https://api.exchangerate.host/convert?from=USD&to=EUR'

const count = () => {
    const from = selectBefore.value
    const to = selectAfter.value
    const link = `${URL}from=${from}&to=${to}`
    fetch(link)
    .then(res => res.json())
    .then(data => {
        const rate = data.info.rate
        cost.textContent = `1 ${from} = ${rate.toFixed(5)} ${to}`
        inputAfter.value = (inputBefore.value * rate).toFixed(2)
    })
}

const swap = () => {
    const tempBeforeselect = selectBefore.value
    selectBefore.value = selectAfter.value
    selectAfter.value = tempBeforeselect

    count()
}

inputBefore.addEventListener('keyup', count)
selectAfter.addEventListener('change', count)
selectBefore.addEventListener('change', count)
changeBtn.addEventListener('click', swap)
count()
