function Mostrar()
{
  	var nombreDelMayor;
	var contador=0;
	var nombre;
	var sexo;
	var nota;
	var notaMinima;
	var sexoNotaMinima;
	var desaprobados;
	var femenino;
	var masculino;
	var promedioDeNotas;
	var sumadorDeNotas;
	var contadorDeNotas;
	var promedioDeMujeres;

	// declarar variables
	var edadMaxima;
	var edadMinima;
	var edad;
	var aprobados;
	var aprobado=0;
	var desaprobados=0;
	var respuesta='si';
    
	while(respuesta!='no')
	{  
		nombre=prompt("Nombre de la persona mas vieja");
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
	while(edad<0 || edad>100)
	{
		edad=prompt("ingrese edad");           //se usa para validad la edad siempre se valida con while
		edad=parseInt(edad);
	}
	while(sexo!="F" && sexo!="M")
	{
		sexo=prompt("ingrese si es mujer o hombre")  // se usa para validar el sexo
	}
	while(nota>0 && nota<11)    
	{
		nota=prompt("leer nota")
	}


//cantidad de mujeres que aprobadas con nota par y son menor de edad

if(sexo==femenino && nota>3)
{
	aprobados=nota;
}


	//edad promedio de las mujeres

promedioDeMujeres=promedio+nota;



  



	//desaprobados femeninos y masculinos
	if(contador==1)
	{
		desaprobados=sexo
	}
	if(sexo==masculino && nota<3)
	{
         masculino=desaprobados+1;
	}
	else
	{
 			femenino=desaprobados;
	}

	if(nota>3) //aprobados de los alumnos
	{
		aprobados++;
	}
//promedio de notas
   sumadorDeNotas=sumadorDeNotas+nota;



   
		//tengo que transformar el edad en entero por lo cual saco las "" lo que hace es tomar el contenido de la variable y lo guarda donde le digo q lo guarde por ej edad.
		contador++;

	if(contador==1)
		{
			edadMaxima=edad;
			edadMinima=edad;
			nombreDelMayor=nombre;

			
		}
	else if (edad<edadMinima)
		{
			
			edadMinima=edad;

			

		}
 	else if(edad>edadMaxima)
 	{
 		edadMaxima=edad;
 		edadMaxima=NombreDelMayor;
 		
 	}
 	if(contador==1)
 	{
 		notaMinima=nota;
 		sexoNotaMinima=sexo;
 	}        
    if(nota>notaMinima)
    {
    	notaMinima=nota;
    }









 	}



promedioDeNotas=nota+contador;






		
		respuesta=prompt("para salir teclee no");
	
	




}//FIN DE LA FUNCIÓN