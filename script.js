//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";


//Declaración de variables globales.
const master = [];
let userCombi = [];
var intento = 0;
var aciertos = 0;

function init() {
    //1. Genera el código random del master
    for(let i = 0; i < 4; i++){
       let posicionArray = Math.trunc((Math.random() * (7 - 0) + 0));
       master[i] = COLORS[posicionArray]
    }
    //2. Crea todas las filas según el número de intentos.
    crearIntentos(MAX_INTENTOS)
}


function crearIntentos(MAX_INTENTOS) {
    let result = document.getElementById("Result");
    
    
    for (let i = 0; i < MAX_INTENTOS; i++) {
        const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">

    <div class="w25">
    <div id="fila${1 + 1}cuadrado1" class="celUserCombi flex"> </div>
    </div>
    <div class="w25">
    <div id="fila${1 + 1}cuadrado2" class="celUserCombi flex"></div>
    </div>
    <div class="w25">
    <div id="fila${1 + 1}cuadrado3" class="celUserCombi flex"></div>
    </div>
    <div class="w25">
    <div id="fila${1 + 1}cuadrado4" class="celUserCombi flex"></div>
   </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
   <div class="w40 h40">
        <div id="fila${1 + 1}circulo1" class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div id="fila${1 + 1}circulo2" class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div id="fila${1 + 1}circulo3" class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div id="fila${1 + 1}circulo4" class="cercleResult flex"></div>
   </div>
    <div>
    </div>`;
    
        result.className= "rowResult w100 flex wrap"
        result.innerHTML += ROW_RESULT;
    }
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha
introducido el usuario.
Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar() {
    if(userCombi.length === 4){
        for(i = 0; i < 4; i++){
            if(master[i] === userCombi[i]){
                result.push('black')
            }else if(master.includes(userCombi[i])){
                result.push('white')
            }else{
                result.push('gray')
            }
        }
        reiniciarUserCombi()
    }
    
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    if(userCombi.length < 4){
        userCombi.push(color)

        if(userCombi.length < 4){
            document.getElementById("combiText").value += color + " - "
        }else{
            document.getElementById("combiText").value += color 
        }
    }else{
        alert("Solo puedes elegir 4 colores")
    }
    
}



/** Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
       <div class="w40 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
    <div>
</div>`;

//Reinicia las elecciones del usuario
function reiniciarUserCombi(){
    userCombi = [];
    resultado = [];
    document.getElementById("combiText").value = "";
}