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
