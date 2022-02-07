
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function btn_encriptar() {
	
	const encriptar = document.getElementById("textoInicial").value;

	const yaEncriptado = encriptar
	.replace(/e/gi, "enter")
	.replace(/i/gi, "imes")
	.replace(/a/gi, "ai")
	.replace(/o/gi, "ober")
	.replace(/u/gi, "ufat");

	document.getElementById("textoFinal").value = yaEncriptado;
}

function btn_desencriptar() {
	
	const desencriptar = document.getElementById("textoInicial").value;

	const yaDesencriptado = desencriptar
	.replace(/enter/gi, "e")
	.replace(/imes/gi, "i")
	.replace(/ai/gi, "a")
	.replace(/ober/gi, "o")
	.replace(/ufat/gi, "u");

	document.getElementById("textoFinal").value = yaDesencriptado;
}

function copy() {
	
	var copiarTexto = document.querySelector("#textoFinal");
	copiarTexto.select();
	document.execCommand("copy");
}

	document.querySelector("#copy").addEventListener("click", copy);