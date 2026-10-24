const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const translations = {
  en: {
    'theme-night': 'Night',
    'nav-about': 'About',
    'nav-education': 'Education',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-contact': 'Contact',
    'hero-eyebrow': 'Frontend Developer • Designer',
    'hero-title-line1': 'I build clean, modern websites',
    'hero-title-line2': 'that feel premium.',
    'hero-lead': 'I’m Dmitry, a 18+ year old web developer from Kyiv, Ukraine. I create stylish landing pages, interactive websites, and small business projects with a modern, minimal aesthetic.',
    'btn-projects': 'View projects',
    'btn-contact': 'Contact me',
    'stat-python': 'Years Python',
    'stat-frontend': 'Year frontend',
    'stat-projects': 'Projects',
    'status-freelance': 'Available for freelance',
    'profile-title': 'Web projects',
    'section-about': 'About me',
    'about-title': 'Design meets logic.',
    'about-p1': 'I’ve been creating websites for about a year, starting with my own design ideas and learning how to turn them into real, usable digital experiences. I enjoy building modern interfaces that are simple, attractive and effective.',
    'about-p2': 'My style is usually minimal and clean, but I can easily adapt to other visual directions depending on the project. I especially like making landing pages that feel premium and trustworthy, while still staying easy for the user to understand.',
    'about-p3': 'I also studied at Logika School, where I developed my foundation in programming and deepened my understanding of logic, structure, and problem solving.',
    'card-location': 'Location',
    'card-location-value': 'Kyiv, Ukraine',
    'card-age': 'Age',
    'card-stack': 'Stack',
    'card-languages': 'Languages',
    'card-languages-value': 'Ukrainian · Russian · English',
    'card-learning': 'Learning',
    'section-education': 'Education',
    'education-title': 'Experience and certificates.',
    'cert-tag-school': 'School',
    'cert-logika': 'Logika',
    'cert-logika-text': 'Studied in a programming-oriented school where I built my basics in logic, problem solving, and structured thinking.',
    'cert-tag-python': 'Python',
    'cert-python-years': '3–4 years',
    'cert-python-text': 'Worked with Python for several years, developing analytical thinking and understanding of coding logic and algorithms.',
    'cert-tag-frontend': 'Frontend',
    'cert-frontend-years': '1 year',
    'cert-frontend-text': 'Focused on frontend development for the last year, creating landing pages, interactive elements, and visual interfaces.',
    'section-projects': 'Projects',
    'projects-title': 'My work.',
    'project-type-landing': 'Landing page',
    'project-grad-title': 'Graduation site',
    'project-grad-text': 'A memorable graduation website with a polished layout, modern sections, and a visually strong presentation for an event.',
    'project-grad-li1': 'Event-focused structure',
    'project-grad-li2': 'Modern presentation',
    'project-grad-li3': 'Responsive design',
    'project-view': 'View GitHub project',
    'project-type-commercial': 'Commercial site',
    'project-pulse-text': 'A sales-oriented website built to showcase a product and present value in a clean, attractive way.',
    'project-pulse-li1': 'Product presentation',
    'project-pulse-li2': 'Sales-focused design',
    'project-pulse-li3': 'Visual hierarchy',
    'project-type-interactive': 'Interactive app',
    'project-quiz-title': 'Quiz',
    'project-quiz-text': 'An engaging quiz project built with JavaScript, where the experience is driven by interactivity and instant user feedback.',
    'project-quiz-li1': 'Dynamic logic',
    'project-quiz-li2': 'Interactive UI',
    'project-quiz-li3': 'Fast user feedback',
    'section-skills': 'Skills',
    'skills-title': 'What I work with.',
    'skill-responsive': 'Responsive design',
    'skill-ui': 'UI design',
    'section-workflow': 'Workflow',
    'workflow-title': 'Simple and effective.',
    'step-research-title': 'Research',
    'step-research-text': 'I study the target audience and the business goal before design.',
    'step-design-title': 'Design',
    'step-design-text': 'I create a clean structure with a strong visual hierarchy and style.',
    'step-build-title': 'Build',
    'step-build-text': 'I turn the design into a responsive website using HTML, CSS and JS.',
    'footer-contact': 'Contact',
    'footer-heading': 'Let’s build something great.'
  },
  ru: {
    'theme-night': 'Ночь',
    'nav-about': 'Обо мне',
    'nav-education': 'Обучение',
    'nav-projects': 'Проекты',
    'nav-skills': 'Навыки',
    'nav-contact': 'Контакты',
    'hero-eyebrow': 'Frontend-разработчик • Дизайнер',
    'hero-title-line1': 'Создаю современные сайты',
    'hero-title-line2': 'которые выглядят премиально.',
    'hero-lead': 'Я Дмитрий, 18+ лет, веб-разработчик из Киева, Украина. Создаю стильные лендинги, интерактивные сайты и небольшие бизнес-проекты в современном минималистичном стиле.',
    'btn-projects': 'Посмотреть проекты',
    'btn-contact': 'Связаться со мной',
    'stat-python': 'Лет Python',
    'stat-frontend': 'Год frontend',
    'stat-projects': 'Проекты',
    'status-freelance': 'Доступен для фриланса',
    'profile-title': 'Веб-проекты',
    'section-about': 'Обо мне',
    'about-title': 'Дизайн встречает логику.',
    'about-p1': 'Я создаю сайты уже около года, начиная с собственных идей и учась превращать их в реальные, удобные цифровые решения. Мне нравится создавать современные интерфейсы, которые простые, привлекательные и эффективные.',
    'about-p2': 'Мой стиль обычно минималистичный и чистый, но я легко могу адаптироваться под другие визуальные направления в зависимости от проекта. Особенно мне нравятся лендинги, которые выглядят премиально и вызывают доверие, оставаясь понятными пользователю.',
    'about-p3': 'Также я учился в школе Logika, где заложил основу в программировании и углубил понимание логики, структуры и решения задач.',
    'card-location': 'Город',
    'card-location-value': 'Киев, Украина',
    'card-age': 'Возраст',
    'card-stack': 'Стек',
    'card-languages': 'Языки',
    'card-languages-value': 'Украинский · Русский · Английский',
    'card-learning': 'Изучаю',
    'section-education': 'Образование',
    'education-title': 'Опыт и сертификаты.',
    'cert-tag-school': 'Школа',
    'cert-logika': 'Logika',
    'cert-logika-text': 'Учился в программной школе, где заложил основу логики, решения задач и структурного мышления.',
    'cert-tag-python': 'Python',
    'cert-python-years': '3–4 года',
    'cert-python-text': 'Работал с Python несколько лет, развивая аналитическое мышление и понимание логики кода и алгоритмов.',
    'cert-tag-frontend': 'Frontend',
    'cert-frontend-years': '1 год',
    'cert-frontend-text': 'Фокусировался на frontend-разработке в течение последнего года, создавая лендинги, интерактивные элементы и визуальные интерфейсы.',
    'section-projects': 'Проекты',
    'projects-title': 'Мои работы.',
    'project-type-landing': 'Лэндинг',
    'project-grad-title': 'Сайт выпускного',
    'project-grad-text': 'Памятный сайт выпускного с продуманной структурой, современными секциями и выразительной визуальной подачей для мероприятия.',
    'project-grad-li1': 'Структура под событие',
    'project-grad-li2': 'Современная подача',
    'project-grad-li3': 'Адаптивный дизайн',
    'project-view': 'Посмотреть проект на GitHub',
    'project-type-commercial': 'Коммерческий сайт',
    'project-pulse-text': 'Сайт, ориентированный на продажи, чтобы показать продукт и выгодно представить его ценность в чистом и привлекательном виде.',
    'project-pulse-li1': 'Презентация продукта',
    'project-pulse-li2': 'Дизайн под продажи',
    'project-pulse-li3': 'Иерархия визуального акцента',
    'project-type-interactive': 'Интерактивное приложение',
    'project-quiz-title': 'Квиз',
    'project-quiz-text': 'Занимательный квиз-проект на JavaScript, где пользовательский опыт строится на интерактивности и мгновенной обратной связи.',
    'project-quiz-li1': 'Динамическая логика',
    'project-quiz-li2': 'Интерактивный интерфейс',
    'project-quiz-li3': 'Быстрая обратная связь',
    'section-skills': 'Навыки',
    'skills-title': 'С чем я работаю.',
    'skill-responsive': 'Адаптивный дизайн',
    'skill-ui': 'UI-дизайн',
    'section-workflow': 'Процесс',
    'workflow-title': 'Просто и эффективно.',
    'step-research-title': 'Исследование',
    'step-research-text': 'Сначала изучаю целевую аудиторию и бизнес-цель перед работой над дизайном.',
    'step-design-title': 'Дизайн',
    'step-design-text': 'Создаю понятную структуру с сильной визуальной иерархией и стилем.',
    'step-build-title': 'Разработка',
    'step-build-text': 'Преобразую дизайн в адаптивный сайт с использованием HTML, CSS и JS.',
    'footer-contact': 'Контакты',
    'footer-heading': 'Давайте создадим что-то крутое.'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');
const savedLang = localStorage.getItem('portfolio-lang') || 'ru';
let currentLang = savedLang;

function applyTheme(theme) {
  const isDark = theme === 'dark';
  body.classList.toggle('theme-dark', isDark);
  body.classList.toggle('theme-light', !isDark);

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    const label = themeToggle.querySelector('.toggle-label');
    if (label) {
      label.textContent = isDark ? 'Day' : translations[currentLang]['theme-night'];
    }
  }

  localStorage.setItem('portfolio-theme', theme);
}

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang][key];
    if (value) {
      element.textContent = value;
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  if (themeToggle) {
    const label = themeToggle.querySelector('.toggle-label');
    if (label) {
      const theme = body.classList.contains('theme-dark') ? 'dark' : 'light';
      label.textContent = theme === 'dark' ? 'Day' : translations[lang]['theme-night'];
    }
  }

  localStorage.setItem('portfolio-lang', lang);
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
applyTheme(savedTheme);
applyTranslations(savedLang);

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

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nextLang = button.dataset.lang;
    applyTranslations(nextLang);
  });
});

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
