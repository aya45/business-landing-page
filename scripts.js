const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
}, {
  threshold: 0.1
});


const animatedElements = [
  '.hero-content',
  '.hero-image',
  '.products-content',
  '.product-card',
  '.store-card',
  '.stat-card',
  '.contact-card',
  '.decoration-image'
];


document.addEventListener('DOMContentLoaded', () => {
 
  const style = document.createElement('style');
  style.textContent = `
      .animated {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
      }
      
      .show {
          opacity: 1;
          transform: translateY(0);
      }
  `;
  document.head.appendChild(style);

  
  animatedElements.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
          element.classList.add('animated');
          observer.observe(element);
      });
  });
});


const contactForm = document.querySelector('.contact-card form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
   
      alert('Form submitted!');
  });
}