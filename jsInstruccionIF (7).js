function Mostrar()
{
//tomo la edad  

	var estadoCivil
	var edad

	estadoCivil=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;

	if(edad<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser Soltero.");
	}
	else
	{
		alert("Es grande para NO ser Soltero.");
	}


    


}//FIN DE LA FUNCIÓN