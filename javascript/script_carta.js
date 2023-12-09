// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    
//#######################################################################################################################
//#######################################################################################################################
//#######################################################################################################################
// Al iniciar la página, solo los entrantes serán mostrados.
$(document).ready(function() {
  // Oculta todos los contenedores excepto los relacionados con "Novedades-Entrantes"
  hide_others();
  hide_others2();
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
  $('#Novedades-Entrantes1-1').show();
  $('#Novedades-Entrantes2-1').show(); 
  $('#Novedades-Entrantes1-2').show(); 
  $('#Novedades-Entrantes2-2').show(); 
  $('#botones_carta_vegana').hide(); 
  $('#boton-carta-default').hide(); 
  


  
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

function colors2(x) {
  document.getElementById('boton-barra-entrantes-vegano').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Burgers-vegano').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Ensaladas-vegano').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Postres-vegano').style.backgroundColor = '#773E22';
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

$('#boton-barra-entrantes-vegano').click(function() {
  console.log("HOLA");
  hide_others2();
  colors2('boton-barra-entrantes-vegano');
  $('#Novedades-Entrantes1-1-vegano').show();
  $('#Novedades-Entrantes1-vegano').show();
  $('#Novedades-Entrantes2-vegano').show();
  $('#Novedades-Entrantes2-1-vegano').show(); 
});


$('#boton-barra-Burgers').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Burgers');
  $('#Novedades-Burgers1').show();
  $('#Novedades-Burgers2').show();
  $('#Novedades-Burgers1-2').show();
  $('#Novedades-Burgers2-1').show();
});

$('#boton-barra-Burgers-vegano').click(function() {
  console.log("HOLA");
  hide_others2();
  colors2('boton-barra-Burgers-vegano');
  $('#Novedades-Burgers1-vegano').show();
  $('#Novedades-Burgers2-vegano').show();
  $('#Novedades-Burgers1-1-vegano').show();
  $('#Novedades-Burgers2-1-vegano').show();
});

$('#boton-barra-Costillas').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Costillas');
  $('#Novedades-Costillas1').show();
  $('#Novedades-Costillas2').show();
  $('#Novedades-Costillas1-2').show();
  $('#Novedades-Costillas2-1').show();
});

$('#boton-barra-Ensaladas').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Ensaladas');
  $('#Novedades-Ensaladas1').show();
  $('#Novedades-Ensaladas2').show();
  $('#Novedades-Ensaladas1-2').show();
  $('#Novedades-Ensaladas2-1').show();
});

$('#boton-barra-Ensaladas-vegano').click(function() {
  console.log("HOLA");
  hide_others2();
  colors2('boton-barra-Ensaladas-vegano');
  $('#Novedades-Ensaladas1-vegano').show();
  $('#Novedades-Ensaladas2-vegano').show();
  $('#Novedades-Ensaladas1-1-vegano').show();
  $('#Novedades-Ensaladas2-1-vegano').show();
});

$('#boton-barra-Postres').click(function() {
  console.log("HOLA");
  hide_others();
  colors('boton-barra-Postres');
  $('#Novedades-Postres1').show();
  $('#Novedades-Postres2').show();
  $('#Novedades-Postres1-2').show();
  $('#Novedades-Postres2-1').show();
});

$('#boton-barra-Postres-vegano').click(function() {
  console.log("HOLA");
  hide_others2();
  colors2('boton-barra-Postres-vegano');
  $('#Novedades-Postres1-vegano').show();
  $('#Novedades-Postres2-vegano').show();
  $('#Novedades-Postres1-1-vegano').show();
  $('#Novedades-Postres2-1-vegano').show();
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
  $('#Novedades-Burgers1-2').hide();
  $('#Novedades-Burgers2-1').hide();
  $('#Novedades-Costillas1').hide();
  $('#Novedades-Costillas2').hide();
  $('#Novedades-Costillas1-2').hide();
  $('#Novedades-Costillas2-1').hide();
  $('#Novedades-Ensaladas1').hide();
  $('#Novedades-Ensaladas2').hide();
  $('#Novedades-Ensaladas1-2').hide();
  $('#Novedades-Ensaladas2-1').hide();
  $('#Novedades-Postres1').hide();
  $('#Novedades-Postres2').hide();
  $('#Novedades-Postres1-2').hide();
  $('#Novedades-Postres2-1').hide();
}

function hide_others2(){
  $('#Novedades-Entrantes1-1-vegano').hide();
  $('#Novedades-Entrantes2-1-vegano').hide();
  $('#Novedades-Entrantes1-vegano').hide();
  $('#Novedades-Entrantes2-vegano').hide();
  $('#Novedades-Burgers1-vegano').hide();
  $('#Novedades-Burgers2-vegano').hide();
  $('#Novedades-Burgers1-1-vegano').hide();
  $('#Novedades-Burgers2-1-vegano').hide();
  $('#Novedades-Ensaladas1-vegano').hide();
  $('#Novedades-Ensaladas2-vegano').hide();
  $('#Novedades-Ensaladas1-1-vegano').hide();
  $('#Novedades-Ensaladas2-1-vegano').hide();
  $('#Novedades-Postres1-vegano').hide();
  $('#Novedades-Postres2-vegano').hide();
  $('#Novedades-Postres1-1-vegano').hide();
  $('#Novedades-Postres2-1-vegano').hide();
}
  
$('#boton-home').click(function() {
    console.log("HOLA")
    window.location.href = 'index.html';
  });

$('#boton-carta-vegana').click(function() {
    console.log("HOLA")
  $('#botones_carta_default').hide();
  $('#botones_carta_vegana').show();
  $('#carta_primera_columna').hide();
  $('#carta_segunda_columna').hide();
  $('#carta_primera_columna-vegano').show();
  $('#carta_segunda_columna-vegano').show();
  $('#boton-carta-default').show(); 
  $('#boton-carta-vegana').hide(); 
  $('#Novedades-Entrantes1-vegano').show();
  $('#Novedades-Entrantes2-vegano').show();
  $('#Novedades-Entrantes1-1-vegano').show();
  $('#Novedades-Entrantes2-1-vegano').show(); 
  document.getElementById('boton-barra-entrantes-vegano').style.backgroundColor = '#FFF6ED';
});

$('#boton-carta-default').click(function() {
    console.log("HOLA")
  $('#botones_carta_default').show();
  $('#botones_carta_vegana').hide();
  $('#carta_primera_columna').show();
  $('#carta_segunda_columna').show();
  $('#carta_primera_columna-vegano').hide();
  $('#carta_segunda_columna-vegano').hide();
  $('#boton-carta-default').hide(); 
  $('#boton-carta-vegana').show(); 
  $('#botones_carta_default').show(); 
});
});
  