$(document).ready(function(){
  $("input:button").click(function(){
      btn = $(this).val();
      pantalla = $("#resultado").val();
      if(btn == "C"){
        $("#resultado").val("");
      }else{
        if(btn == "="){
          $("#resultado").val(eval(pantalla));
        }else{
          $("#resultado").val(pantalla + btn);
        }
      }
  })
});

/*Al hacer click en los input del tipo button, se ejecutará una función que:
    -Posee 2 variables: btn y pantalla. btn guarda el valor del input tipo button que se ha presionado, gracias a this.

    pantalla guarda el valor que mostrará en la input que será nuestra pantalla de calculadora.

  Una vez guardado esos valores, realizamos una sentencia if/else donde:
    -Si el valor del botón presionado es "C", la pantalla debe mostrarse en blanco, si no, se ejecutará otra sentencia:
      -Si el valor del botón presionado es igual a "=", evaluará el string que se encuentra guardado en pantalla y gracias
      a eval, resolverá la operación.
      -En caso de que sea otro botón distinto a "=", ingresará en pantalla el valor del botón presionado, concatenandolo
      con el o los valores que ya se encontraban guardados en pantalla.
*/


/*
¿Para qué sirve this?
Lo que hace $(this) es seleccionar al elemento que activó el evento, de esta manera hacemos que el evento corra de
forma individual en cada uno de los elementos (en este caso, de los botones). Así que lo que hicimos fue decirle a
jQuery que cuando se haga clic en el input button corra un evento, pero que este evento corra únicamente en este/this
elemento (el elemento que provocó el evento).

¿Para qué sirve eval?
.eval() evalúa el string que se va concatenando en nuestra pantalla, para ir descifrandolo como operación. Este funciona
de manera básica con sumas, restas, multiplicaciones y divisiones, ahorrandonos un montón de código que tendríamos que
hacer por cada operación.
*/
