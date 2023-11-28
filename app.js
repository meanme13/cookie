
let openModal = document.getElementById("openModal");
let modalWindow = document.getElementById("modalWindow");
let closeModal = document.getElementById("closeModal");
let textInput = document.getElementById("textInput");
let counter = document.getElementById("counter");

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
setTimeout(preloader, 5000);