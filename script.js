"use strict";
let clock = document.querySelector(".clock_time");
let main = document.querySelector("main");
let rs = new Date().getSeconds();
let rm = new Date().getMinutes();
let rh = new Date().getHours();
let ns = 1;
let nm = 1;
let nh = 1;
let text_s = 0;
let text_m = 0;
let text_h = 0;

setInterval(timer, 1000);



function timer() {

	let time = new Date();
	let h = time.getHours().toString();
	let m = time.getMinutes().toString();
	let s = time.getSeconds().toString();

	if (s.length < 2) {

		s = "0" + s;

	}
	if (m.length < 2) {

		m = "0" + m;

	}
	if (h.length < 2) {

		h = "0" + h;

	}

	clock.innerText = h + ":" + m + ":" + s;
	rs = rs + ns;
	if (s == "59") {
		ns = -ns;
	}
	rm = rm + nm;
	if (m == "59") {
		nm = -nm;
	}
	rh = rh + nh;
	if (h == "23") {
		nm = -nm;
	}

	main.style.backgroundColor = `rgb(${rh * 10.625}, ${rm * 4.25}, ${rs * 4.25})`;
	text_s = 255 - rs * 4.25;
	if (text_s < 0) {
		text_s = text_s + 255;
	}
	text_m = 255 - rm * 4.25;
	if (text_m < 0) {
		text_m = text_m + 255;
	}
	text_h = 255 - rh * 10.625;
	if (text_h < 0) {
		text_h = text_h + 255;
	}
	clock.style.color = `rgb(${text_h}, ${text_m}, ${text_s})`;
}