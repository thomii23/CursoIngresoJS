function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
  	 case "Enero":alert("este mes tiene 30 o mas dias");break;
     case "Febrero":alert("este mes no tiene mas de 29 dias");break;
     case "Marzo":
     case "Abril":
     case "Mayo":
     case "junio":
     case "Julio":
     case "Agosto":
	 case "Septiembre":
     case "Octubre":
     case "Noviembre":
     case "Diciembre":alert("este mes tiene 30 o mas dias");break;
}



	
	


}//FIN DE LA FUNCIÓN