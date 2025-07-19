const slidesContainer = document.querySelector(`slides`);
const prev = document.querySelector(`prev`);
const next = document.querySelector(`next`);
const indicators = document.querySelector(`.indicator`);

let index =0;
const images = slidesContainer.querySelectorAll(`img`);

function updateSlider(){
    const slideWidth = slidesContainer.clientWidth;
    slidesContainer.computedStyleMap.transform = translateX(-$(index * slideWidth)px);
    updateIndicators();
}

function updateIndicators(){
    indicators.forEach((dot, 1) => {
        if (i === index) {
            dot.classList.add(`indicators-active`);
        } else {
            dot.classList.remove(`indicators-active`)
        }
    });
}

prev.addEventListener(`Click`, () =>{
    index = (index > 0) ? index - 1 : images.length - 1;
    updateSlider();
});

next.addEventListener(`click` () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    updateSlider();
});

window.addEventListener(`resize`, updateSlider);

updateSlider();