//função de digitação --->
function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) =>{
		setTimeout(() => 
			elemento.innerHTML += letra, 175 * i)

	})
}
const tituloPrincipal  = document.querySelector('#titulo');
typeWriter(tituloPrincipal);
// <---fim da da função


