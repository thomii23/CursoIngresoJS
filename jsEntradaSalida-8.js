/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*var resultado;
	resultado=2%10;
	alert(resultado); //no sirve para los numeros primos.
	resultado=10%2;
	alert(resultado);*/

	var resultado;
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('numeroDividendo').value;
	numeroDos=document.getElementById('numeroDivisor').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno%numeroDos;
	alert("el resultado es: "+resultado);
}
