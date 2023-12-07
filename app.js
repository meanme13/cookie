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
            }, 6500);
        }

        setTimeout(() => {
            model.setAttribute("visible", true);
            model2.setAttribute("visible", true);

            model.setAttribute("animation-mixer", "clip: cock; timeScale: 1; clampWhenFinished: true; loop: once");
            model2.setAttribute("animation-mixer", "clip: paper; clampWhenFinished: true; loop: once");
        }, 8000);
    }
});

AFRAME.registerComponent('fade-in', {
    schema: {
        duration: {type: 'number', default: 500},
    },

    init() {
        this.el.addEventListener('model-loaded', this.onModelLoaded.bind(this));
    },

    onModelLoaded() {
        const mesh = this.el.getObject3D('mesh');
        if (!mesh) return;
        this.setOpacity(mesh, 0);
        this.mesh = mesh;
        this.startTime = Date.now() + 7500;
        this.animateFadeIn();
    },

    animateFadeIn() {
        if (!this.mesh || !this.startTime) return;

        const elapsedTime = Date.now() - this.startTime;
        const progress = THREE.MathUtils.clamp(elapsedTime / this.data.duration, 0, 1);
        this.setOpacity(this.mesh, progress);

        if (progress < 1) {
        requestAnimationFrame(this.animateFadeIn.bind(this));
        }
    },

    setOpacity(mesh, opacity) {
        mesh.traverse((node) => {
        if (node.isMesh) {
            node.material.transparent = true;
            node.material.opacity = opacity;
        }
        });
    },
});

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
    // modalWindow.style.display = 'flex';
    window.location.href = 'https://aton.riders.agency/index_4.html';
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