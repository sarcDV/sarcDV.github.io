const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const speedInput = document.getElementById('speed');
const dampingInput = document.getElementById('damping');
const freqInput = document.getElementById('frequency');

let width, height;
let currentHeight, previousHeight;
let sizeX, sizeY;
const cellSize = 4;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    sizeX = Math.ceil(width / cellSize);
    sizeY = Math.ceil(height / cellSize);

    currentHeight = new Float32Array(sizeX * sizeY);
    previousHeight = new Float32Array(sizeX * sizeY);
}

window.addEventListener('resize', init);
init();

function update() {
    const damping = parseFloat(dampingInput.value);
    const speed = parseFloat(speedInput.value);

    for (let i = 1; i < sizeX - 1; i++) {
        for (let j = 1; j < sizeY - 1; j++) {
            const idx = i + j * sizeX;
            currentHeight[idx] = (
                (previousHeight[idx - 1] +
                 previousHeight[idx + 1] +
                 previousHeight[idx - sizeX] +
                 previousHeight[idx + sizeX]) / 2 - currentHeight[idx]
            ) * damping;
        }
    }

    // Swap heights for next iteration
    let temp = previousHeight;
    previousHeight = currentHeight;
    currentHeight = temp;
}

function draw() {
    ctx.fillStyle = '#050a14';
    ctx.fillRect(0, 0, width, height);
    
    const imageData = ctx.createImageData(sizeX, sizeY);
    for (let i = 0; i < sizeX * sizeY; i++) {
        const h = previousHeight[i];
        const r = Math.min(255, h * 384 + 160);
        const b = Math.min(255, h * 384 + 160);
        const g = Math.min(255, h * 200 + 100);
        
        imageData.data[i * 4] = r;
        imageData.data[i * 4 + 1] = g;
        imageData.data[i * 4 + 2] = b;
        imageData.data[i * 4 + 3] = 255;
    }

    // Scale the small image to canvas size
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = sizeX;
    tempCanvas.height = sizeY;
    tempCanvas.getContext('2d').putImageData(imageData, 0, 0);
    
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tempCanvas, 0, 0, width, height);

    update();
    requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', (e) => {
    if (e.buttons === 1) {
        const i = Math.floor(e.clientX / cellSize);
        const j = Math.floor(e.clientY / cellSize);
        if (i > 0 && i < sizeX - 1 && j > 0 && j < sizeY - 1) {
            for (let dx = -2; dx <= 2; dx++) {
                for (let dy = -2; dy <= 2; dy++) {
                    const idx = (i + dx) + (j + dy) * sizeX;
                    previousHeight[idx] = 50;
                }
            }
        }
    }
});

canvas.addEventListener('mousedown', (e) => {
    const i = Math.floor(e.clientX / cellSize);
    const j = Math.floor(e.clientY / cellSize);
    if (i > 0 && i < sizeX - 1 && j > 0 && j < sizeY - 1) {
        for (let dx = -4; dx <= 4; dx++) {
            for (let dy = -4; dy <= 4; dy++) {
                const idx = (i + dx) + (j + dy) * sizeX;
                previousHeight[idx] = 150;
            }
        }
    }
});

draw();
