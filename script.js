const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('portfolio-theme') || 'light';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  body.classList.toggle('theme-dark', isDark);
  body.classList.toggle('theme-light', !isDark);

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    const label = themeToggle.querySelector('.toggle-label');
    if (label) {
      label.textContent = isDark ? 'Day' : 'Night';
    }
  }

  localStorage.setItem('portfolio-theme', theme);
}

applyTheme(savedTheme);

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = body.classList.contains('theme-dark') ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => observer.observe(item));

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('page-ready');
  }, 900);
});
