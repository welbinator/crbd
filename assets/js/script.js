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

/** service hover animation  **/

const services = document.querySelectorAll(".service");

services.forEach((service) => {
	service.addEventListener("mouseover", function () {
		this.classList.add("hover");
	});
	service.addEventListener("mouseout", function () {
		this.classList.remove("hover");
	});
});
