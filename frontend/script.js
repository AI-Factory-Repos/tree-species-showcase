/**
 * Tree Species Showcase — main script
 * Handles: footer year, smooth-scroll nav, contact form validation.
 * Species grid rendering will be wired to the API in later tickets.
 */

(function () {
  'use strict';

  /* --------------------------------------------------
   * Footer — current year
   * -------------------------------------------------- */
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------
   * Species grid — placeholder until API is wired
   * -------------------------------------------------- */
  const speciesGrid = document.getElementById('species-grid');

  function renderEmptyState(message) {
    if (!speciesGrid) return;
    speciesGrid.innerHTML = `<p class="species-empty">${message}</p>`;
  }

  // Initial empty state — will be replaced by API-driven render in future tickets
  renderEmptyState('Species data will appear here once the API is connected.');

  /* --------------------------------------------------
   * Search input — ready for future API integration
   * -------------------------------------------------- */
  const searchInput = document.getElementById('species-search');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.trim();
      // Filtering logic will be implemented once species data is loaded
      if (!query) {
        renderEmptyState('Species data will appear here once the API is connected.');
      }
    });
  }

  /* --------------------------------------------------
   * Contact form — basic client-side validation
   * -------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      clearFormMessages(contactForm);

      const name = contactForm.querySelector('#contact-name').value.trim();
      const email = contactForm.querySelector('#contact-email').value.trim();
      const message = contactForm.querySelector('#contact-message').value.trim();

      let isValid = true;

      if (!name) {
        showFieldError('contact-name', 'Name is required.');
        isValid = false;
      }

      if (!email || !isValidEmail(email)) {
        showFieldError('contact-email', 'Please enter a valid email address.');
        isValid = false;
      }

      if (!message) {
        showFieldError('contact-message', 'Message is required.');
        isValid = false;
      }

      if (isValid) {
        // API submission will be wired in a future ticket
        showFormSuccess(contactForm, 'Thank you! Your message has been received.');
        contactForm.reset();
      }
    });
  }

  /* --------------------------------------------------
   * Helpers
   * -------------------------------------------------- */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const error = document.createElement('span');
    error.className = 'form-error';
    error.textContent = message;
    error.setAttribute('role', 'alert');
    field.parentNode.appendChild(error);
    field.setAttribute('aria-describedby', fieldId + '-error');
    error.id = fieldId + '-error';
  }

  function showFormSuccess(form, message) {
    const success = document.createElement('p');
    success.className = 'form-success';
    success.textContent = message;
    success.setAttribute('role', 'status');
    form.appendChild(success);
  }

  function clearFormMessages(form) {
    form.querySelectorAll('.form-error, .form-success').forEach(function (el) {
      el.remove();
    });
  }
})();
