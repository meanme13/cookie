AFRAME.registerComponent("start-anim", {
    init: function () {
        const model = document.getElementById('model');
        const model2 = document.getElementById('model2');
        model2.setAttribute("gltf-model", `models/p${ Math.floor(Math.random() * 10) }.glb`);

        setTimeout(() => {
            model.setAttribute("visible", true);
            model2.setAttribute("visible", true);

            model.setAttribute("animation-mixer", "clip: cock; clampWhenFinished: true; loop: once");
            model2.setAttribute("animation-mixer", "clip: paper; clampWhenFinished: true; loop: once");
        }, 6000);
    }
});


/**
 * code above is responsible for random wish and models animation
 * code below is responsible for other standard logic like preloader, modal window etc.
 */


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