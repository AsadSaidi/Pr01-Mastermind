//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";
const intentos = ["Primer", "Segundo", "Tercer", "Cuarto", "Quinto", "Sexto", "Séptimo", "Octavo", "Noveno", "Décimo"];
let numIntentos = 0

//Declaración de variables globales.
const master = [];
let userCombi = [];
var intento = 0;
var aciertos = 0;
let result = document.getElementById("Result");

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
    
    console.log(master)
    for (let i = 0; i < MAX_INTENTOS; i++) {
        const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">

    <div class="w25">
    <div id="cuadrado1" class="celUserCombi flex"> </div>
    </div>
    <div class="w25">
    <div id="cuadrado2" class="celUserCombi flex"></div>
    </div>
    <div class="w25">
    <div id="cuadrado3" class="celUserCombi flex"></div>
    </div>
    <div class="w25">
    <div id="cuadrado4" class="celUserCombi flex"></div>
   </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
   <div class="w40 h40">
        <div id="circulo1" class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div id="circulo2" class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div id="circulo3" class="cercleResult flex"></div>
   </div>
   <div class="w40 h40">
       <div id="circulo4" class="cercleResult flex"></div>
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
    let circulos = [document.getElementById('circulo1'),document.getElementById('circulo2'), document.getElementById('circulo3'), document.getElementById('circulo4') ]
    let cudrados = [document.getElementById('cuadrado1'),document.getElementById('cuadrado2'), document.getElementById('cuadrado3'), document.getElementById('cuadrado4')]
    let celdasGanadoras = [document.getElementById('celdaGanadora1'),document.getElementById('celdaGanadora2'), document.getElementById('celdaGanadora3'), document.getElementById('celdaGanadora4')]
    let info = document.getElementById('info')


    if(userCombi.length === 4){
        for(i = 0; i < 4; i++){
            if(master[i] === userCombi[i]){
                circulos[i].id = 'black'
            }else if(master.includes(userCombi[i])){
                circulos[i].id = 'white'
            }else{
                circulos[i].id = 'grey'
            }
            console.log(circulos[i])
        }

        if(circulos[0].id === 'black' && circulos[1].id === 'black' && circulos[2].id === 'black' && circulos[3].id === 'black'){
            for(i = 0; i < 4; i++){
                celdasGanadoras[i].id = userCombi[i]
                let seecionInfo = document.getElementById("seccionInfo")
                seecionInfo.id = 'infoCorrecte'
                info.textContent = "Felicidades, has acertado! :)"
            }
            
        }else{
            for(i = 0; i < 4; i++){
                cudrados[i].id = userCombi[i]
            }
            numIntentos += 1
            if(numIntentos < 10){
                info.textContent = intentos[numIntentos] + " intento, suerte!"
                reiniciarUserCombi()
            }else{
                alert("No tienes mas intentos, reincia la pagina para poder volver")
            }
            
        }
    }else{
        alert("Has de seleccionar 4 colors")
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