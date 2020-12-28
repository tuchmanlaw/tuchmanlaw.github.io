window.addEventListener('mousemove', function(e){
  let x
  // let y;

  let patent = document.getElementById("patent");
  let patentBg = document.getElementById("patent-bg");

  // let patentVertCenter = window.innerHeight/2 - patent.clientHeight/2;
  // console.log(patent.clientHeight, patentVertCenter);

  x = (e.x - (window.innerWidth/2)) / window.innerWidth;
  // y =( e.y - (window.innerHeight/2)) / window.innerHeight;

  patent.style.right = x*30+'px';
  // patent.style.top = patentVertCenter/2 - y*30 +'px';
  patentBg.style.left = x*30+'px';
  // patentBg.style.top = (window.innerHeight/8) + y*30 +'px';
});


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