const lengueta = document.querySelector("[data-lengueta]");
const text__secundario = document.querySelector("[data-text]");
const lenguetacierre = document.querySelector(".lengueta");
const skills = document.querySelector(".skills");

lengueta.onclick = () => {
	lengueta.classList.add("active");
	text__secundario.classList.toggle("active");
	if (lenguetacierre.classList.contains("active")) {
		lengueta.classList.remove("active");
		lenguetacierre.classList.remove("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

skills.onclick = () => {
	lengueta.classList.add("active");
	text__secundario.classList.toggle("active");
	if (lenguetacierre.classList.contains("active")) {
		lengueta.classList.remove("active");
		lenguetacierre.classList.remove("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

lenguetacierre.onclick = () => {
	lenguetacierre.classList.add("active");
};

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const c5 = document.querySelector(".c5");

c1.onclick = () => {
	if (c1.classList.contains("active")) {
		c1.classList.remove("active");
	} else {
		c1.classList.add("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

c2.onclick = () => {
	if (c2.classList.contains("active")) {
		c2.classList.remove("active");
	} else {
		c2.classList.add("active");
		c1.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

c3.onclick = () => {
	if (c3.classList.contains("active")) {
		c3.classList.remove("active");
	} else {
		c3.classList.add("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c4.classList.remove("active");
		c5.classList.remove("active");
	}
};

c4.onclick = () => {
	if (c4.classList.contains("active")) {
		c4.classList.remove("active");
	} else {
		c4.classList.add("active");
		c1.classList.remove("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c5.classList.remove("active");
	}
};

c5.onclick = () => {
	c5.classList.toggle("active");
	c1.classList.remove("active");
	c2.classList.remove("active");
	c3.classList.remove("active");
	c4.classList.remove("active");
};

const t4 = document.querySelector(".t4");
const t5 = document.querySelector(".t5");
const t6 = document.querySelector(".t6");
const t7 = document.querySelector(".t7");
const t8 = document.querySelector(".t8");
const t9 = document.querySelector(".t9");
const img = document.querySelector(".info");
const alert = document.querySelector(".caja__alert");

const intervalo = () => {
	var contador = 0;

	const ejecutarTimeouts = () => {
		if (contador === 0) {
			t4.classList.add("active");
			if (t4.classList.contains("active")) {
				img.classList.add("activet4");
				alert.classList.add("active");
			}
		} else if (contador === 1) {
			t4.classList.remove("active");
			if (!t4.classList.contains("active")) {
				img.classList.remove("activet4");
				t5.classList.add("active");
				img.classList.add("activet5");
			}
		} else if (contador === 2) {
			t5.classList.remove("active");
			if (!t5.classList.contains("active")) {
				img.classList.remove("activet5");
				t6.classList.add("active");
				img.classList.add("activet6");
			}
		} else if (contador === 3) {
			t6.classList.remove("active");
			if (!t6.classList.contains("active")) {
				img.classList.remove("activet6");
				t7.classList.add("active");
				img.classList.add("activet7");
			}
		} else if (contador === 4) {
			t7.classList.remove("active");
			if (!t5.classList.contains("active")) {
				img.classList.remove("activet7");
				t8.classList.add("active");
				img.classList.add("activet8");
			}
		} else if (contador === 5) {
			t8.classList.remove("active");
			if (!t8.classList.contains("active")) {
				img.classList.remove("activet8");
				t9.classList.add("active");
				img.classList.add("activet9");
			}
		} else if (contador === 6) {
			t9.classList.remove("active");
			if (!t9.classList.contains("active")) {
				img.classList.remove("activet9");
			}
		}

		t4.onclick = () => {
			img.classList.toggle("activet4");
			if (t4.classList.contains("active")) {
				t4.classList.remove("active");
				alert.classList.remove("active");
			} else {
				t4.classList.add("active");
				alert.classList.add("active");
				t5.classList.remove("active");
				t6.classList.remove("active");
				t7.classList.remove("active");
				t8.classList.remove("active");
				t9.classList.remove("active");
				img.classList.remove("activet5");
				img.classList.remove("activet6");
				img.classList.remove("activet7");
				img.classList.remove("activet8");
				img.classList.remove("activet9");
				contador = 0;
			}
		};

		t5.onclick = () => {
			img.classList.toggle("activet5");
			if (t5.classList.contains("active")) {
				t5.classList.remove("active");
			} else {
				t5.classList.add("active");
				t4.classList.remove("active");
				t6.classList.remove("active");
				t7.classList.remove("active");
				t8.classList.remove("active");
				t9.classList.remove("active");
				img.classList.remove("activet4");
				img.classList.remove("activet6");
				img.classList.remove("activet7");
				img.classList.remove("activet8");
				img.classList.remove("activet9");
				contador = 1;
			}
		};

		t6.onclick = () => {
			img.classList.toggle("activet6");
			if (t6.classList.contains("active")) {
				t6.classList.remove("active");
			} else {
				t6.classList.add("active");
				t4.classList.remove("active");
				t5.classList.remove("active");
				t7.classList.remove("active");
				t8.classList.remove("active");
				t9.classList.remove("active");
				img.classList.remove("activet4");
				img.classList.remove("activet5");
				img.classList.remove("activet7");
				img.classList.remove("activet8");
				img.classList.remove("activet9");
				contador = 2;
			}
		};

		t7.onclick = () => {
			img.classList.toggle("activet7");
			if (t7.classList.contains("active")) {
				t7.classList.remove("active");
			} else {
				t7.classList.add("active");
				t4.classList.remove("active");
				t5.classList.remove("active");
				t6.classList.remove("active");
				t8.classList.remove("active");
				t9.classList.remove("active");
				img.classList.remove("activet4");
				img.classList.remove("activet5");
				img.classList.remove("activet6");
				img.classList.remove("activet8");
				img.classList.remove("activet9");
				contador = 3;
			}
		};

		t8.onclick = () => {
			img.classList.toggle("activet8");
			t8.classList.toggle("active");
			t4.classList.remove("active");
			t5.classList.remove("active");
			t6.classList.remove("active");
			t7.classList.remove("active");
			t9.classList.remove("active");
			img.classList.remove("activet4");
			img.classList.remove("activet5");
			img.classList.remove("activet6");
			img.classList.remove("activet7");
			img.classList.remove("activet9");
			contador = 4;
		};

		t9.onclick = () => {
			img.classList.toggle("activet9");
			t9.classList.toggle("active");
			t8.classList.remove("active");
			t4.classList.remove("active");
			t5.classList.remove("active");
			t6.classList.remove("active");
			t7.classList.remove("active");
			img.classList.remove("activet4");
			img.classList.remove("activet5");
			img.classList.remove("activet6");
			img.classList.remove("activet7");
			img.classList.remove("activet8");
			contador = 5;
		};

		contador++;

		if (contador > 6) {
			contador = 0;
		}

		setTimeout(ejecutarTimeouts, 5000);
	};

	ejecutarTimeouts();
};

intervalo();

const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");
const f4 = document.querySelector(".f4");
const f5 = document.querySelector(".f5");
const btn__derecho = document.getElementById("derecho");
const btn__izquierdo = document.getElementById("izquierdo");

var lugar = 3;
var dentroo = true;
var fueraa = true;

btn__derecho.onclick = () => {
	lugar++;
	f3.classList.remove("active");
	if (lugar === 1) {
		f5.classList.remove("active");
		f4.classList.remove("active");
		f3.classList.remove("active");
		f2.classList.remove("active");
		f1.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 2) {
		f5.classList.remove("active");
		f4.classList.remove("active");
		f3.classList.remove("active");
		f1.classList.remove("active");
		f2.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 3) {
		f5.classList.remove("active");
		f1.classList.remove("active");
		f4.classList.remove("active");
		f2.classList.remove("active");
		f3.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 4) {
		f5.classList.remove("active");
		f2.classList.remove("active");
		f1.classList.remove("active");
		f3.classList.remove("active");
		f4.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 5) {
		f1.classList.remove("active");
		f2.classList.remove("active");
		f3.classList.remove("active");
		f4.classList.remove("active");
		f5.classList.add("active");
		dentroo = false;
		fueraa = false;
	}

	console.log(lugar);
};

btn__izquierdo.onclick = () => {
	lugar--;
	f3.classList.remove("active");
	if (lugar === 1) {
		f5.classList.remove("active");
		f4.classList.remove("active");
		f3.classList.remove("active");
		f2.classList.remove("active");
		f1.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 2) {
		f5.classList.remove("active");
		f4.classList.remove("active");
		f3.classList.remove("active");
		f1.classList.remove("active");
		f2.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 3) {
		f5.classList.remove("active");
		f1.classList.remove("active");
		f4.classList.remove("active");
		f2.classList.remove("active");
		f3.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 4) {
		f5.classList.remove("active");
		f2.classList.remove("active");
		f1.classList.remove("active");
		f3.classList.remove("active");
		f4.classList.add("active");
		dentroo = false;
		fueraa = false;
	} else if (lugar === 5) {
		f1.classList.remove("active");
		f2.classList.remove("active");
		f3.classList.remove("active");
		f4.classList.remove("active");
		f5.classList.add("active");
		dentroo = false;
		fueraa = false;
	}

	console.log(lugar);
};

f3.classList.add("active");

function dentro() {
	if (dentroo == true) {
		f3.classList.remove("active");
	}
}

function fuera() {
	if (fueraa == true) {
		f3.classList.add("active");
		f1.classList.remove("active");
		f2.classList.remove("active");
		f4.classList.remove("active");
		f5.classList.remove("active");
	}
}

const imagen = document.querySelectorAll("[data-imagen]");
function intersection(entries, observer) {
	entries.forEach((entry) => {
		console.log("intersection", entry.target);
		if (entry.isIntersecting) {
			if (entry.target.classList.contains("img")) {
				entry.target.src = entry.target.dataset.src;
			}
			observer.unobserve(entry.target);
		}
	});
}
const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};
const observer = new IntersectionObserver(intersection, options);

imagen.forEach((i) => {
	observer.observe(i);
});

const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".lista__nav");

toggle.onclick = () => {
	if (nav.classList.contains("active")) {
		nav.classList.remove("active");
	} else {
		nav.classList.add("active");
	}
};

nav.onclick = () => {
	nav.classList.remove("active");
};
