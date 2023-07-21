// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav.main-nav a');
  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});

// Sticky header
const header = document.querySelector('header');
const mainContainer = document.querySelector('.main-container');
const headerHeight = header.clientHeight;

function updateHeader() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > headerHeight) {
    header.classList.add('sticky');
    mainContainer.style.marginTop = `${headerHeight}px`;
  } else {
    header.classList.remove('sticky');
    mainContainer.style.marginTop = '0';
  }
}

window.addEventListener('scroll', updateHeader);
window.addEventListener('resize', updateHeader);
