let navItem = document.querySelectorAll('.nav__item')
let navLink = document.querySelectorAll('.nav__link');
let navList = document.querySelectorAll('.nav__list')
let BtnList = document.querySelector('.btn')
let Myform = document.querySelector('.form')
let OrderNow = document.querySelector('#OrderNow')
let pop = document.querySelector('#popup__msg')

for (let item of navItem) {
    item.addEventListener('click', (evt) => {
        evt.preventDefault()
        for (let item of navItem) {
            item.classList.remove('active')
            console.log(item)
        }
        item.classList.add('active')
    })
}

navList.addEventListener('click', function (event) {
    let currentElement = event.target
    currentElement.parentElement.addEventListener()
})

OrderNow.addEventListener('click', function (evt) {
    OrderNow.preventDefault()
    Myform.classList.add('active')
})


