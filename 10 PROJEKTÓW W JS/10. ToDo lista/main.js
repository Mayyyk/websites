let topInput = document.querySelector('.top__input')
let addBtn = document.querySelector('.top__add-btn')
let topError = document.querySelector('.top__error')
let bodyError = document.querySelector('.body__error')
let popupError = document.querySelector('.popup__error')
let popup = document.querySelector('.popup')
let popupInput = document.querySelector('.popup__input')
let saveBtn = document.querySelector('.popup__save-btn')
let cancelBtn = document.querySelector('.popup__cancel-btn')
let ulList = document.querySelector('.body__ul')
let liItems = document.getElementsByClassName('body__li')
let confirmBtns = document.getElementsByClassName('body__confirm-btn')
let editBtns = document.getElementsByClassName('body__edit-btn')
let deleteBtns = document.getElementsByClassName('body__delete-btn')
let toDoToEdit

let ID = 5

const checkTask = () => {
    if(topInput.value !== ''){
        topError.textContent = ''
        addTask()
    } else {
        topError.textContent = 'Podaj treść zadania!'
    }
}

const addTask = () => {
    const newLi = document.createElement('li')
    newLi.classList.add('body__li')
    newLi.setAttribute('id', `${ID}`)
    newLi.innerHTML = `
    <span class="body__text">${topInput.value}</span>
    <div class="body__box">
        <button class="body__confirm-btn"><i class="fa-solid fa-check"></i></button>
        <button class="body__edit-btn">edit</button>
        <button class="body__delete-btn"><i class="fa-solid fa-x"></i></button>
    </div>
    `
    ID++
    ulList.prepend(newLi)
}

const saveTaskChange = () => {
    console.log('jajo')
    console.log(toDoToEdit.querySelector('span').textContent)
    console.log(popupInput.value);

    if(popupInput.value !== ''){
        popupError.style.display = 'none'
        popup.style.display = 'none'
        toDoToEdit.querySelector('span').textContent = popupInput.value
    }else {
        popupError.style.display = 'block'
    }
}

const cancelTaskChange = () => {
    popupInput.value = ''
    popup.style.display = 'none'
}


















addBtn.addEventListener('click', checkTask)
cancelBtn.addEventListener('click', cancelTaskChange)
saveBtn.addEventListener('click', saveTaskChange)


for (let confirmBtn of confirmBtns){
    confirmBtn.addEventListener('click', function(e){
        e.target.parentElement.previousElementSibling.classList.toggle('body__text--done')
    })
}

for (let deleteBtn of deleteBtns){
    deleteBtn.addEventListener('click', function(e){
       console.log(e.target.parentElement.parentElement);
       e.target.parentElement.parentElement.remove()
    })
}

for (let editBtn of editBtns){
    editBtn.addEventListener('click', function(e){
        toDoToEdit = e.target.closest('li')
        console.log(toDoToEdit)
        popup.style.display = 'block'
        return toDoToEdit
    })
}
