window.onload = function () {
  setTimeout(() => {
    document.getElementById('popup').style.display = 'block';
  }, 1000);
};

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
