function Mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById('edad').value;
if(edad>18)
{
	alert("mayor a 18")
}

if(edad >=13 && edad<17)
{
	alert("soy adolescente");
}

if (edad <=12) 
{
	alert("soy niño");
}


}//FIN DE LA FUNCIÓN