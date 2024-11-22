const input = document.querySelector('input')
const items = document.querySelectorAll('li')

const compare = () => {
    const check = (item) => {
        if (!item.textContent.toLowerCase().includes(input.value)){
            item.classList.add('hide')
        }
    }

    items.forEach(item => check(item))

}

const reset = () => {
    const check = (item) => {
        if (item.textContent.toLowerCase().includes(input.value)){
            item.classList.remove('hide')
        }
    }

    items.forEach(item => check(item))

}

input.addEventListener('keyup', reset)
input.addEventListener('keyup', compare)