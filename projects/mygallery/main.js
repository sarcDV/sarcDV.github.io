// SLIDESHOW
const slides = document.querySelectorAll('#slideshow img');
let index = 0;

const effects = [
    "effect-fade",
    "effect-zoom-in",
    "effect-zoom-out",
    "effect-left-right",
    "effect-right-left",
    "effect-pan-up",
    "effect-pan-down",
    "effect-diagonal",
    "effect-tilt",
    "effect-blur",
    "effect-glow",
    "effect-drift"
];

function showNext() {
    slides.forEach(img => {
        img.style.opacity = 0;
        img.className = "";
    });

    const current = slides[index];
    const effect = effects[Math.floor(Math.random() * effects.length)];

    current.classList.add(effect);
    current.style.opacity = 1;

    index = (index + 1) % slides.length;
}

showNext();
setInterval(showNext, 8000);

document.addEventListener('click', () => {
    const audio = document.getElementById('bg-audio');
    if (audio.paused) audio.play();
}, { once: true });
