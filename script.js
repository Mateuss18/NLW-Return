window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
    let nav = document.getElementById("navigation")
    if(scrollY == 0){
        nav.classList.remove("scroll")
    }else{
        nav.classList.add("scroll")
    }
}

function showBackToTopButtonOnScroll(){
    let backToTopButton = document.getElementById("backToTopButton")
    if(scrollY > 400){
        backToTopButton.classList.add("show")
    }else{
        backToTopButton.classList.remove("show")
    }
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home,
    #home img,
    #home .container,
    #servicos,
    #servicos .header,
    #servicos .card`)