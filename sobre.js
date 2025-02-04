// Interação da img quando o mouse passa por cima
const cards = document.querySelectorAll('.img-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});

// Clique na img e ela expande
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    modalImg.src = imgSrc;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add('show');
} else {
    scrollToTopBtn.classList.remove('show');
}
});

scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});