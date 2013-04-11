var paises = new Array("Abjasia","Acrotiri y Dhekelia","Afganistán","Albania","Alemania","Andorra","Angola","Anguila","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Aruba","Australia","Austria","Azerbaiyán","Bahamas","Baréin","Bangladés","Barbados","Bélgica","Belice","Benín","Bermudas","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Caimán, Islas","Camboya","Camerún","Canadá","Catar","Centroafricana, Rep.","Chad","Checa, Rep.","Chile","China","Chipre","Chipre, RTN","Cocos, Islas","Colombia","Comoras","Rep. del Congo","Rep. Dem. del Congo","Cook, Islas","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Curazao","Dinamarca","Dominica","Dominicana, Rep.","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Feroe, Islas","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Gibraltar","Granada","Grecia","Groenlandia","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guinea Ecuatorial","Guyana","Haití","Honduras","Hong Kong","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Israel","Italia","Jamaica","Japón"," Jersey","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kosovo","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macao","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta"," Malvinas, Islas"," Man, Isla de"," Marianas del Norte, Islas","Marruecos"," Marshall, Islas","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Montserrat","Mozambique","Nagorno Karabaj","Namibia","Nauru"," Navidad, Isla de","Nepal","Nicaragua","Níger","Nigeria","Niue"," Norfolk, Isla","Noruega","Nueva Caledonia","Nueva Zelanda","Omán","Osetia del Sur","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Pitcairn, Islas","Polinesia Francesa","Polonia","Portugal","Puerto Rico","Reino Unido","Ruanda","Rumania","Rusia","Sahara Occidental"," Salomón, Islas","Samoa","Samoa Americana","San Bartolomé","San Cristóbal y Nieves","San Marino","San Martín (Francia)","San Martín (Países Bajos)","San Pedro y Miquelón","San Vicente y las Granadinas","Santa Elena, Ascensión y Tristán de uña","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Somalilandia","Sri Lanka","Suazilandia","Sudáfrica","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Svalbard","Tailandia","Taiwán","Tanzania","Tayikistán","Timor Oriental","Togo","Tokelau","Tonga","Transnistria","Trinidad y Tobago","Túnez","Turcas y Caicos, Islas","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano, Ciudad del","Venezuela","Vietnam","Vírgenes Británicas, Islas","Vírgenes de los Estados Unidos, Islas","Wallis y Futuna","Yemen","Yibuti","Zambia","Zimbabue");

 
 fadeIn = function(){
 	$('#cont-gral').fadeIn();
 	$(".dateField:first").focus();
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
	return str.toLowerCase();
}
function replaceAll( text, busca, reemplaza ){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza); 
  return text;
}
function isOver18(){
	  var fecha = new Date($("#year").val(), $("#month").val()*1-1, $("#day").val());
  	  var ahora = new Date();
  	  var age = ahora.getTime() - fecha.getTime();
  	  return !(age < (1000 * 60 * 60 * 24 * 365.26 * 18));
}
function changeInputSatus(selector,rem){
  	  var cl = "error"; //error class
  	  var d= 100; // delay
  	  if(typeof rem==="undefined") rem = false;
	  
	  $(selector).addClass(cl);
	  if(rem) $(selector).removeClass(cl);
	  return false;
}
function isValidDate(keyPressed){
	  if(typeof keyPressed==="undefined") keyPressed = false;
	  $("#buttons input").removeClass("error");
	  var isValid = true;
	  if($("#day").val()=="" && $("#month").val()=="" && $("#year").val()=="") {
	  	  if(!keyPressed) changeInputSatus("#buttons input");
		  return false
	  }; 
	  if(!keyPressed){
		 if($("#day").val()==""){changeInputSatus("#buttons input#day");isValid=false;} 
		 if($("#month").val()==""){changeInputSatus("#buttons input#month");isValid=false;} 
		 if($("#year").val()==""){changeInputSatus("#buttons input#year");isValid=false;} 
	  }
	  if($("#day").val()*1<0 || $("#day").val()*1>31 || isNaN($("#day").val()*1) ){
		  changeInputSatus("#buttons input#day");
		  isValid = false;
	  }
	  if($("#month").val()*1<0 || $("#month").val()*1>12 || isNaN($("#month").val()*1)){
	  	  changeInputSatus("#buttons input#month");
		  isValid = false;
	  }
	  if($("#year").val()!="" && $("#year").val()*1<1900 || isNaN($("#year").val()*1) || $("#year").val()!="" && $("#year").val()*1>2010){
	  	  changeInputSatus("#buttons input#year");
		  isValid = false;
	  };
	  if($("#year").val().length<4 && $("#year").val().length<4 && !keyPressed) changeInputSatus("#buttons input#year");
	  else changeInputSatus("#buttons input#year",true);
	  return isValid; 
}
$(function() {
	$('#cont-gral').hide();
	for(var i=0;i<paises.length;i++)	
	$('select').append("<option class='"+cleanString(paises[i])+"' value='"+cleanString(paises[i])+"'>"+paises[i]+"</option>");
	$('select .mexico').attr("selected","selected");
	$(".dateField").val("");

	
	$(".dateField").keyup(function(event) {
	  if(event.which!=9 && event.which!=13) 
	  	if($(this).val().length == $(this).attr("maxlength")) 
	  		if($(this).attr("maxlength")==4) $("button").focus();
	  		else $(this).parents("li").next().find(".dateField").focus();
	  isValidDate(true);	
	});
	
	$(".dateField").focusin(function(){
		$(this).val("");
		$(this).removeClass("error");
	});
	
});

 