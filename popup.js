// Get the modal and corresponding window/panel
var side_Menu = document.getElementById("side-Menu");
var sideMenu = document.getElementById('sideMenu');

var rubPopUp = document.getElementById("rubPopUp");
var rubWindow = document.getElementById('rubWindow');

var jadPopUp = document.getElementById("jadPopUp");
var jadWindow = document.getElementById('jadWindow');

var citPopUp = document.getElementById("citPopUp");
var citWindow = document.getElementById('citWindow');

var aquaPopUp = document.getElementById("aquaPopUp");
var aquaWindow = document.getElementById('aquaWindow');

// Get the button that opens the modal
var hamburgMenu = document.getElementById("hamburg-menu");

var rubBtn = document.getElementById("rubBtn");
var jadBtn = document.getElementById("jadBtn");
var citBtn = document.getElementById("citBtn");
var aquaBtn = document.getElementById("aquaBtn");

// Get the <span> element that closes the modal
var menuClose = document.getElementById('menuClose');

var rubClose = document.getElementById('rubClose');
var jadClose = document.getElementById('jadClose');
var citClose = document.getElementById('citClose');
var aquaClose = document.getElementById('aquaClose');

// When the user clicks on the button, open the modal
hamburgMenu.onclick = function() {
  side_Menu.style.display = "block";
  setTimeout(() => {side_Menu.style.opacity = '1';}, 1);
  setTimeout(() => {sideMenu.classList.add('show');}, 1);
}

rubBtn.onclick = function() {
  rubPopUp.style.display = "block";
  setTimeout(() => {rubPopUp.style.opacity = '1';}, 1);
}

jadBtn.onclick = function() {
  jadPopUp.style.display = "block";
  setTimeout(() => {jadPopUp.style.opacity = '1';}, 1);  
}

citBtn.onclick = function() {
  citPopUp.style.display = "block";
  setTimeout(() => {citPopUp.style.opacity = '1';}, 1);
}

aquaBtn.onclick = function() {
  aquaPopUp.style.display = "block";
  setTimeout(() => {aquaPopUp.style.opacity = '1';}, 1);
}

// When the user clicks on <span> (x), close the modal
menuClose.onclick = function() {
  sideMenu.classList.remove('show');
  setTimeout(() => {side_Menu.style.opacity = '0';}, 1);
  setTimeout(() => {side_Menu.style.display = "none";}, 300);
}

rubClose.onclick = function() {
  setTimeout(() => {rubPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {rubPopUp.style.display = "none";}, 300);
}

jadClose.onclick = function() {
  setTimeout(() => {jadPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {jadPopUp.style.display = "none";}, 300);
}
citClose.onclick = function() {
  setTimeout(() => {citPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {citPopUp.style.display = "none";}, 300);
}
aquaClose.onclick = function() {
  setTimeout(() => {aquaPopUp.style.opacity = '0';}, 1);
  setTimeout(() => {aquaPopUp.style.display = "none";}, 300);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rubPopUp) {
    setTimeout(() => {rubPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {rubPopUp.style.display = "none";}, 300);
  } else if (event.target == jadPopUp) {
    setTimeout(() => {jadPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {jadPopUp.style.display = "none";}, 300);
  } else if (event.target == citPopUp) {
    setTimeout(() => {citPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {citPopUp.style.display = "none";}, 300);
  } else if (event.target == aquaPopUp) {
    setTimeout(() => {aquaPopUp.style.opacity = '0';}, 1);
    setTimeout(() => {aquaPopUp.style.display = "none";}, 300);
  } else if (event.target == side_Menu) {
    sideMenu.classList.remove('show');
    setTimeout(() => {side_Menu.style.opacity = '0';}, 1);
    setTimeout(() => {side_Menu.style.display = "none";}, 300);
  }
}

const sidelist = document.querySelectorAll("#sideMenuOptions li a");
sidelist.forEach(link => {
  link.onclick = function() {
    sideMenu.classList.remove('show');
    setTimeout(() => {side_Menu.style.opacity = '0';}, 1);
    setTimeout(() => {side_Menu.style.display = "none";}, 300);
  }
})
