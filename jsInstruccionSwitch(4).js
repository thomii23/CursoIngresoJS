function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
	case "Enero":
	case"Marzo":
	case"Mayo":
	case"Julio":         
	case"Agosto":
	case "Octubre": 
	case "diciembre":alert("tiene 31 dias");break;

    case "febrero":alert("tiene 28 dias");break; //28

    default:
    alert("tiene 30 dias");
}

	
	
     



}//FIN DE LA FUNCIÓN