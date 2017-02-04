/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var productoUno;
var productoDos;
var productoTres;
function Sumar () 
{
	var resultadoSuma;
	productoUno=document.getElementById('PrecioUno').value;
	productoDos=document.getElementById('PrecioDos').value;
	productoTres=document.getElementById('PrecioTres').value;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);
	resultadoSuma=productoUno+productoDos+productoTres;
	alert("resultado de la suma "+resultadoSuma);
}
function Promedio () 
{
	var resultadoSuma;
	productoUno=document.getElementById('PrecioUno').value;
	productoDos=document.getElementById('PrecioDos').value;
	productoTres=document.getElementById('PrecioTres').value;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);
	resultadoSuma=(productoUno+productoDos+productoTres)/3;
	alert("resultado del promedio "+resultadoSuma);
}
function PrecioFinal () 
{
	var resultadoSuma;
	productoUno=document.getElementById('PrecioUno').value;
	productoDos=document.getElementById('PrecioDos').value;
	productoTres=document.getElementById('PrecioTres').value;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);

	productoUno=(productoUno*1.21);
	productoDos=(productoDos*1.21);
	productoTres=(productoTres*1.21);
	resultadoSuma=(productoUno+productoDos+PrecioTres);

alert("precio PrecioFinal "+resultadoSuma);
}