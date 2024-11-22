const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')
const deleteBtns = document.getElementsByClassName('note-delete')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const popup = document.querySelector('.popup')
const select = document.querySelector('select')
const textarea = document.querySelector('textarea')
const error = document.querySelector('.error')
const notesBox = document.querySelector('.notes-box')

let noteCount
let cardID = 0

const showPopup = () => {
    popup.style.visibility = 'visible'
}

const closePopup = () => {
    popup.style.visibility = 'hidden'
}

const saveNote = () => {
    if(textarea.value !== "" && select.value !== 'choose'){
        error.style.visibility = 'hidden'
        createNote(textarea.value, select.value)
        closePopup()
        textarea.value = ''
    }else{
        error.style.visibility = 'visible'
    }
    select.value = 'choose'
}

const createNote = (text, type) => {
    noteCount = notesBox.childElementCount + 1

    const note = document.createElement('div')
    const noteHeading = document.createElement('div')
    const noteTitle = document.createElement('h3')
    const noteDelete = document.createElement('button')
    const noteBody = document.createElement('div')
    const noteText = document.createElement('p')
    const xIcon = document.createElement('i')

    note.classList.add('note')
    note.classList.add(type)
    noteHeading.classList.add('note-heading')
    noteTitle.classList.add('note-title')
    noteDelete.classList.add('note-delete')
    noteDelete.setAttribute('onclick', `deleteNote(${cardID})`)
    noteBody.classList.add('note-body')
    noteText.classList.add('note-text')
    xIcon.classList.add('fa-solid')
    xIcon.classList.add('fa-x')

    noteTitle.textContent = `Notatka #${noteCount}`
    noteText.textContent = text

    noteDelete.append(xIcon)
    noteHeading.append(noteTitle, noteDelete)
    noteBody.appendChild(noteText)
    note.append(noteHeading, noteBody)
    note.setAttribute('id', cardID)
    notesBox.appendChild(note)

    cardID++
}

const deleteNote = id => {
    console.log(id);
    const noteToDelete = document.getElementById(id)
    console.log(noteToDelete);
    notesBox.removeChild(noteToDelete)
    numNotes()
}

const numNotes = () => {
    const allNotes = document.getElementsByClassName('note')
    let recount = 1

    for (let note of allNotes){
        const title = note.querySelector('h3')
        title.textContent = `Notatka #${recount}`
        recount++
    }
}

const deleteAll = () => {
    notesBox.textContent = ''
}

addBtn.addEventListener('click', showPopup)
cancelBtn.addEventListener('click', closePopup)
saveBtn.addEventListener('click', saveNote)
deleteAllBtn.addEventListener('click', deleteAll)