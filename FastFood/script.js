let navList = document.querySelector('.nav__list');
let navItem = document.querySelectorAll('.nav__item')
let navLink = document.querySelectorAll('.nav__link');
let myBtn = document.querySelector('.btn')
let form = document.querySelector('.form')

navList.addEventListener('click', (evt) => {
    let crtEl = evt.target
    for (let el of navItem) {
        crtEl.parentElement.add('active');
        el.parentElement.remove('active');
        
    }
})

