/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor((Math.random()*100)+1);
	 console.log(numeroSecreto);
	 contadorIntentos=0;

	

}

function verificar()
{
	var numero;
	numero=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	if(numero==numeroSecreto)
	{

		alert("GANASTE PUTA");
		thomy(contadorIntentos);
	 	document.getElementById('FormIngreso').reset();
	 	
	 	contadorIntentos=0;
	}
	else
	{
		if (numero<numeroSecreto) 
		{
			alert("TE FALTA PAPUSA");
			
		}
		else
		{
			alert("TE PASASTE DE MERCA");
			
        }
    }
    document.getElementById('intentos').value=contadorIntentos;

}
function thomy(intentos)	
{
if(intentos==1)
{
	alert("usted es un Psíquico");
}
if (intentos==2) 
{
	alert("excelente percepción");
}
if (intentos==3) 
{
	alert("Esto es suerte");
}
if(intentos==4)
{
	alert("Excelente técnica");
}
if(intentos==5)
{
	alert("usted está en la media");
}
if(intentos>=6 && intentos<=10)
{
	alert("falta tecnica pa");
}
if(intentos>10)
{
	alert("afortunado en el amor");
}










}