//your JS code here. If required.
/*
const width = document.getElementById('width');
const height = document.getElementById('height');

function getWindowSize() {
	let browser_width = window.innerWidth;
	let browser_height = window.innerHeight;
	
	width.innerHTML = browser_width;
	height.innerHTML = browser_height;	
}

window.onload = () => {
	getWindowSize();
}
*/

function updateSize(){
	const width = window.innerWidth;
	const height = window.innerHeight;
	const sizeInfo = document.getElementById('sizeInfo').querySelector('h1');
	sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}
updateSize();

window.addEventListener('resize', updateSize);



