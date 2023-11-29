
let openModal = document.getElementById("openModal");
let modalWindow = document.getElementById("modalWindow");
let closeModal = document.getElementById("closeModal");
let textInput = document.getElementById("textInput");
let counter = document.getElementById("counter");
let accessTitle = document.getElementsByClassName("a-dialog-text");
let accessDeny = document.getElementsByClassName("a-dialog-deny-button");
let accessAllow = document.getElementsByClassName("a-dialog-allow-button");

accessTitle.innerText = "Для работы дополненной реальности требуется камера. Включить камеру?";
accessAllow.innerText = "Да";
accessDeny.innerText = "Нет";

openModal.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});

textInput.addEventListener('input', () => {
    let charCount = textInput.value.length;
    counter.innerText = `( ${charCount} / 200 )`;
});

function preloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
}

function addScale() {
    openModal.classList.add('scale');
}

setTimeout(addScale, 10000);
setTimeout(preloader, 5000);