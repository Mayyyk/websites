document.addEventListener('DOMContentLoaded', function(){

    const nav = document.querySelector(".navbar")

    function addShadow() {
        if(window.scrollY >= 200){
            nav.classList.add('shadow_bg')
        }else {
            nav.classList.remove('shadow_bg')
        }
    }

window.addEventListener('scroll', addShadow)











})