const settingBtn = document.querySelector('.settings-btn')
const saveBtn = document.querySelector('.save')
const currentEvent = document.querySelector('.event')
const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const eventSettings = document.querySelector('#event')
const daySettings = document.querySelector('#day')
const monthSettings = document.querySelector('#month')
const yearSettings = document.querySelector('#year')
const link = document.querySelector('#link')
const settings = document.querySelector('.settings')
const img = document.querySelector('.img')

let dateTo

const settingsShow = () => {
    settings.classList.add('animation')
}

const settingsSave = () => {
    settings.classList.remove('animation')
    currentEvent.textContent = `${eventSettings.value} za:`
    img.style.backgroundImage = `url("${link.value}")`
}

const dateCount = () => {
    const dateFrom = new Date()
    const dateTo = new Date(`${monthSettings.value}/${daySettings.value}/${yearSettings.value}`)
    const differ = dateTo.getTime() - dateFrom.getTime()

    const daystoShow = Math.floor(differ/(1000 * 60 * 60 * 24))
    const hourstoShow = Math.floor(differ/(1000 * 60 * 60)) % 24
    const minutestoShow = Math.floor(differ/(1000 * 60)) % 60
    const secondstoShow = Math.floor(differ/(1000)) %60

    days.textContent = daystoShow
    hours.textContent = hourstoShow
    minutes.textContent = minutestoShow
    seconds.textContent = secondstoShow

}

dateCount
setInterval(dateCount, 1000)

settingBtn.addEventListener('click', settingsShow)
saveBtn.addEventListener('click', settingsSave)
