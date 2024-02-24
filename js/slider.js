const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

// Clone first and last slide for infinite loop
const firstSlideClone = slides.firstElementChild.cloneNode(true);
const lastSlideClone = slides.lastElementChild.cloneNode(true);

slides.appendChild(firstSlideClone);
slides.insertBefore(lastSlideClone, slides.firstElementChild);

let slideIndex = 1;
const slideWidth = slides.children[0].clientWidth;

slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;

function moveToSlide(index) {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
}

function slideNext() {
  if (slideIndex >= slides.children.length - 1) return;
  slideIndex++;
  moveToSlide(slideIndex);
}

function slidePrev() {
  if (slideIndex <= 0) return;
  slideIndex--;
  moveToSlide(slideIndex);
}

slider.addEventListener('transitionend', () => {
  if (slides.children[slideIndex].classList.contains('clone-first')) {
    slides.style.transition = 'none';
    slideIndex = 1;
    slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
  }
  if (slides.children[slideIndex].classList.contains('clone-last')) {
    slides.style.transition = 'none';
    slideIndex = slides.children.length - 2;
    slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
  }
});

setInterval(slideNext, 5000); // Change slide every 5 seconds
