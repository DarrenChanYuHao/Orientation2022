// Get the modal
var sideMenu = document.getElementById("side-Menu");

var rubPopUp = document.getElementById("rubPopUp");

// Get the button that opens the modal
var hamburgMenu = document.getElementById("hamburg-menu");

var rubBtn = document.getElementById("rubBtn");

// Get the <span> element that closes the modal
var menuClose = document.getElementById('menuClose');

var rubClose = document.getElementById('rubClose');

// When the user clicks on the button, open the modal
hamburgMenu.onclick = function() {
  sideMenu.style.display = "block";
}

rubBtn.onclick = function() {
    rubPopUp.style.display = "block";
}

jadBtn.onclick = function() {
  jadPopUp.style.display = "block";
}

citBtn.onclick = function() {
  citPopUp.style.display = "block";
}

aquaBtn.onclick = function() {
  aquaPopUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
menuClose.onclick = function() {
  sideMenu.style.display = "none";
}

rubClose.onclick = function() {
    rubPopUp.style.display = "none";
}

jadClose.onclick = function() {
  jadPopUp.style.display = "none";
}
citClose.onclick = function() {
  citPopUp.style.display = "none";
}
aquaClose.onclick = function() {
  aquaPopUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rubPopUp) {
    rubPopUp.style.display = "none";
  } else if (event.target == jadPopUp) {
    jadPopUp.style.display = "none";
  } else if (event.target == citPopUp) {
    citPopUp.style.display = "none";
  } else if (event.target == aquaPopUp) {
    aquaPopUp.style.display = "none";
  } else if (event.target == sideMenu) {
    sideMenu.style.display = "none";
  }
}
