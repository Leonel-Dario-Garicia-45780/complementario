/*
export default class Habilidad{
    constructor({
    nombre_habilidad,
    nivel_de_poder,
})
{
    this.nombre_habilidad=nombre_habilidad,
    this.nivel_de_poder=nivel_de_poder;
}
} 

*/

//=====================================================

// esto es para añadir los "datos" al documento
const nombre = document.getElementById("hab_nombre"); 
const nivel = document.getElementById("nivel_de_poder"); 

const botn_c_h = document.getElementById("boton_crear_habilidad");

botn_c_h.addEventListener("click", ()=>{
    console.log(nombre.value);
    console.log(nivel.value);
    
    const dato_nombre=document.createElement("p")
    dato_nombre.textContent=(nombre.value)
 
    const dato_nivel=document.createElement("p")
    dato_nivel.textContent=(nivel.value)    

    document.body.appendChild(dato_nombre)
    document.body.appendChild(dato_nivel)
    
}) 
