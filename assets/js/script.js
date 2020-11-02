const mobileIcon = document.querySelector("#mobileIcon");
const menu = document.querySelector(".nav-items");
const rects = document.querySelectorAll("svg > rect");

function toggleMenu() {
	menu.classList.toggle("open");
	rects.forEach((rect) => {
		rect.classList.toggle("open");
	});
}

mobileIcon.addEventListener("click", toggleMenu);
