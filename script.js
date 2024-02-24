document.getElementById('main-tab').addEventListener('click', () => {
  document.getElementById('main-content').classList.add('active');
  document.getElementById('updates-content').classList.remove('active');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('main-tab').classList.add('active');
});

document.getElementById('updates-tab').addEventListener('click', () => {
  document.getElementById('main-content').classList.remove('active');
  document.getElementById
