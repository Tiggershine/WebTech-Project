// 보이는 슬라이더를 위한 ClassName
const SHOWING_CLASS = "showing";
// variable for first-slide
const firstSlide = document.querySelector(".slider__item:first-child");
// function for changing slide
function slide() {
    // variable for selecting slide we can see - currentSlide
    // move to next slide
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) { 
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);        
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}


setInterval(slide, 2000);