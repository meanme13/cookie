AFRAME.registerComponent("start-anim", {
    init: function () {
        const model = document.getElementById('model');
        const model2 = document.getElementById('model2');
        const model3 = document.getElementById('model3');
        let preloader = document.getElementById('preloader');
        model2.setAttribute("gltf-model", `models/p${ Math.floor(Math.random() * 10) + 1 }.glb`);

        if (model && model2 && model3) {
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 7500);
        }

        setTimeout(() => {
            model.setAttribute("visible", true);
            model2.setAttribute("visible", true);

            model.setAttribute("animation-mixer", "clip: cock; clampWhenFinished: true; loop: once");
            model2.setAttribute("animation-mixer", "clip: paper; clampWhenFinished: true; loop: once");
        }, 8000);
    }
});

const videoElement = document.getElementsByTagName("video");
videoElement.controls = false;

/**
 * code above is responsible for preloader, random wish and models animation
 * code below is responsible for other standard logic like button, modal window etc.
 */


let openModal = document.getElementById("openModal");
let reloadPage = document.getElementById("reloadPage");
let modalWindow = document.getElementById("modalWindow");
let closeModal = document.getElementById("closeModal");
let textInput = document.getElementById("textInput");
let counter = document.getElementById("counter");

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

function addScale() {
    openModal.classList.add('scale');
    reloadPage.classList.add('scale');
}

setTimeout(addScale, 10000);