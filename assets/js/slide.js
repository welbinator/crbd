// let i = 0;
// const review = document.getElementById("review");
// const time = 7000;

// let reviews = [];
// reviews[0] =
// 	'<div class="profile p3"><img src="assets/img/maurice1.png" alt="" /></div><div class="text p3"><p class="my3"><em>"James is an outstanding web designer. He has helped out with several websites for organizations that I work with and I am always happy with the finished product. James will not only build a great website but he will help you understand the best way to use your website."</em></p><p>-Maurice Davis, SA POPM SSM</p></div>';
// reviews[1] =
// 	'<div class="profile p3"><img src="assets/img/kristen.png" alt="" /></div><div class="text p3"><p class="my3"><em>"As a business owner, the fewer decisions you have to make, the better. I gave Devin minimal parameters when I hired him, giving him creative control in designing my website. And oh my gosh. Not only was the process smooth and simple, but his work is stunning. He nailed it. It\'s so unique, so "me" and my brand. I could not be happier. I\'ll be contacting him whenever I need design and rebranding work."</em></p><p>-Kristen Channel, Channel Creative</p></div>';

// function changeSlide() {
// 	review.innerHTML = reviews[i];

// 	if (i < reviews.length - 1) {
// 		i++;
// 	} else {
// 		i = 0;
// 	}

// 	setTimeout("changeSlide()", time);
// }
// window.onload = changeSlide;





var current = 0,
slides = document.getElementsByClassName("review");

setInterval(function() {
for (var i = 0; i < slides.length; i++) {
slides[i].style.opacity = 0;
}
current = (current != slides.length - 1) ? current + 1 : 0;
slides[current].style.opacity = 1;
}, 7000);