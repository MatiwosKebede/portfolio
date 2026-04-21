 (function() {
    // Reveal on scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });
    
    revealElements.forEach(el => observer.observe(el));
    
    // Immediately check visible ones
    window.addEventListener('DOMContentLoaded', () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('visible');
        }
      });
    });

    // Contact form handling
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      if (name && document.getElementById('email').value.trim()) {
        feedback.innerHTML = `<i class="fas fa-check-circle"></i> Thanks, ${name}! I'll respond soon.`;
        form.reset();
      } else {
        feedback.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Please fill all fields.`;
      }
    });

    // Smooth anchor scrolling offset for sticky nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      });
    });
  })();
