const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');

openModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Scroll verhindern, wenn Modal offen
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
});

// Modal auch schließen, wenn außerhalb geklickt wird
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModalBtn.click();
  }
});

// ESC-Taste schließt Modal
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && modalOverlay.style.display === 'flex') {
    closeModalBtn.click();
  }
});
