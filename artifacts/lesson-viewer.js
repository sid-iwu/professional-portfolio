const viewer = document.getElementById('deliverable');
const slides = Array.from(viewer.querySelectorAll('[data-slide]'));
const controls = viewer.querySelector('.lesson-controls');
const position = controls.querySelector('.lesson-position');
const previous = controls.querySelector('[data-slide-step="-1"]');
const next = controls.querySelector('[data-slide-step="1"]');
let current = 0;

function showSlide(index) {
  current = index;
  slides.forEach((slide, slideIndex) => {
    slide.hidden = slideIndex !== current;
  });
  previous.setAttribute('aria-disabled', String(current === 0));
  next.setAttribute('aria-disabled', String(current === slides.length - 1));
  position.textContent = `Slide ${current + 1} of ${slides.length}`;
}

function moveSlide(step) {
  const index = current + step;
  if (index >= 0 && index < slides.length) showSlide(index);
}

previous.addEventListener('click', () => moveSlide(-1));
next.addEventListener('click', () => moveSlide(1));
controls.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  moveSlide(event.key === 'ArrowLeft' ? -1 : 1);
});

showSlide(0);
controls.hidden = false;
