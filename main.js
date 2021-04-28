var min=1; 
var max=1000; 



function defnewid() {

 
	var nmal = Math.floor(Math.random() * (max - min)) + min; 
	alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	random = Math.ceil(Math.random() * 25);
	random2 = Math.ceil(Math.random() * 25);
	random3 = Math.ceil(Math.random() * 25);
	random4 = Math.ceil(Math.random() * 25);


	var lettre_aleatoire = alphabet[random];
	var lettre_aleatoire2 = alphabet[random2];
	var lettre_aleatoire3 = alphabet[random3];
	var lettre_aleatoire4 = alphabet[random4];
	

	var monid = nmal + lettre_aleatoire + lettre_aleatoire2 + lettre_aleatoire3 + lettre_aleatoire4 ;
	document.getElementById("affid2").innerHTML = monid;
	}
