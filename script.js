
// Reveal on scroll animation
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
elements.forEach(el => observer.observe(el));

// Dropdown toggle
document.addEventListener('DOMContentLoaded', function(){
  const contactBtn = document.getElementById('contactBtn');
  const contactWrapper = document.querySelector('.contact-dropdown');
  if(contactBtn && contactWrapper){
    contactBtn.addEventListener('click', function(e){
      e.stopPropagation();
      contactWrapper.classList.toggle('open');
    });
    document.addEventListener('click', function(e){
      if(!contactWrapper.contains(e.target)){
        contactWrapper.classList.remove('open');
      }
    });
  }
});
