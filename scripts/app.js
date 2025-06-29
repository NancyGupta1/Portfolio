document.addEventListener('DOMContentLoaded', () => {
  // Form Submission Handling
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thanks for reaching out! I’ll get back soon.');
      contactForm.reset();
    });
  }

  // Smooth Scroll with Header Offset
  const headerOffset = 80;
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // Highlight Active Navbar Link
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));

  const sections = Array.from(document.querySelectorAll('[id]')).filter(el =>
    navLinks.some(link => link.getAttribute('href') === `#${el.id}`)
  );

  function updateActiveLink() {
    const scrollPos = window.scrollY + headerOffset + 1;

    sections.forEach(section => {
      const id = section.getAttribute('id');
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // run once on load
});
