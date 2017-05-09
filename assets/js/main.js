var elemento = document.createElement("h2");
var contenido = document.createTextNode("STUDENT RECORDS");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.getElementById("titulo").appendChild(elemento);

var img = new Image();
var div = document.getElementById("imagen");

img.onload = function() {
  div.appendChild(img);
};

img.src = 'http://laboratoria.la/app/assets/img/logo_laboratoria-09.svg';


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
	imprimir.innerHTML = nombre.bold().toUpperCase() + "<br><strong>Tech Skills: </strong>"+ porcentajeTecnico + "%" + "<br><strong>Life Skills: </strong>" + porcentajeHSE + "%" + "<br><strong>Status:</strong> Active" + "<br><br>";	
}

function imprimir(){
	arregloEstudiante.forEach(function(elemento){
		document.getElementById("printNuevoEstudiante").innerHTML = " ";
		var contenedor = document.getElementById('contenedorEstudiante');
		contenedor.innerHTML +=  elemento.nombre.bold().toUpperCase() + "<br><strong>Tech Skills: </strong>"+ elemento.porcentajeTecnico + "%" + "<br><strong>Life Skills:</strong> " + elemento.porcentajeHSE + "%" + "<br><strong>Status:</strong> Active" + "<br><br>";
	})	
}

function actualizacion(){}
function empleabilidad(){}

