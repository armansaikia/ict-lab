
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');

  if (ham && mob) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    });

    mob.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('open');
        mob.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('[data-filter-year]').forEach(button => {
    button.addEventListener('click', () => {
      const year = button.dataset.filterYear;
      document.querySelectorAll('[data-filter-year]').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.pub-item').forEach(item => {
        item.style.display = year === 'all' || item.dataset.year === year ? 'block' : 'none';
      });
    });
  });

  const contactForm = document.getElementById('contactFormWrap');
  const formSuccess = document.getElementById('formSuccess');
  const submitButton = document.getElementById('contactSubmit');

  if (contactForm && formSuccess && submitButton) {
    submitButton.addEventListener('click', () => {
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
    });
  }
});