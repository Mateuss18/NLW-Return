window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(servicos)
    activeMenuAtCurrentSection(about)
    activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPessaedTargetline = sectionEndsAt <= targetLine

    const sectionBoundaries = 
    sectionTopReachOrPassedTargetline && !sectionEndPessaedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
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

function sayMyName() {
    console.log(name)
}

sayMyName("Pao")