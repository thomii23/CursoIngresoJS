function Mostrar()
{
//tomo la edad 
var edad;
edad=document.getElementById('edad').value;

/*if(edad>13 && edad<17) 
{
	alert("sos adolescente");         //forma MIA  pero no esta mal.

}
*/
if(edad <18)
{
	if(edad>12)
	{
		alert("es adolescente");     // funcion del profesor esta CORRECTA
	}
}

}//FIN DE LA FUNCIÓN