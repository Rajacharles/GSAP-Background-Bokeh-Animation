const count = 50;
const blurCount = 10;
const stage = document.querySelector(".stage");

for (let i = 0; i < count; i++) {
	setTimeout(() => {
		makeLight(i);
	}, 50 * i);
}

function makeLight(i) {
	let span = document.createElement("span");
	if (i < blurCount) {
		span.classList.add("blur");
	}
	stage.appendChild(span);

	gsap.set(span, {
		left: gsap.utils.random(0, stage.offsetWidth),
		top: gsap.utils.random(0, stage.offsetHeight),
		scale: gsap.utils.random(.8, 1.2, .1),
		opacity: 0
	});

	let tl = gsap.timeline({
		paused: true,
		onComplete: () => {
			span.remove();
			makeLight(i);
		}
	})

	







	tl.play();
}