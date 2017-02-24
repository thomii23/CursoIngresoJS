function Mostrar()
{var cont=0;
 var cont1=0;
 var cont2=0;
 var cont3=0;
 var cont4=0;
 var cont5=0;
 var cont6=0;
 var cont7=0;
 var cont8=0;
 var cont9=0;
 var cont10=0;
 


 for(;cont<10000;cont++)
 {	var numeroRandom=Math.floor((Math.random()*10+1));
 	
 	
 		switch(numeroRandom)
 	{
     case 1:
           cont1++;
     		break;
     case 2:
     		cont2++;
     		break;
     case 3:
           cont3++;
     		break;
     case 4:
           cont4++;
     		break;
     case 5:
           cont5++;
     		break;
     case 6:
           cont6++;
     		break;
     case 7:
     if(cont7==7)
     {
     	continue;
     }
           cont7++;
     		break;
     case 8:
           cont8++;
     		break;
     case 9:
           cont9++;
     		break;
     case 10:
           cont10++;
     		break;																


 	}

 cont++;
 console.log(cont);

 
}
 console.log("la cantidad de uno" +cont1/cont*100+"%");
 console.log("la cantidad de dos" +cont2/cont*100+"%");
 console.log("la cantidad de tres" +cont3/cont*100+"%");
 console.log("la cantidad de cuatro" +cont4/cont*100+"%");
 console.log("la cantidad de cinco " +cont5/cont*100+"%");
 console.log("la cantidad de seis" +cont6/cont*100+"%");
 console.log("la cantidad de siete" +cont7/cont*100+"%");
 console.log("la cantidad de ocho" +cont8/cont*100+"%");
 console.log("la cantidad de nueve" +cont9/cont*100+"%");
 console.log("la cantidad de diez" +cont10/cont*100+"%");

 
















// el for empieza desde 0 despues evalua el contador<5 y ejecuta el console.log y va al contador ++ no pasa mas por el 0.
 //for(;;)//si al sacar los punto y coma el for deja de andar pero se puede utilizar con elementos o sin. con un break

 //{
   //console.log(cont);
   //cont++;
   //if(cont==5)
   //{
   //   break;
   //}




 
}