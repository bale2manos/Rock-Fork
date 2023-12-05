// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const dniInput = document.getElementById('dni');
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const dniError = document.getElementById('dniError');
    const clearBtn = document.getElementById('clearBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    /* GALERIA 1 */
    var thumbnails = document.querySelectorAll(".thumbnail")
    var mainImage = document.querySelector("#zoomed-image")
    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("click", function () {
        mainImage.src = this.src
      })
}
    
    /* GALERIA 2 */
    var thumbnails2 = document.querySelectorAll(".thumbnail2")
    var mainImage2 = document.querySelector("#zoomed-image2")
    for (var i = 0; i < thumbnails2.length; i++) {
      thumbnails2[i].addEventListener("click", function () {
        mainImage2.src = this.src
      })
}  


    // Validar DNI español:
    function validateSpanishDNI(dni) {
        const dniPattern = /^[0-9]{8}[A-Za-z]$/;
    
        if (!dniPattern.test(dni)) {
          console.log("MARCOOOS");
          displayDNIError('DNI Inválido');
          return false;
        }
    
        const dniNumber = dni.slice(0, 8);
        const dniLetter = dni.slice(8).toUpperCase();
    
        const letterIndex = parseInt(dniNumber) % 23;
        const validLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const expectedLetter = validLetters.charAt(letterIndex);
    
        if (dniLetter != expectedLetter) {
          displayDNIError('DNI Inválido');
          return false; 
        }
    
        return true;
    }

    /* Eror en el DNI */
    function displayDNIError(message) {
        const dniError = document.getElementById('dniError');
        dniError.textContent = message;
      
        setTimeout(function () {
          dniError.textContent = '';
        }, 3000);
      }


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
    
    /* ******************FORMULARIO******************  */
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateSpanishDNI(dniInput.value)) {
          return;
        }


        
        const userData = {
          dni: dniInput.value,
          fullName: fullNameInput.value,
          phone: phoneInput.value,
          email: emailInput.value,
        };

        
        const userDataJSON = JSON.stringify(userData);

        console.log("HOLA");
        console.log(userDataJSON);
        const user_registered = getCookie(dniInput.value);

        if (user_registered == ""){
          setCookie(dniInput.value, userDataJSON, 7);
        }
        else {
          alert("Already registered, welcome again!!");
        }
        
        registrationForm.reset();

    });

    clearBtn.addEventListener('click', function () {
      registrationForm.reset();
    });
  
    cancelBtn.addEventListener('click', function () {
      registrationForm.reset();
      alert('Form canceled');
    });
  

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
    console.log("HOLA")
    window.location.href = 'order.html';
});




//#######################################################################################################################
//#######################################################################################################################
//#######################################################################################################################
// Al iniciar la página, solo los entrantes serán mostrados.
$(document).ready(function() {
  // Oculta todos los contenedores excepto los relacionados con "Novedades-Entrantes"
  hide_others();
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
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
  $('#Novedades-Entrantes1').show();
  $('#Novedades-Entrantes2').show();
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
$('#boton-ver-carta-completa').click(function() {
  console.log("HOLA")
  window.location.href = 'carta.html';
});

});
  