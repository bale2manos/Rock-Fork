// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    
//#######################################################################################################################
//#######################################################################################################################
//#######################################################################################################################
// Al iniciar la página, solo los entrantes serán mostrados.
$(document).ready(function() {
  // Oculta todos los contenedores excepto los relacionados con "Novedades-Entrantes"
  hide_others();
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
  $('#Novedades-Entrantes1-1').show();
  $('#Novedades-Entrantes2-1').show(); 
  $('#Novedades-Entrantes1-2').show(); 
  $('#Novedades-Entrantes2-2').show(); 
  
  document.getElementById('boton-barra-entrantes').style.backgroundColor = '#FFF6ED';
  

});

//Función para manejar el color del fondo de los botones para saber cuál es el elegido por el usuario.
function colors(x) {
  document.getElementById('boton-barra-entrantes').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Burgers').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Costillas').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Ensaladas').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Postres').style.backgroundColor = '#773E22';
  document.getElementById(x).style.backgroundColor = '#FFF6ED';
}



// Cuando se haga click en entrantes, se muestran solo las novedades de entrantes.
$('#boton-barra-entrantes').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-entrantes');
  
  $('#Novedades-Entrantes1-1').show();
  $('#Novedades-Entrantes2-2').show();
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
  $('#Novedades-Entrantes1-2').show(); 
  $('#Novedades-Entrantes2-1').show(); 
});


$('#boton-barra-Burgers').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Burgers');
  $('#Novedades-Burgers1').show();
  $('#Novedades-Burgers2').show();
});

$('#boton-barra-Costillas').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Costillas');
  $('#Novedades-Costillas1').show();
  $('#Novedades-Costillas2').show();
});

$('#boton-barra-Ensaladas').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Ensaladas');
  $('#Novedades-Ensaladas1').show();
  $('#Novedades-Ensaladas2').show();
});

$('#boton-barra-Postres').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Postres');
  $('#Novedades-Postres1').show();
  $('#Novedades-Postres2').show();
});


function hide_others(){
  $('#Novedades-Entrantes1-2').hide(); 
  $('#Novedades-Entrantes2-2').hide(); 
  $('#Novedades-Entrantes1-1').hide();
  $('#Novedades-Entrantes2-1').hide();
  $('#Novedades-Entrantes1').hide();
  $('#Novedades-Entrantes2').hide();
  $('#Novedades-Burgers1').hide();
  $('#Novedades-Burgers2').hide();
  $('#Novedades-Costillas1').hide();
  $('#Novedades-Costillas2').hide();
  $('#Novedades-Ensaladas1').hide();
  $('#Novedades-Ensaladas2').hide();
  $('#Novedades-Postres1').hide();
  $('#Novedades-Postres2').hide();
}
  
$('#boton-home').click(function() {
    console.log("HOLA")
    window.location.href = 'index.html';
  });
});
  