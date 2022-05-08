function onScroll() {
    let nav = document.getElementById("navigation")
    if(scrollY == 0){
        nav.classList.remove("scroll")
    }else{
        nav.classList.add("scroll")
    }
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

function openMenu() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.add("menu-expanded")
}