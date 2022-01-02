const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('navbar')[0]
const navItem0 = document.getElementsByClassName('nav-item')[0]
const navItem1 = document.getElementsByClassName('nav-item')[1]
const navItem2 = document.getElementsByClassName('nav-item')[2]
const navItem3 = document.getElementsByClassName('nav-item')[3]
const navItem4 = document.getElementsByClassName('nav-item')[4]
const navItem5 = document.getElementsByClassName('nav-item')[5]

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
    navBar.classList.toggle('passive', false)
})


navItem0.addEventListener('click', () => {
    navBar.classList.toggle('active', false)
    navBar.classList.toggle('passive')
})

navItem1.addEventListener('click', () => {
    navBar.classList.toggle('active', false)
    navBar.classList.toggle('passive')
})

navItem2.addEventListener('click', () => {
    navBar.classList.toggle('active', false)
    navBar.classList.toggle('passive')
})

navItem3.addEventListener('click', () => {
    navBar.classList.toggle('active', false)
    navBar.classList.toggle('passive')
})

navItem4.addEventListener('click', () => {
    navBar.classList.toggle('active', false)
    navBar.classList.toggle('passive')
})

const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})