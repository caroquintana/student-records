
//Añadiendo un título
var elemento = document.createElement("h2");
var contenido = document.createTextNode("STUDENT RECORDS");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);

function Estudiante(nombre, porcentajeTecnico, porcentajeHSE, status){
	this.nombre= nombre;
	this.porcentajeTecnico= porcentajeTecnico;
	this.porcentajeHSE= porcentajeHSE;
	this.status= "active";
}

var arregloEstudiante=[];

function agregarEstudiante(){
	var nombre = prompt("Ingrese Nombre de estudiante");
	var porcentajeTecnico = prompt("Ingrese Porcentaje Técnico");
	var porcentajeHSE = prompt("Ingrese Porcentaje Habilidades Socio-Emocionales");

	var alumnos= new Estudiante(nombre, porcentajeTecnico, porcentajeHSE, this.status);
	arregloEstudiante.push(alumnos);
	imprimirEstudiante(nombre, porcentajeTecnico, porcentajeHSE);
}

function imprimirEstudiante(nombre, porcentajeTecnico, porcentajeHSE){
	var imprimir = document.getElementById("printNuevoEstudiante");
	imprimir.innerHTML = nombre + "<br>Tech Skills: "+ porcentajeTecnico + "%" + "<br> Life Skills: " + porcentajeHSE + "%" + "<br>Status: Active" + "<br><br>";	
}

function imprimir(){
	arregloEstudiante.forEach(function(elemento){
		document.getElementById("printNuevoEstudiante").innerHTML = " ";
		var contenedor = document.getElementById('contenedorEstudiante');
		contenedor.innerHTML +=  elemento.nombre + "<br>Tech Skills: "+ elemento.porcentajeTecnico + "%" + "<br> Life Skills: " + elemento.porcentajeHSE + "%" + "<br>Status: Active" + "<br><br>";
	})	
}

function actualizacion(){}
function empleabilidad(){}

