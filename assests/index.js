const navbarBtn = document.querySelector(`.fa-bars`)
const closedBtn = document.querySelector(`.close-btn`)

navbarBtn.addEventListener(`click`, function () {
    document.querySelector(`.mobile-menu`).classList.add(`active`)
})

closedBtn.addEventListener(`click`, function () {
    document.querySelector(`.mobile-menu`).classList.remove(`active`)
})
