const user = document.querySelector('#username')
const email = document.querySelector('#email')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const clear = document.querySelector('.clear')
const send = document.querySelector('.send')
const popup = document.querySelector('.popup')

const error = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text')
    formBox.classList.add('error')
    errorMsg.textContent = msg;
    
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
        if(el.value === "") {
            error(el, el.placeholder)
        } else {
            clearError(el)
            checkLen(user, 3)
            checkLen(pass, 8)
            validateEmail(email)
            sendAvailable()
        }
    })
}

const passEqual = (pass1, pass2) => {
    if(pass1 !== pass2){
        error(pass2, 'Hasła nie zgadzają się!')
    }
}

const checkLen = (input, min) => {
    if(input.value.length < min){
        error(input, `${input.previousElementSibling.textContent.slice(0, -1)} składa się z min. ${min} znaków`)
    }
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i

    if(re.test(email.value)){
        clearError(email)
    }else{
        error(email, 'Podaj poprawny adres e-mail...')
    }
};

const sendAvailable = () => {
    const inputs = document.querySelectorAll('.form-box')
    let count = 0

    inputs.forEach(div => {
        if(div.classList.contains('error'))
        count++
    })

    if(count === 0){
        popup.classList.add('show-popup')
    }

    [user, email, pass, pass2].forEach(el => {
        el.value=''
        clearError(el)
    })
}

clear.addEventListener('click', e => {
    e.preventDefault();
    [user, email, pass, pass2].forEach(el => {
        el.value=''
        clearError(el)
    })
})

send.addEventListener('click', e => {
    e.preventDefault();
    checkForm([user, email, pass, pass2])
    passEqual(pass, pass2)
})


