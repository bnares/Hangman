

var haslo = "bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var haslo1 = haslo.length;
var haslo2="";

for(i =0; i<haslo1; i++)
{
	if(haslo.charAt(i)!=" ")
	{
		
		haslo2 = haslo2+"-";
	
	}
	else
	{
			haslo2 = haslo2+" ";
	}
	
}

function wypisz_haslo()
{
	
	document.getElementById("plansza").innerHTML = haslo2;
	
}

window.onload = start;

function start()
{
	
	var tresc_diva = "";
	
	for(i = 0; i<35; i++)
	{
	
		tresc_diva = tresc_diva+'<div class = "litera">A</div>';
		if((i+1)%7==0) 
		{
		tresc_diva = tresc_diva+'<div style = "clear:both;"></div>';	
		}
	
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	
	wypisz_haslo();
}