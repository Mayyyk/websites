const button = document.querySelector('button')
const price = document.querySelector('.price')
const people = document.querySelector('.people')
const tip = document.querySelector('.tip')
const erorr = document.querySelector('.error')
const text = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')


const count = (params) => {
    console.log(price.value);
    console.log(parseInt(price.value));
    const sum = (parseFloat(price.value) + (parseFloat(price.value)*parseFloat(tip.value)))/parseInt(people.value)

    cost.textContent = sum.toFixed(2)
    text.style.display = 'block'
}

const checkInputs = () => {
    if(price.value == 0 || people.value == 0) {
        erorr.style.display = 'block'
        erorr.textContent = "Uzupełnij wszystkie pola!"
        text.style.display = 'none'
    } else {
        erorr.style.display = 'none'
        erorr.textContent = ""
        count()
    }
}

button.addEventListener('click', checkInputs)
