// Service Worker 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker registered:', reg.scope))
      .catch(err => console.error('❌ Service Worker registration failed:', err));
  });
}

navigator.serviceWorker.addEventListener('message', event => {
  if (event.data?.type === 'UPDATE_AVAILABLE') {
    showUpdateNotification(); // 사용자에게 알림 띄우기
  }
});

function showUpdateNotification() {
  const banner = document.createElement('div');
  banner.textContent = '새 버전이 있습니다. 새로고침하세요!';
  banner.style.cssText = 'position:fixed;bottom:0;width:100%;background:#333;color:#fff;padding:10px;text-align:center;';
  document.body.appendChild(banner);
}