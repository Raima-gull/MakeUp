/////////////Comparison start///////////////
const slider = document.getElementById('comparison-slider');
const leftImage = document.getElementById('comparison-left-image');
const rightImage = document.getElementById('comparison-right-image');
const container = document.querySelector('.comparison-wrapper');

let isDragging = false;

function initSlider() {
    const containerWidth = container.offsetWidth;
    const initialPosition = containerWidth / 2;
    updateSliderPosition(initialPosition);
}

function updateSliderPosition(position) {
    const containerWidth = container.offsetWidth;
    const percentage = (position / containerWidth) * 100;

    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    slider.style.left = `${clampedPercentage}%`;
    leftImage.style.clipPath = `polygon(0 0, ${clampedPercentage}% 0, ${clampedPercentage}% 100%, 0 100%)`;
    rightImage.style.clipPath = `polygon(${clampedPercentage}% 0, 100% 0, 100% 100%, ${clampedPercentage}% 100%)`;
}

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    let position = e.clientX - containerRect.left;

    updateSliderPosition(position);
});


slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    document.body.style.userSelect = 'none';
});

document.addEventListener('touchend', () => {
    isDragging = false;
    document.body.style.userSelect = '';
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    let position = e.touches[0].clientX - containerRect.left;

    updateSliderPosition(position);
});

window.addEventListener('load', initSlider);
window.addEventListener('resize', initSlider);
//////////////////Comparison end/////////////////