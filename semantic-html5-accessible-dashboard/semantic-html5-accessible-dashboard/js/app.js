const modal = document.querySelector('#report-modal');
const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButtons = document.querySelectorAll('[data-close-modal]');

if (modal) {
  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.showModal();
      document.querySelector('#report-name')?.focus();
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => modal.close());
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });
}
