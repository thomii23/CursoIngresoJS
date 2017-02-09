function Mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById('edad').value;
if(edad>=18) //----> para negar el if se hace if(!(edad>=18)) y cambia el && por el Or
//----->y quedaria if(!(edad <18 or edad>12)) y asi cambiaria con el OR cambiarian los signos de mayor y igual
{
	alert("no es adolescente");
	
}                                      
else
	alert("soy adolescente");


}//FIN DE LA FUNCIÓN