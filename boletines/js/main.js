console.log("inicio")


let links = document.querySelectorAll(".close");


links.forEach(function(link){

	link.addEventListener("click", function(ev){
		//ev.preventDefault();

		let content = document.querySelector(".content");
		// Remover
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");
		// Agregar
		content.classList.add("fadeOutUp");
		content.classList.add("animated");

		setTimeout(function(){
			location.href = "../index.html";
		},1000);
		return false;
	})


})