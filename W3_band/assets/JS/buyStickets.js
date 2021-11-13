const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.js-modal-container');
const close = document.querySelector('.js-modal-close');

close.onclick = function (ev) {
    modal.classList.remove('show');
}

function Show() {
    modal.classList.add("show");
}


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', Show);
}
modal.onclick = function (ev) {
    modal.classList.remove('show');
}
modalContainer.addEventListener('click', function (ev) {
    ev.stopPropagation();
})