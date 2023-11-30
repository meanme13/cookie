
let openModal = document.getElementById("openModal");
let reloadPage = document.getElementById("reloadPage");
let modalWindow = document.getElementById("modalWindow");
let closeModal = document.getElementById("closeModal");
let textInput = document.getElementById("textInput");
let counter = document.getElementById("counter");
let preloader = document.getElementById('preloader');

openModal.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
});

reloadPage.addEventListener('click', () => {
    preloader.style.display = 'flex';
    location.reload();
});

closeModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});

textInput.addEventListener('input', () => {
    let charCount = textInput.value.length;
    counter.innerText = `( ${charCount} / 700 )`;
});

function preloaderToggle() {
    preloader.style.display = 'none'
}

function addScale() {
    openModal.classList.add('scale');
    reloadPage.classList.add('scale');
}

setTimeout(addScale, 10000);
setTimeout(preloaderToggle, 5000);