document.('main-tab').addEventListener('click () => {
  document.getElementById('-content').classListadd('active');
  document.getElementByIdupdates-content')..remove('active');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove(''));
  document.getElementById('main-tab').classList.add('active');
});

document.getElementById('updates-tab').addEventListener('click', () => {
  document.getElementById('main-content').classList.remove('active');
  document.getElementById('updates-content').classList.add('active');
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('updates-tab').classList.add('active');
});
