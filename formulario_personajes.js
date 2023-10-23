  // no pude

//import Habilidad from "../habiliades";
//import Enemigos from "./enemigos";


//  const totalpersonajes=[];
/*
export default  class personaje {

 
    constructor({
      nombre,
      estatura,
      edad,
      habilidad = [],
    }) {
      this.nombre = nombre;
      this.estatura = estatura;
      this.edad = edad;
      this.habilidad = habilidad;
    }
 }

*/

/*
function prueba(form) {
    var nombre_del_personaje = form.per_nombre.value;
    var estatura_del_personaje = form.per_estatura.value;
    var edad_personaje = form.per_edad.value;


    const personaje1 = new personaje({ nombre: nombre_del_personaje, estatura: estatura_del_personaje, edad: edad_personaje, habilidad_personaje:habilidad });

  //  const enemigo1= new enemigos({ nombre: nombre_del_enemigo, estatura: estatura_del_enemigo, edad: edad_enemigo, habilidad_enemigo:habilidad });

    totalpersonajes.push(personaje1);
  //  totalenemigos.push(enemigo1)

  //  console.log(totalpersonajes);
  //  console.log(totalenemigos);

    form.reset();

}
*/




//==================================================





//  esta es una manera de cambiar el dominio, pero no es la decuada 
// esto es para añadir los "datos" al documento
const nombre = document.getElementById("per_nombre"); 
const estatura = document.getElementById("per_estatura"); 
const edad = document.getElementById("per_edad"); 

const contenedor=document.getElementById("contenedor_resultado")

const registro=[]

/*
const contenedor_resultado1=document.getElementById("resultado1")
const contenedor_resultado2=document.getElementById("resultado2")
const contenedor_resultado3=document.getElementById("resultado3")
*/
const botn_c_p = document.getElementById("boton_crear_personaje");
botn_c_p.addEventListener("click", ()=>{
    console.log(nombre.value);
    console.log(estatura.value);
    console.log(edad.value);

    const dato_nombre=document.createElement("p")
    dato_nombre.textContent=(nombre.value)
    
    const dato_estatura=document.createElement("p")
    dato_estatura.textContent=(estatura.value)
    
    const dato_edad=document.createElement("p")
    dato_edad.textContent=(edad.value)

    document.body.appendChild(dato_nombre)
    document.body.appendChild(dato_estatura)
    document.body.appendChild(dato_edad)

    //contenedor_resultado1.contentEditable=dato_nombre

    registro.push(nombre.value, estatura.value, edad.value)
    console.log(registro);

}) 





