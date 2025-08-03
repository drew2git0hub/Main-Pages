const translations = {
  en: {
    title: "Welcome to 'V Tools'!",
    desc: "Click the button below!",
    memo: "Memo",
    camera: "Camera",
    calendar: "Calendar",
    github: "Github profile"
  },
  ko: {
    title: "'V Tools'에 오신 것을 환영합니다!",
    desc: "아래 버튼을 클릭하세요!",
    memo: "메모",
    camera: "카메라",
    calendar: "캘린더",
    github: "깃허브 프로필"
  }
};

function setLanguage(lang) {
  document.querySelector('h1').textContent = translations[lang].title;
  document.querySelector('p').textContent = translations[lang].desc;
  const btns = document.querySelectorAll('.nav-button');
  btns[0].textContent = translations[lang].memo;
  btns[1].textContent = translations[lang].camera;
  btns[2].textContent = translations[lang].calendar;
  btns[3].textContent = translations[lang].github;
}

document.getElementById('lang-select').addEventListener('change', function(e) {
  setLanguage(e.target.value);
  localStorage.setItem('vtools-lang', e.target.value);
});

// 초기 언어 설정
const savedLang = localStorage.getItem('vtools-lang') || 'en';
document.getElementById('lang-select').value = savedLang;
setLanguage(savedLang);

// Service Worker 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker registered:', reg.scope))
      .catch(err => console.error('❌ Service Worker registration failed:', err));
  });
}