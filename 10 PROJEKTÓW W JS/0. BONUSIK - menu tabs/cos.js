const sections = document.querySelectorAll('.menu-section')
const btns = document.querySelectorAll('button')

const showInfo = (id) => {
    sections.forEach(section => section.style.display = 'none')
    btns.forEach(btn =>btn.classList.remove('menu-tab-active'))
    
    document.getElementById(id).style.display = 'block'
    
    const activeBtn = document.querySelector(`[data-id=${id}]`)
    activeBtn.classList.add('menu-tab-active')
}