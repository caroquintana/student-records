
//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("STUDENT RECORDS");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);


function Estudiante(nombre, tech, skills, status){

	this.nombre= nombre;
	this.tech= tech;
	this.skills= skills;
	this.status= status;
}


var arregloEstudiante=[];

function agregarEstudiante(){
	var nombre = prompt("Ingrese Nombre de estudiante");
	var porcentajeTecnico = prompt("Ingrese Porcentaje Técnico");
	var porcentajeHSE = prompt("Ingrese Porcentaje Habilidades Socio-Emocionales");

	var imprimir = document.getElementById("printNuevoEstudiante");
	imprimir.innerHTML = nombre + "<br>Tech Skills: "+ porcentajeTecnico + "%" + "<br> Life Skills: " + porcentajeHSE + "%" + "<br>Status: Active";
	arregloEstudiante.push(imprimir.innerHTML);
}


function imprimir(){
	var contenedor = document.getElementById('contenedorEstudiante');
	contenedor.appendChild(arregloEstudiante);
	contenedor.innerHTML += arregloEstudiante;
}


function actualizacion(){}
function empleabilidad(){}

