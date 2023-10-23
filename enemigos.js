  // esta es la manera pero no pude

  
//const totalenemigos=[];
/*
export default class Enemigos{
    constructor({
        nombre,
        estaura,
        edad,
        habilidad=[],
    })
    {
        this.nombre=nombre,
        this.estaura=estaura,
        this.edad=edad,
        this.habilidad=habilidad;
    }
/*
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get estatura(){
        return this._estatura;
    }
    set estatura(nuevaestatura){
        this._estatura = nuevaestatura;
    }
    get edad(){
        return this._edad;
    }
    set edad(nuevoedad_edad){
        this._edad = nuevoedad_edad;
    }
    get habilidad(){
        return this._habilidad;
    }
    set habilidad(nuevahabilidad){
        this._habilidad = nuevahabilidad;
    } 
    */
//} 


/*

function prueba(form) {
    var nombre_del_enemigo= form.enm_nombre.value;
    var estatura_del_enemigo = form.enm_estatura.value;
    var edad_enemigo = form.enm_edad.value;

    const enemigo1= new Enemigos({ nombre: nombre_del_enemigo, estatura: estatura_del_enemigo, edad: edad_enemigo, habilidad_enemigo:habilidad });
    totalenemigos.push(enemigo1);
 // console.log(totalenemigos);

 form.reset();

}
*/
 
//==============================================


// esto es para añadir los "datos" al documento

const nombre = document.getElementById("enm_nombre"); 
const estatura = document.getElementById("enm_estatura"); 
const edad = document.getElementById("enm_edad"); 

const botn_c_e = document.getElementById("boton_crear_enemigo");

botn_c_e.addEventListener("click", ()=>{
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

}) 

