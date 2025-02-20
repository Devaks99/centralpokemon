
// Modal de Imagem
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.img-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').src;
    modalImg.src = imgSrc;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// Scroll-top Button
window.addEventListener('scroll', () => {
  const scrollTop = document.querySelector('.scroll-top');
  scrollTop.classList.toggle('active', window.scrollY > 200);
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}