
document.getElementById('login-form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 👈 ESTO reemplaza al alert

    window.location.href = 'dashboard.html';
  });

document.getElementById('nav-content')
  .addEventListener('submit', function (e) {
    e.preventDefault(); // 👈 ESTO reemplaza al alert

    window.location.href = 'index-admin.html';
  });