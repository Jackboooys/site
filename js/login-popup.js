let enterButton = document.querySelector('.enter-button')
let loginPopup = document.querySelector('.login-popup')
enterButton.addEventListener('click', showPopup);
function showPopup(evt) {
evt.preventDefault();
loginPopup.classList.toggle('show-popup');
}