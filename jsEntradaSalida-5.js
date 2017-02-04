/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//CUANDO ESCRIBO LA VARIABLE GET ELEMENT SIEMPRE TIENE Q ESTAR
	//adelante el Document.getElementById("") 

	var nombre
	var edad
	nombre=prompt("ingresa su nombre");
	edad=prompt("ingresa su edad");
	nombre=document.getElementById('elNombre').value=nombre;
    edad=document.getElementById('laEdad').value=edad;
    alert("Usted se llama "+nombre+" y tiene " +edad+" años");
}

