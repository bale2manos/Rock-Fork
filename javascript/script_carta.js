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

$('#mini-home').click(function() {
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


var current_position = 0;

function showPopup() {
  scrollPosition = window.scrollY;
  console.log("holaaa")
  $("#popup-overlay, .popup-container").fadeIn();
  $("body").css("overflow", "hidden"); // Hide the rest of the page
  $(".header-book-table").css("position", "static"); // Hide the rest of the page

  // Smoothly scroll to the top
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

// Function to hide the popup
function hidePopup() {
  $("#popup-overlay, .popup-container").fadeOut();
  $("body").css("overflow", "auto"); // Restore overflow property
  setTimeout(function () {
    // Code to execute after 2 seconds
    $(".header-book-table").css("position", "fixed"); // Hide the rest of the page
  }, 500);

  // Smoothly scroll back to the previous position
  $("html, body").animate({ scrollTop: scrollPosition }, "fast");
}



// Attach the click event to the user icon
$(".user-icon-book-table").on("click", function() {
  showPopup();
});

// Attach the click event to the overlay and close button (if any)
$(".close-popup-login").on("click", function() {
  hidePopup();
});

var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Month is zero-based
  var year = currentDate.getFullYear();

  // Format the date as "DD/MM/YYYY"
  var formattedDate = `${day}/${month}/${year}`;

  // Set the formatted date as the placeholder
  try{  document.getElementById("current_date").placeholder = formattedDate;}
  catch(err){console.log("No hay current_date");}



  var dropdownBtn = document.getElementById("dropdown-btn");
  var dropdownContent = document.getElementById("time-dropdown");
  var hourInput = document.getElementById("hour");


  // DROPDOWN
  var dropdownBtn = document.getElementById("dropdown-btn");
  var dropdownContent = document.getElementById("time-dropdown");
  var hourInput = document.getElementById("hour");
  var addressInput = document.getElementById("address");
  var currentDateInput = document.getElementById("current_date");
  var comensalesInput = document.getElementById("comensales");
  var reservationForm = document.getElementById("reservar-mesa");

  dropdownBtn.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches(".triangulo-book-table")) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  });

  // Add click event listeners to each time option
  var timeOptions = document.querySelectorAll(".time-option");
  timeOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      // Update the text of the hour input
      hourInput.value = option.textContent;

      // Close the dropdown after selecting a time
      dropdownContent.style.display = "none";
    });
  });


  $("#popup-reservation-cross").click(function () {
    $("#reserva-satisfactoria").fadeOut();
  });
  // Add submit event listener to the reservation form
  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate and sanitize user inputs
    var address = addressInput.value.trim();
    var currentDate = currentDateInput.value;
    var hour = hourInput.value;
    var comensales = comensalesInput.value;

    if (address && currentDate && hour && comensales) {

        // Update the popup with the reservation details
        $("#popup-address").text("Dirección: " + address);
        $("#popup-date").text("Fecha: " + currentDate);
        $("#popup-hour").text("Hora: " + hour);
        $("#popup-comensales").text("Personas: " + comensales);
        

        // Clear input fields
        addressInput.value = "";
        currentDateInput.value = "";
        hourInput.value = "";
        comensalesInput.value = "";


        // Show the popup
        $("#reserva-satisfactoria").fadeIn();
        $("#reserva-satisfactoria").css("display", "flex");
    } else {
        // Display message if any field is missing
        alert("Rellena todos los campos");
    }
});

$("#downloadButton").on("click", function() {
    // Get the information from the <p> elements
    var address = $("#popup-address").text().replace('Dirección: ', '').trim();
    var date = $("#popup-date").text().replace('Fecha: ', '').trim();
    var hour = $("#popup-hour").text().replace('Hora: ', '').trim();
    var comensales = $("#popup-comensales").text().replace('Personas: ', '').trim();

    // Parse date and time
    var dateParts = date.split('/');
    var day = parseInt(dateParts[0], 10);
    var month = parseInt(dateParts[1], 10);
    var year = parseInt(dateParts[2], 10);

    // Construct a new Date object using the parsed components
    var parsedDate = new Date(year, month - 1, day+1);

    // Format the date to YYYYMMDD
    var formattedDate = parsedDate.toISOString().slice(0, 10).replace(/[-T]/g, '');
    var formattedTime = hour.replace(':', '') + '00';

    // Adjust the date format to YYYYMMDD and time to HHmmss
    var isoFormattedDateTime = formattedDate + 'T' + formattedTime;

    // Log the final ISO-formatted date and time for debugging
    console.log("ISO Formatted DateTime:", isoFormattedDateTime);

  // Generate a unique identifier (UID) for the event
  var uid = 'unique-id-' + Math.random().toString(36).substring(2);

  // Get the current timestamp for DTSTAMP
  var dtstamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  // Generate .ics content with required properties
  var icsContent = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Your Company//Your App//EN\r\nBEGIN:VEVENT\r\nUID:${uid}\r\nDTSTAMP:${dtstamp}\r\nSUMMARY:Reserva de mesa\r\nLOCATION:Calle Pepino 23, Leganés, Madrid\r\nDESCRIPTION:Reserva de mesa para ${comensales} personas.\r\nDTSTART:${isoFormattedDateTime}\r\nDTEND:${isoFormattedDateTime}\r\nEND:VEVENT\r\nEND:VCALENDAR`;

  // Create Blob from the .ics content
  var blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });

  // Create a download link
  var downloadLink = document.createElement("a");
  downloadLink.href = window.URL.createObjectURL(blob);
  downloadLink.download = "reservation.ics";

  // Trigger a click on the link to initiate the download
  downloadLink.click();
});




});
  