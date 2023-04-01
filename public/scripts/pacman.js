window.addEventListener("load", (event) => {
const pacman = document.querySelector('.pacMan');
let imageIterator = 0;
let mouseTop;
let mouseLeft;
let stepInc = 0;

let movePacman = (e) => {
	mouseTop = e.clientY;
	mouseLeft = e.clientX;
	// pacman.style.top = `${mouseTop}px`;
	// pacman.style.left = `${mouseLeft}px`;
}

let	imageUrlArray = [
	'./images/closePacman.webp',
	'./images/openPacman.webp'
]
	pacman.style.top = "10px";
	pacman.style.left = "10px";
let animate = () => {
	pacman.style.backgroundImage = `url('${imageUrlArray[imageIterator]}')`;

	var pacmanTop = pacman.style.top.replace("px","");
	var pacmanLeft = pacman.style.left.replace("px","");
	var pacmanTopInt = parseInt(pacmanTop);
	var pacmanLeftInt = parseInt(pacmanLeft)

	if (pacmanTopInt+10 < mouseTop) {    //pacman above mouse
		
		pacman.style.transfrom = 'scaleX(1)';
		pacman.style.rotate = "90deg"
		stepInc = pacmanTopInt + 10;
		pacman.style.top = `${stepInc}px`;

		} else if (pacmanLeftInt+10 < mouseLeft) { //pacman to the left
			
		pacman.style.transfrom = 'scaleX(1)';
		pacman.style.rotate = "0deg"
		stepInc = pacmanLeftInt + 10;
		pacman.style.left = `${stepInc}px`;
		} else if(pacmanLeftInt-10 > mouseLeft) {

		stepInc = pacmanLeftInt -10;
		pacman.style.transform = `scaleX(-1)`;
		pacman.style.left = `${stepInc}px`;

	} else if(pacmanTopInt-10 > mouseTop) {
		
		pacman.style.transfrom = 'scaleX(1)';
		pacman.style.rotate = "-90deg"
		stepInc = pacmanTopInt -10;
		pacman.style.top= `${stepInc}px`;
	}	
	if(imageIterator === 1) {
		imageIterator = 0;
	} else {
		imageIterator = 1;
	}
}

document.body.addEventListener("mousemove", movePacman);
setInterval(animate,200);
// console.log("1" < 2)

});
