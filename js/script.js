"use strict";

const controllerButtons = document.querySelector('.controllers__btns');
const controllerMinus = document.querySelector('.controllers__btn-minus');
const controllerPlus = document.querySelector('.controllers__btn-plus');
let FZcounter = 50;
const controllerFZ = document.querySelector('.controllers__font-size');
const main = document.querySelector('.main');

controllerButtons.addEventListener("click", function(e) {
	let minus = e.target.closest('.controllers__btn-minus');
	let plus = e.target.closest('.controllers__btn-plus');
	
	if (minus) {
		FZcounter = FZcounter - 1;
		main.style.fontSize = `${FZcounter / 10}rem`;
		controllerFZ.value = `${Math.round(FZcounter)}px`
		console.log(FZcounter)
	}
	
	if (plus) {
		FZcounter = FZcounter + 1;
		main.style.fontSize = `${FZcounter / 10}rem`;
		controllerFZ.value = `${Math.round(FZcounter)}px`
		console.log(FZcounter)
	}
});

controllerFZ.addEventListener("focus", function(e) {
	this.value = ``;
	console.log(FZcounter)
});
controllerFZ.addEventListener("blur", function(e) {
	FZcounter = +this.value;
	main.style.fontSize = `${FZcounter / 10}rem`;
	this.value = `${Math.round(FZcounter)}px`
	console.log(FZcounter)
});


const memeOneinputPhoto = document.querySelectorAll('.meme-1__input-img');
const memeOnephoto = document.querySelector('.meme-1__img');


memeOneinputPhoto.forEach(el => {
	el.addEventListener("change", function(e) {
		let selectedFile = this.files[0];

		//? Получаем URL изображения
		let fileURL = URL.createObjectURL(selectedFile);

		this.nextElementSibling.src = fileURL;
		ibg();
	});
});

const AllPseudotextAreas = document.querySelectorAll('.pseudo-textarea');
AllPseudotextAreas.forEach(el => {
	el.addEventListener("focus", function(e) {
		this.innerHTML = '';
	});
});

const memeOneDownload = document.querySelector('.meme-1__download');

memeOneDownload.addEventListener("click", function(e) {
	if (document.querySelector('canvas')) {
		document.querySelector('canvas').remove();
	}
	html2canvas(document.querySelector("#memeOne")).then(canvas => {
		document.body.appendChild(canvas);
	});
});

//? ibg
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();