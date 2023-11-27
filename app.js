
let openModal = document.getElementById("openModal");
let modalWindow = document.getElementById("modalWindow");
let closeModal = document.getElementById("closeModal")

openModal.addEventListener('click', () => {
    modalWindow.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});