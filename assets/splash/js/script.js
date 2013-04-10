var paises = new Array("Abjasia","Acrotiri y Dhekelia","Afganistán","Albania","Alemania","Andorra","Angola","Anguila","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Aruba","Australia","Austria","Azerbaiyán","Bahamas","Baréin","Bangladés","Barbados","Bélgica","Belice","Benín","Bermudas","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Caimán, Islas","Camboya","Camerún","Canadá","Catar","Centroafricana, Rep.","Chad","Checa, Rep.","Chile","China","Chipre","Chipre, RTN","Cocos, Islas","Colombia","Comoras","Rep. del Congo","Rep. Dem. del Congo","Cook, Islas","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Curazao","Dinamarca","Dominica","Dominicana, Rep.","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Feroe, Islas","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Gibraltar","Granada","Grecia","Groenlandia","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guinea Ecuatorial","Guyana","Haití","Honduras","Hong Kong","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Israel","Italia","Jamaica","Japón"," Jersey","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kosovo","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macao","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta"," Malvinas, Islas"," Man, Isla de"," Marianas del Norte, Islas","Marruecos"," Marshall, Islas","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Montserrat","Mozambique","Nagorno Karabaj","Namibia","Nauru"," Navidad, Isla de","Nepal","Nicaragua","Níger","Nigeria","Niue"," Norfolk, Isla","Noruega","Nueva Caledonia","Nueva Zelanda","Omán","Osetia del Sur","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Pitcairn, Islas","Polinesia Francesa","Polonia","Portugal","Puerto Rico","Reino Unido","Ruanda","Rumania","Rusia","Sahara Occidental"," Salomón, Islas","Samoa","Samoa Americana","San Bartolomé","San Cristóbal y Nieves","San Marino","San Martín (Francia)","San Martín (Países Bajos)","San Pedro y Miquelón","San Vicente y las Granadinas","Santa Elena, Ascensión y Tristán de uña","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Somalilandia","Sri Lanka","Suazilandia","Sudáfrica","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Svalbard","Tailandia","Taiwán","Tanzania","Tayikistán","Timor Oriental","Togo","Tokelau","Tonga","Transnistria","Trinidad y Tobago","Túnez","Turcas y Caicos, Islas","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano, Ciudad del","Venezuela","Vietnam","Vírgenes Británicas, Islas","Vírgenes de los Estados Unidos, Islas","Wallis y Futuna","Yemen","Yibuti","Zambia","Zimbabue");

 
 fadeIn = function(){
 	$('#cont-gral').fadeIn();
 }
function cleanString(str){
	str = replaceAll( str, "á", "a" ); 
	str = replaceAll( str, "é", "e" );
	str = replaceAll( str, "í", "i" );
	str = replaceAll( str, "ó", "o" );
	str = replaceAll( str, "ú", "u" );
	str = replaceAll( str, "Á", "A" );
	str = replaceAll( str, "É", "E" );
	str = replaceAll( str, "Í", "I" );
	str = replaceAll( str, "Ó", "O" );
	str = replaceAll( str, "Ú", "U" );
	str = replaceAll( str, "ñ", "n" );
	str = replaceAll( str, "Ñ", "N" );
	return str
}
function replaceAll( text, busca, reemplaza ){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);
  return text;
}


$(function() {
	for(var i=0;i<paises.length;i++)	
	$('select').append("<option class='"+cleanString(paises[i])+"' value='"+cleanString(paises[i])+"'>"+paises[i]+"</option>");
	$('select .Mexico').attr("selected","selected")
});

$(function() {
	$('#cont-gral').hide();
 });