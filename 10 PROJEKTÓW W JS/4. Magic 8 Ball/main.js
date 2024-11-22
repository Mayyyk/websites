const ball = document.querySelector('img')
const input = document.querySelector('input')
const error = document.querySelector('.error')
const respond = document.querySelector('.response')

const answers = [
    'Tak',
    'Nie',
    'Nigdy nie wiadomo...',
    'Wolisz nie wiedzieć...',
    'Też chciałbym wiedzieć...',
    'Nigdy się nie dowiesz',
    'Może zaraz się dowiesz... :)'
]

/*
funkcje:
- sprawdzanie czy input jest pusty
- sprawdzanie czy input kończu sie "?"
- wypisowanie losowej odpowiedzi
- wypisywanie errora
- czyszczenie errora
- animacja kuli
*/

const ballAnimation = () => {
    ball.classList.add('animation')
    setTimeout(emptyCheck, 1000)
}

const emptyCheck = () => {
    ball.classList.remove('animation')
    error.style.visibility = 'hidden'
    error.textContent = "g"
    respond.textContent= "g"
    respond.style.visibility = 'hidden'
    if(input.value === ""){
        showError()
    } else {
        clearError()
        questionMark(input.value)
    }
}

const showError = () => {
    error.textContent = "Musisz zadać jakieś pytanie!"
    error.style.visibility = 'visible'
}

const clearError = () => {
    error.textContent = "g"
    error.style.visibility = 'hidden'
}

const questionMark = (input) => {
    if(input.includes("?") && input.length > 1) {
        const rng = Math.floor(Math.random()*(answers.length-1))
        respond.innerHTML=`<span>Odpowiedź: </span> ${answers[rng]}`
        respond.style.visibility = 'visible'
    } else if (input.includes("?") && input.length === 1) {
        error.textContent = 'Zadaj jakieś pytanie...'
        error.style.visibility = 'visible'
    } else {
        error.textContent = 'Pytanie kończy się "?"'
        error.style.visibility = 'visible'
    }
}
















ball.addEventListener('click', ballAnimation)