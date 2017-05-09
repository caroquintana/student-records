function Estudiante(nombre, tech, skills, status){
	this.nombre= nombre;
	this.tech= tech;
	this.skills= skills;
	this.status= status;
}


function agregarEstudiante(){
	var nombre = prompt("Ingrese Nombre de estudiante");
	var porcentajeTecnico = prompt("Ingrese Porcentaje Técnico");
	var porcentajeHSE = prompt("Ingrese Porcentaje Habilidades Socio-Emocionales");

	var imprimir = document.getElementById("printNuevoEstudiante");
	imprimir.innerHTML = nombre + "<br>Tech Skills: "+ porcentajeTecnico + "%" + "<br> Life Skills: " + porcentajeHSE + "%" + "<br>Status: Active";
}





function imprimir(){
	var contenedor = document.getElementById('contenedorEstudiante');
	contenedor.innerHTML;
}


function actualizacion(){}
function empleabilidad(){}

