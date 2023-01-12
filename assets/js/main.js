// Map Toggle Show Functionality
const mapBtn = document.querySelector('.map_text');
const mapText = document.querySelector('.toggle_text');
const mapArea = document.querySelector('.map_wrapper');

mapBtn.onclick = () => {
    console.log("clicked")
	mapArea.classList.toggle('toggle-map');
	if (mapText.innerHTML === 'OPEN MAP') {
		mapText.innerHTML = 'CLOSE MAP';
	} else {
		mapText.innerHTML = 'OPEN MAP';
	}
};

// Navbar Color on Scroll + GO To Top Btn
const btn = document.querySelector('#button');
const nav = document.querySelector(".navbar")
window.onscroll = function () {
	// Scroll Btn
	if (window.scrollY > 400) {
		btn.classList.add('show');
	} else {
		btn.classList.remove('show');
	}
	if (window.scrollY > 100) {
		nav.style.backgroundColor = "#f38181";
	} else {
		nav.style.backgroundColor = 'transparent';
	}
};
// Scroll to top btn
btn.onclick = function (e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
