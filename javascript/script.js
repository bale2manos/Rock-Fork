// JavaScript
document.addEventListener('DOMContentLoaded', function () {


  

    

    /* GALERIA 1 */
    var thumbnails = document.querySelectorAll(".thumbnail")
    var mainImage = document.querySelector("#zoomed-image")
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("click", function () {
        mainImage.src = this.src
      })
}
    

// **********LOGIN********** //
document.getElementById('registrationFormPopUp').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get user inputs
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Check if the user is already logged in by checking the existence of the cookie
  if (getCookie(email)) {
      alert('Ya has iniciado sesión');
      hidePopup();
      return;
  }

  // Encrypt the data (you can use a more secure encryption method in a production environment)
  var encryptedPassword = CryptoJS.AES.encrypt(password, 'secretKey').toString();

  // Create a cookie with the email as the title and encrypted data
  setCookie(email, encryptedPassword, 30); // 30 days expiration

  // You can perform additional actions here, such as redirecting the user or displaying a success message

  // Clear the form fields
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  hidePopup();
});
    


  

    // ******************COOKIES MANAGEMENT******************  
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    function getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(';');
      console.log("COOKIES CURRENT: ");
      console.log(ca);
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    


  

    /* ******************MENU******************  */
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); 
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const footerLinks = document.querySelectorAll('footer a');

  footerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); 
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Ajuste enlace menu original
  $('#go-to-order').click(function() {

    window.location.href = 'order.html';
});




//#######################################################################################################################
//#######################################################################################################################
//#######################################################################################################################
// Al iniciar la página, solo los entrantes serán mostrados.

$(document).ready(function() {
  hide_others();
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
  document.getElementById('boton-barra-entrantes').style.backgroundColor = '#FFF6ED';
  document.getElementById('boton-barra-entrantes').style.color = '#773E22';

});

//Función para manejar el color del fondo de los botones para saber cuál es el elegido por el usuario.
function colors(x) {
  document.getElementById('boton-barra-entrantes').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Burgers').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Costillas').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Ensaladas').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-Postres').style.backgroundColor = '#773E22';
  document.getElementById('boton-barra-entrantes').style.color = '#FFFFFF';
  document.getElementById('boton-barra-Burgers').style.color = '#FFFFFF';
  document.getElementById('boton-barra-Costillas').style.color = '#FFFFFF';
  document.getElementById('boton-barra-Ensaladas').style.color = '#FFFFFF';
  document.getElementById('boton-barra-Postres').style.color = '#FFFFFF';
  document.getElementById(x).style.backgroundColor = '#FFF6ED';
  document.getElementById(x).style.color = '#773E22';
}

function colors2(x){
  document.getElementById(x).style.color = '#C1A88C';
}

// Cuando se haga click en entrantes, se muestran solo las novedades de entrantes.
$('#boton-barra-entrantes').click(function() {
  hide_others();
  colors('boton-barra-entrantes');
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
});


$('#boton-barra-Burgers').click(function() {
  hide_others();
  colors('boton-barra-Burgers');
  $('#Novedades-Burgers1').show();
  $('#Novedades-Burgers2').show();
});

$('#boton-barra-Costillas').click(function() {
  hide_others();
  colors('boton-barra-Costillas');
  $('#Novedades-Costillas1').show();
  $('#Novedades-Costillas2').show();
});

$('#boton-barra-Ensaladas').click(function() {
  hide_others();
  colors('boton-barra-Ensaladas');
  $('#Novedades-Ensaladas1').show();
  $('#Novedades-Ensaladas2').show();
});

$('#boton-barra-Postres').click(function() {
  hide_others();
  colors('boton-barra-Postres');
  $('#Novedades-Postres1').show();
  $('#Novedades-Postres2').show();
});


function hide_others(){
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
// Ajuste enlace menu original
$('#boton-ver-carta-completa, #a_la_carta, #cartapop, .menu-footer').click(function() {
  window.location.href = 'carta.html';
});

$('#a_pedir_a_domicilio, .wheel').click(function() {
  window.location.href = "order.html";
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
$(".user-icon-book-table, #pedido").on("click", function() {
  showPopup();
});

// Attach the click event to the overlay and close button (if any)
$(".close-popup-login").on("click", function() {
  hidePopup();
});


function showPopup2() {
  scrollPosition = window.scrollY;
  $("#popup-overlay2, .popup-container2").slideDown("200");
  $("body").css("overflow", "hidden"); // Hide the rest of the page
  $(".header-book-table").css("display", "none"); // Hide the rest of the page

  // Smoothly scroll to the top
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

// Function to hide the popup
function hidePopup2() {
  $("#popup-overlay2, .popup-container2").slideUp("200");
 
  $("body").css("overflow", "auto"); // Restore overflow property
  setTimeout(function () {
    // Code to execute after 2 seconds
    $(".header-book-table").css("position", "fixed"); // Hide the rest of the page
  }, 500);
  $(".header-book-table").css("display", ""); // Hide the rest of the page


  // Smoothly scroll back to the previous position
  $("html, body").animate({ scrollTop: scrollPosition }, "fast");

}

// Attach the click event to the user icon
$(".burger-icon-book-table").on("click", function() {
  showPopup2();
});

// Attach the click event to the overlay and close button (if any)
$(".close-popup-login2, #mini-1").on("click", function() {
  hidePopup2();
});

$('#HISTORIAPOP').on('click', function () {
  if (window.location.href.indexOf('index.html') !== -1) {
  hidePopup2()
   $('html, body').animate({
    scrollTop: '1200vmin'
  }, 500);
} else {
  // If it's not the desired page, change the page and then scroll.
  // Replace 'newPageURL' with the URL of the desired page.

  window.location.href =  'index.html#boton-ver-carta-completa';

}
});


var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Month is zero-based
  var year = currentDate.getFullYear();

  // Format the date as "DD/MM/YYYY"
  var formattedDate = `${day}/${month}/${year}`;

  // Set the formatted date as the placeholder
  document.getElementById("current_date").placeholder = formattedDate;


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

  hourInput.addEventListener("click", function () {
    console.log("holaaa");
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    console.log(dropdownContent.style.display);
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
        $("#popup-address").text("Dirección: " + 'Calle Pepinero, 23, Leganés');
        $("#popup-date").text("Fecha: " + currentDate);
        $("#popup-hour").text("Hora: " + hour);
        $("#popup-comensales").text("Personas: " + comensales);


        // Obtener el ID actual de la cookie o inicializarlo si no existe
        var reservationId = parseInt(getCookie("reservationId")) || 1;

        // Crear una nueva cookie con los datos de la reserva
        var reservationData = {
            "id": reservationId,
            "date": currentDate,
            "hour": hour,
            "comensales": comensales,
        };
        var now = new Date();
        var timestamp = now.toISOString().split('T')[0] + ' ' + now.toTimeString().split(' ')[0];

        var cookieTitle = "Reserva " + timestamp;
        setCookie(cookieTitle, JSON.stringify(reservationData), 30);
        setCookie("reservationId", reservationId + 1, 30);


        

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

// Función para establecer una cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) == 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}

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

$('#go_home').on('click', function () {
  window.location.href = 'index.html';
});



$('#info-entrantes-1').on('click', function () {
  $('#popup-entrantes-1').fadeIn();
  $('#popup-entrantes-1').css('display', 'flex');
});

$('#closePopup-entrantes-1').on('click', function () {
  $('#popup-entrantes-1').fadeOut();
  $('#popup-entrantes-1').css('display', 'none');
});

$('#info-entrantes-2').on('click', function () {
  $('#popup-entrantes-2').fadeIn();
  $('#popup-entrantes-2').css('display', 'flex');
});

$('#closePopup-entrantes-2').on('click', function () {
  $('#popup-entrantes-2').fadeOut();
  $('#popup-entrantes-2').css('display', 'none');
});

$('#info-burgers-1').on('click', function () {
  $('#popup-burgers-1').fadeIn();
  $('#popup-burgers-1').css('display', 'flex');
});

$('#closePopup-burgers-1').on('click', function () {
  $('#popup-burgers-1').fadeOut();
  $('#popup-burgers-1').css('display', 'none');
});

$('#info-burgers-2').on('click', function () {
  $('#popup-burgers-2').fadeIn();
  $('#popup-burgers-2').css('display', 'flex');
});

$('#closePopup-burgers-2').on('click', function () {
  $('#popup-burgers-2').fadeOut();
  $('#popup-burgers-2').css('display', 'none');
});

$('#info-costillas-1').on('click', function () {
  $('#popup-costillas-1').fadeIn();
  $('#popup-costillas-1').css('display', 'flex');
});

$('#closePopup-costillas-1').on('click', function () {
  $('#popup-costillas-1').fadeOut();
  $('#popup-costillas-1').css('display', 'none');
});

$('#info-costillas-2').on('click', function () {
  $('#popup-costillas-2').fadeIn();
  $('#popup-costillas-2').css('display', 'flex');
});

$('#closePopup-costillas-2').on('click', function () {
  $('#popup-costillas-2').fadeOut();
  $('#popup-costillas-2').css('display', 'none');
});

$('#info-ensaladas-1').on('click', function () {
  $('#popup-ensaladas-1').fadeIn();
  $('#popup-ensaladas-1').css('display', 'flex');
});

$('#closePopup-ensaladas-1').on('click', function () {
  $('#popup-ensaladas-1').fadeOut();
  $('#popup-ensaladas-1').css('display', 'none');
});

$('#info-ensaladas-2').on('click', function () {
  $('#popup-ensaladas-2').fadeIn();
  $('#popup-ensaladas-2').css('display', 'flex');
});

$('#closePopup-ensaladas-2').on('click', function () {
  $('#popup-ensaladas-2').fadeOut();
  $('#popup-ensaladas-2').css('display', 'none');
});


$('#info-postres-1').on('click', function () {
  $('#popup-postres-1').fadeIn();
  $('#popup-postres-1').css('display', 'flex');
});

$('#closePopup-postres-1').on('click', function () {
  $('#popup-postres-1').fadeOut();
  $('#popup-postres-1').css('display', 'none');
});

$('#info-postres-2').on('click', function () {
  $('#popup-postres-2').fadeIn();
  $('#popup-postres-2').css('display', 'flex');
});

$('#closePopup-postres-2').on('click', function () {
  $('#popup-postres-2').fadeOut();
  $('#popup-postres-2').css('display', 'none');
});

$("#popup-reservation-cross").click(function () {
  $("#reserva-satisfactoria").fadeOut();
});

var privacyPolicyLink = document.getElementById("privacy-policy-footer-link");
var privacyPolicyLink2 = document.getElementById("mini3");


privacyPolicyLink.addEventListener("click", function (event) {
      event.preventDefault();

      // Create a link element
      var downloadLink = document.createElement("a");

      // Set the attributes for the download link
      downloadLink.href = "./Rock Fork - Privacy Policy.pdf"; 
      downloadLink.download = "Rock Fork - Privacy Policy.pdf";

      // Append the link to the body
      document.body.appendChild(downloadLink);

      // Trigger the click event on the link
      downloadLink.click();

      // Remove the link from the body
      document.body.removeChild(downloadLink);
  });

  privacyPolicyLink2.addEventListener("click", function (event) {
    event.preventDefault();

    // Create a link element
    var downloadLink = document.createElement("a");

    // Set the attributes for the download link
    downloadLink.href = "./Rock Fork - Privacy Policy.pdf"; 
    downloadLink.download = "Rock Fork - Privacy Policy.pdf";

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
});



setTimeout(function() {
  console.log("Hiding loader container.");
  $("#loaderContainer").fadeOut();
}, 0);
});
  