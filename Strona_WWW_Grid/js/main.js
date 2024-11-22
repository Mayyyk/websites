const navMobile = document.querySelector(".nav-mobile")
const navBtn = document.querySelector(".hamburger")
const footerYear = document.querySelector('.footer_year');
const navItems = document.querySelectorAll('.nav_item')


// funkcje

const handleNav = () => {
    navBtn.classList.toggle("is-active")
    navMobile.classList.toggle("nav-mobile--active")
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

function navHide () {
    navMobile.classList.remove("nav-mobile--active")
}

// wywoływanie


handleCurrentYear();

window.addEventListener('scroll', navHide);
navBtn.addEventListener("click", handleNav)