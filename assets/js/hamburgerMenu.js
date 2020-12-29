// Toggle drop menu when hamburger icon clicked
function hamburgerMenuClicked() {
  document.getElementById("main-nav").classList.toggle("show");
}

// Hide drop menu if user clicks away from hamburger
window.onclick = function(event) {
  if (!event.target.matches('.hamburger')) {
    let menu = document.getElementById("main-nav");
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  }
}