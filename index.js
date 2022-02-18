let menuList = document.getElementById('menu-list');

menuList.style.width = "0px";

function toggleMenu() {
    if (menuList.style.width == '0px') {
        menuList.style.width = '70%';
    }
    else {
        menuList.style.width = '0px';
    }
}

let ItemsInNavList = document.querySelectorAll('.nav-list a');

ItemsInNavList.forEach( (item) => {
    item.addEventListener('click', () => {
        if (menuList.style.width = '70%') menuList.style.width = '0px';
    })
})