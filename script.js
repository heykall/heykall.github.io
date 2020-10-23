object.addEventListener("load", script.js);

function start(angkat) {
	angkat.dataTransfer.effecAllowed = 'move'
	angkat.dataTransfer.setData("Text", angkat.target.id)
}

function end(angkat){
	angkat.target.style.opacity = ''		
	angkat.dataTransfer.clearData("Data")		
}

function enter(angkat) {
	return true;
}

function over(angkat) {
	if ((angkat.target.className == "pindahPuzzle") || (angkat.target.id == "puzzle"))
	return false
	else
	return true
}
    
function drop(angkat){
	angkat.preventDefault()
	let taruh = angkat.dataTransfer.getData("Text")
	angkat.target.appendChild(document.getElementById(taruh))
}
