function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
            alert("Es false");
            return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,correcta){
        this.pregun=pregun;
        
        this.respuestas=[];
        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        this.respuestas[2]=respuesta3;
   
        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;       
}
var retorno=[];
var preguntas=[];


preguntas[0]=new pregunta("¿Quiénes fueron los creadores de la hoy conocida Arquitectura de Von Neumann demás de Von Neumann?","Alan Turing","Ecker y Mauchly","Norbert Wiener",1);
preguntas[1]=new pregunta("¿Que propuso Hilbert basándose a las bases de la teoría de la computabilidad?","Entsheidungsproblem","La tesis de Church-Turing ","Manchester Mark I",0);
preguntas[2]=new pregunta("¿Que contiene una CPU?","Dispositivos de salida y un procesador","Una memoria central y dispositivo de entrada y salida","Carburador y motor",1);
preguntas[3]=new pregunta("Ejemplos de dispositivos de entrada","Teclado, lector cd, micrófono, escáner ","Pantalla, bocinas, teclado, lector de cd","Impresora, escáner, pantalla, lector",0);
preguntas[4]=new pregunta("¿En que años se desarrolló la arquitectura de Von Neumann?","En los años 30","En los años 50","En los años 40",2);
preguntas[5]=new pregunta("¿Cual fue el primer propósito de los artefactos simples antes de pasar por las máquinas programables?","La navegación","La lectura","El cálculo",2);
preguntas[6]=new pregunta("además de Von Neumann ¿quién es considerado padre de la informática?","Alan Turing","Ecker y Mauchly","Norbert Wiener",0);
preguntas[7]=new pregunta("¿Los ordenadores actuales en que máquina están basados?","Manchester Mark I","La máquina universal de Turing","Macintosh",1);
preguntas[8]=new pregunta("¿Qué otra función tiene la memoria además de guardar datos?","Borrar datos","Ejecutar programas","Borrar datos",1);
preguntas[9]=new pregunta("¿Los ordenadores de hoy en día que simulan en la máquina universal de Turing?","Lector de disquete","Tarjetas perforadas","la cinta con la memoria",2);
preguntas[10]=new pregunta("¿Qué es un intérprete?","Es un proceso que ejecuta un programa"," Es un procesador que analiza un programa","Traductor de imágenes",1);
preguntas[11]=new pregunta("¿En qué tipo de lenguaje debe estar escrito un intérprete?","Debe estar escrito en html","Un intérprete debe estar escrito en lenguaje de alto nivel","Un intérprete debe estar escrito en lenguaje de bajo nivel",1);
preguntas[12]=new pregunta("¿Qué condición debe cumplir un intérprete para poder ser analizado?","Este debe estar escrito correctamente","Debe estar guardado en un disco externo","Debe estar subido en la web",0);
preguntas[13]=new pregunta("¿Cómo considera Manuel Alfonseca Moreno a los intérpretes en su libro?","En su libro son considerados como compiladores-interpretes","Son considerados abominaciones","Son considerados hardware de alto nivel",0);
preguntas[14]=new pregunta("¿Cuáles son las dos fases que tienen los intérpretes?","La fase de compilación y la fase de interpretación","Fase de análisis y fase de lectura","Fase de lectura y fase de interpretación",0);
preguntas[15]=new pregunta("¿De qué otra forma se conoce a la Fase de Compilación de un intérprete?","Fase de introducción del programa","Fase de interpretación del programa","Fase de compilación",0);
preguntas[16]=new pregunta("¿De qué otra forma se conoce a la Fase de Interpretación de un intérprete?","Fase de detención del programa","Fase de ejecución del programa","Fase de finalización del programa",1);
preguntas[17]=new pregunta("¿En qué consiste la fase de compilación de un intérprete?","El programa de lee y compila a un formato o lenguaje","El programa detiene y ejecuto un formato o lenguaje","El programa de partida se compila y traduce a un formato o lenguaje intermedio",2);
preguntas[18]=new pregunta("¿En qué consiste la fase de interpretación de un intérprete?","El programa administrar las interpretaciones del lenguaje y se ejecuta","El programa borra el formato o lenguaje intermedio se interpreta y ejecuta","El programa compilado al formato o lenguaje intermedio se interpreta y ejecuta",2);
preguntas[19]=new pregunta("¿Qué hace un intérprete con un programa que se encuentre correctamente escrito?","Lo borra directamente del disco de la maquina y lo ejecuta el interprete","Lo ejecuta el disco externo de la máquina en el cual este se detiene ","Lo ejecuta directamente en lenguaje maquina en el cual se esté ejecutando el interprete",2);


