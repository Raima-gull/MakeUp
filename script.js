/////////////toggle start/////////////
document.querySelector('.menu-toggle').onclick = () =>
    document.querySelector('.menu').classList.toggle('show');

if (window.innerWidth <= 768) {
    document.querySelectorAll('.dropdown').forEach(d =>
        d.onclick = () => d.classList.toggle('active')
    );
}
//////////toogle end////////////////
///////////////slider start///////////////////
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const [prevBtn, nextBtn] = document.querySelectorAll(".slider-wrapper .slide-button");
    const thumb = document.querySelector(".slider-container .slider-scrollbar .scrollbar-thumb");
    const maxScroll = imageList.scrollWidth - imageList.clientWidth;

    const updateUI = () => {
        const thumbPos = (imageList.scrollLeft / maxScroll) * (thumb.parentElement.clientWidth - thumb.offsetWidth);
        thumb.style.left = `${thumbPos}px`;
        prevBtn.style.display = imageList.scrollLeft > 0 ? "flex" : "none";
        nextBtn.style.display = imageList.scrollLeft < maxScroll ? "flex" : "none";
    };

    thumb.onmousedown = (e) => {
        const startX = e.clientX, startLeft = thumb.offsetLeft;
        document.onmousemove = (e) => {
            const newLeft = Math.min(Math.max(0, startLeft + e.clientX - startX), thumb.parentElement.clientWidth - thumb.offsetWidth);
            thumb.style.left = `${newLeft}px`;
            imageList.scrollLeft = (newLeft / (thumb.parentElement.clientWidth - thumb.offsetWidth)) * maxScroll;
        };
        document.onmouseup = () => document.onmousemove = null;
    };
    prevBtn.onclick = () => imageList.scrollBy({ left: -imageList.clientWidth, behavior: "smooth" });
    nextBtn.onclick = () => imageList.scrollBy({ left: imageList.clientWidth, behavior: "smooth" });
    imageList.onscroll = updateUI;
    updateUI();
};

window.onload = window.onresize = initSlider;
//////////////////slider end//////////////////////

///////////////Shop start/////////////////////
let shopItems = document.querySelectorAll('.shopitem');
shopItems.forEach(items => {
    items.addEventListener('click', () => {
        shopItems.forEach((e) => {
            e.style.backgroundColor = 'black';
        })

        items.style.backgroundColor = 'pink'
    })
})
///////////////Shop end//////////////////////
//////////////Cards start///////////////////
function toggleLike(button) {
    if (button.textContent === "♡") {
        button.textContent = "♥";
        button.style.color = "#FF1493";
    } else {
        button.textContent = "♡"
        button.style.color = "#000"
    }
}
//////////////Cards end///////////////////
/////////////Carsoule start///////////////
const carouselTrack = document.getElementById('carouselTrack');
const slides = carouselTrack.innerHTML;
carouselTrack.innerHTML = slides + slides;
//////////////Carsoule end//////////////////