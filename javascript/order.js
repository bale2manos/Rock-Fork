$(document).ready(function() {
    // Variables para llevar el seguimiento de los productos seleccionados
    // Function to update the count in the header
      
    function setProgressBarWidth(percentage) {
        $("#progress-order > span").stop().animate({
            width: percentage + "%"
        }, 500); // You can adjust the animation duration (500 milliseconds in this case)
    }
    function calculateTotalQuantity() {
        var totalQuantity = 0;
    
        // Loop through selected products
        for (var plateName in productosSeleccionados) {
            totalQuantity += productosSeleccionados[plateName];
        }
    
        return totalQuantity;
    }
    function updateNumeroProductos() {
        var totalQuantity = calculateTotalQuantity();
        $('.numero-productos').text('(x' + totalQuantity + ')');
        if (totalQuantity > 0 && $('#paso-2').is(':hidden')) {
            setProgressBarWidth(25);
        }
        else if (totalQuantity === 0) {
            setProgressBarWidth(10);
        }
    }

    updateNumeroProductos();

    var allPlatos = {};

    // Function to extract data from a carta section
    function extractPlatos(sectionClass) {
        $(sectionClass + ' .menu_carta_completa p').each(function() {
            var plateElement = $(this);
            var plateText = plateElement.text().trim();
            
            // Extracting the plate name and price
            var matches = plateText.match(/^(.*?)\s*-\s*(\d+(\.\d+)?)€/);
            if (matches) {
                var plateName = matches[1].trim();
                var price = parseFloat(matches[2]);
                allPlatos[plateName] = price;
            }
        });
    }

    // Extract data from both carta-normal and carta-vegana sections
    extractPlatos('.carta-normal');
    extractPlatos('.carta-vegana');

    // Display the result in the console (you can store it in a variable or use it as needed)
    console.log(allPlatos);


    // Initialize variables
var productosSeleccionados = {};

// Function to update the productosSeleccionados variable
function updateProductosSeleccionados(plateName, increment) {
    if (productosSeleccionados.hasOwnProperty(plateName)) {
        productosSeleccionados[plateName] += increment;
    } else {
        productosSeleccionados[plateName] = increment;
    }
    console.log(productosSeleccionados);
}
function createCookieWithProductosSeleccionados() {
    // Obtén el timestamp actual
    var timestamp = new Date().getTime();

    // Convierte productosSeleccionados a cadena JSON
    var productosSeleccionadosJSON = JSON.stringify(productosSeleccionados);

    // Crea la cookie con el timestamp como nombre y los datos de productosSeleccionados como valor
    setCookie(timestamp.toString(), productosSeleccionadosJSON, 30); // Puedes ajustar el tiempo de expiración según tus necesidades

    // Muestra un mensaje o realiza otras acciones según sea necesario
    console.log('Cookie creada con éxito:', timestamp);
}

// Click event for the "AÑADIR" button
$('.add-plate').on('click', function () {
    var plateName = $(this).closest('.plate-container').data('plate');

    // Update productosSeleccionados by adding 1
    updateProductosSeleccionados(plateName, 1);

    // Update the quantity display
    updateQuantityDisplay(plateName);
    updateNumeroProductos();
});

// Click event for the "RETIRAR" button
$('.remove-plate').on('click', function () {
    var plateName = $(this).closest('.plate-container').data('plate');

    // Update productosSeleccionados by subtracting 1
    if (productosSeleccionados.hasOwnProperty(plateName) && productosSeleccionados[plateName] > 0) {
        updateProductosSeleccionados(plateName, -1);
    }

    if (productosSeleccionados[plateName] === 0) {
        delete productosSeleccionados[plateName];
    }

    // Update the quantity display
    updateQuantityDisplay(plateName);
    updateNumeroProductos();
});

// Function to update the quantity display
function updateQuantityDisplay(plateName) {
    // Find the corresponding quantity display element
    var quantityDisplayElement = $('.plate-container[data-plate="' + plateName + '"] .quantity-display');

    // Update the quantity display
    if (productosSeleccionados.hasOwnProperty(plateName)) {
        quantityDisplayElement.text(productosSeleccionados[plateName]);
    } else {
        quantityDisplayElement.text('0');
    }
}


function animacionFinal() {
    var progressBar = $("#music-bar > span");

    // Set the target width (100%) and duration (30000 milliseconds = 30 seconds)
    var targetWidth = "100%";
    var duration = 30000;

    // Animate the progress bar width
    progressBar.stop().animate({
        width: targetWidth
    }, {
        duration: duration,
        easing: "linear", // Use linear easing for a constant speed
        step: function (now, fx) {
            // You can add additional logic if needed during the animation
        },
        complete: function () {
            // The animation is complete
            console.log("Animation completed!");
        }
    });
}
    

   
    
// Function to show selected products in "lista-productosUL"
// Update the showSelectedProducts function
// Update the showSelectedProducts function
// Update the showSelectedProducts function
function showSelectedProducts() {
    var listaProductosUL = $('#lista-productosUL');
    listaProductosUL.empty(); // Clear the list
    var totalPagar = 0;

    // Loop through selected products
    for (var plateName in productosSeleccionados) {
        var quantity = productosSeleccionados[plateName];
        var price = allPlatos[plateName];
        var totalPrice = quantity * price;

        // Create a div element for each selected product
        var productDiv = $('<div class="selected-product"></div>');

        // Add the product image to the div
        productDiv.append('<figure><img class="selected-product-image" src="images/' + plateName.toLowerCase().replace(/ /g, '_') + '.jpg" alt="' + plateName + '"></figure>');

        // Add the product text to the div
        productDiv.append('<p>' + plateName + ' x' + quantity + ' - ' + totalPrice.toFixed(2) + '€</p>');

        // Add the bin icon to the div
        var binIcon = $('<figure class="bin-icon"><img class="bin" src="images/bin.png"></figure>');
        
        // Use a closure to capture the plateName for each bin
        (function (plate) {
            binIcon.on('click', function () {
                // Handle the bin icon click event
                updateProductosSeleccionados(plate, -1);
                if (productosSeleccionados[plate] === 0) {
                    delete productosSeleccionados[plate];
                }
                showSelectedProducts(); // Update the displayed products after removal
                updateNumeroProductos();
            });
        })(plateName);

        productDiv.append(binIcon);

        // Add the div to the list
        listaProductosUL.append(productDiv);

        // Update the total price
        totalPagar += totalPrice;
    }

    // Update the "Total a Pagar" element
    $('#total-pagar').text('Total a Pagar: ' + totalPagar.toFixed(2) + '€');
    $('#paso-1').hide();
    $('#paso-2').show();
}


$('#formularioBtn').on('click', function () {
    console.log("hola");
    $('#popup-formulario').fadeIn();
    $("#popup-formulario").css("display", "flex");
});

$('#formularioBtnPaypal').on('click', function () {
    console.log("hola");
    $('#popup-formulario-Paypal').fadeIn();
    $("#popup-formulario-Paypal").css("display", "flex");
});
    
$('#closePopup-formulario-tarjeta').on('click', function () {
    $('#popup-formulario').fadeOut();
});

$('#closePopup-formulario-Paypal').on('click', function () {
    $('#popup-formulario-Paypal').fadeOut();
});



$('#popup-formulario').hide();
$('#popup-formulario-Paypal').hide();
// Click event for the "#next-step" button
$('#next_step').on('click', function () {
    // Check if there are products selected
    if (Object.keys(productosSeleccionados).length > 0) {
        // Call the function to show selected products
        showSelectedProducts();
        setProgressBarWidth(50);
    } else {
        alert('No hay productos seleccionados');
    }
});

$('.bolsa-productos').click(function () {
    // Check if #paso-1 is visible
    if ($('#paso-1').is(':visible')) {
        // Check if there are products selected
        if (Object.keys(productosSeleccionados).length > 0) {
            // Call the function to show selected products
            showSelectedProducts();
            setProgressBarWidth(50);
        } else {
            alert('No hay productos seleccionados');
        }
    }
});






    // Guardar los productos seleccionados en una cookie
    function guardarProductosEnCookie() {
        const productosSeleccionadosJSON = JSON.stringify(productosSeleccionados);
    
        // Obtener el timestamp actual
        const timestamp = Date.now();

        // Establecer la cookie con el nombre basado en el timestamp
        document.cookie = `${timestamp}=${productosSeleccionadosJSON}`;
    }

    
    // Al cerrar la página, guardar los productos en la cookie
    window.onbeforeunload = guardarProductosEnCookie;

    $('#back-to-user-pedido').on('click', function () {
        $('#login-pedido-form').hide();

        $('#user-pedido').show();
    });

    
    $('#back-to-user-pedido-card').on('click', function () {
        $('#opciones-pago').hide();

        $('#user-pedido').show();
    });


    

    
    $('#inicio-sesion-pedido-realizado').on('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting
    
        // Obtain the values of the input fields
        var emailValue = $('#email').val();
        var passwordValue = $('#password_login').val();
        console.log(emailValue);
        console.log(passwordValue);

    
        // Check if both fields are filled
        if (emailValue && passwordValue) {
            // Execute the desired actions
            animacionFinal();
            $('#paso-2').hide();
            $('#paso-3').show();
            $('#paso-3').css('display', 'flex');
            setProgressBarWidth(100);
            createCookieWithProductosSeleccionados();
        } else {
            // Show an alert if any field is empty
            alert('Por favor, rellena los campos.');
        }
    });

    $('#pagar-pedido').on('click', function () {
        // Obtén los valores de los campos de entrada
    var emailInvitado = $('#email-invitado').val();
    var direccionPedido = $('#address-order').val();

    // Verifica que ambos campos estén llenos antes de continuar
    if (emailInvitado && direccionPedido) {
        // Aquí puedes colocar el código de la animación y otras acciones
        animacionFinal();
        $('#paso-2').hide();
        $('#paso-3').show();
        $('#paso-3').css('display', 'flex');
        setProgressBarWidth(100);
        createCookieWithProductosSeleccionados();

        // También puedes realizar otras acciones, como enviar la información a un servidor, etc.

    } else {
        // Si falta algún campo, muestra un mensaje de alerta o realiza otra acción
        alert('Por favor, completa todos los campos antes de continuar.');
    }
        
    });
    
    
    
    
    
    // Iniciar el contador descendente cuando se inicie el paso 3
    $('#paso-2').on('click', '#revisionBtn', function() {


        let name = $('#name').val();
        let tarjeta = $('#tarjeta').val();
        let date = $('#date').val();
        let cvv = $('#cvv').val();
        console.log(name);
        console.log(tarjeta);
        console.log(date);
        console.log(cvv);



        if (name === "" || tarjeta === "" || date === "" || cvv === "" ) {
            alert("Por favor, rellene todos los campos");
        }
        else{
        setProgressBarWidth(80);
           // Fade out the element with ID 'popup-formulario'
            $('#popup-formulario').fadeOut();
        
            // Set the CSS display property of the element with ID 'opciones-pago' to 'none'
            $('#opciones-pago').css('display', 'none');
        
            // Get the value of the credit card number input in the form
            var creditCardNumber = $('#tarjeta').val();
        
            // Mask the credit card number
            var maskedCreditCard = maskCreditCard(creditCardNumber);
        
            // Set the masked credit card number in the 'resumen-pago' element in 'info-pago'
            $('#resumen-pago').html(
            '<img src="./images/cruz-negra.png" alt="Cruz Negra" id="go-back-to-opciones-pago">' +
            '<p>Credit Card Number: ' + maskedCreditCard + '</p>');
        
            // Set the CSS display property of the element with ID 'info-pago' to 'flex'
            $('#info-pago').css('display', 'flex');

            $('#name').val('');
            $('#tarjeta').val('');
            $('#date').val('');
            $('#cvv').val('');
        }
        });
        
        // Function to mask the credit card number
        function maskCreditCard(creditCardNumber) {
            // Mask all but the last 4 digits of the credit card number
            var maskedDigits = creditCardNumber.slice(0, -4).replace(/./g, '*');
            var lastFourDigits = creditCardNumber.slice(-4);
            return maskedDigits + lastFourDigits;
        }
        
        
    $('#paso-2').on('click', '#go-back-to-opciones-pago', function() {
        $('#info-pago').css('display', 'none');
        $('#user-pedido').css('display', 'flex');
        setProgressBarWidth(50);
    });
 
    $('#paso-2').on('click', '#pedido-invitado', function() {
        $('#opciones-pago').css('display', 'flex');
        $('#opciones-pago').css('flex-direction', 'column');
        $('#user-pedido').css('display', 'none');
    });

    $('#paso-2').on('click', '#pedido-registrado', function() {
        $('#login-pedido-form').css('display', 'flex');
        $('#user-pedido').css('display', 'none');
    });



    $('#paso-2').on('click', '#revisionBtn2', function() {

        let email = $('#email_paypal').val();
        let password = $('#password').val();

        if (email === "" || password === "") {
            alert("Por favor, rellene todos los campos");
        }
        else{
        setProgressBarWidth(80);
        // Fade out the element with ID 'popup-formulario-Paypal'
        $('#popup-formulario-Paypal').fadeOut();
    
        // Set the CSS display property of the element with ID 'opciones-pago' to 'none'
        $('#opciones-pago').css('display', 'none');
    
        // Get the value of the email input in the PayPal popup
        var paypalEmail = $('#email_paypal').val();
    
        // Mask the email address
        var maskedEmail = maskEmail(paypalEmail);
    
        // Set the masked email value in the 'resumen-pago' element in 'info-pago'
        $('#resumen-pago').html(
            '<img src="./images/cruz-negra.png" alt="Cruz Negra" id="go-back-to-opciones-pago">' +
            '<p>' + maskedEmail + '</p>'
        );
    
        // Set the CSS display property of the element with ID 'info-pago' to 'flex'
        $('#info-pago').css('display', 'flex');

        $('#email_paypal').val('');
        $('#password').val('');
        }
    
    });
    // Function to mask the email address
    function maskEmail(email) {
        var atIndex = email.indexOf('@');
        if (atIndex !== -1) {
            var firstTwoChars = email.substring(0, 2);
            var domain = email.substring(atIndex);
            var maskedDomain = domain.replace(/./g, '*');
            return firstTwoChars + '*****' + maskedDomain;
        } else {
            // Handle invalid email format (no '@' character)
            return 'Invalid email format';
        }
    }
    


    // MIGA DE PAN

    // Function to update quantity display in paso-1
    function updateQuantityDisplaysInPaso1() {
        $('.plate-container').each(function () {
            var plateName = $(this).data('plate');
            var quantityDisplayElement = $(this).find('.quantity-display');
            quantityDisplayElement.text(productosSeleccionados[plateName] || '0');
        });
    }

    // Click event for returning to paso-1
    $('#selecciona-productos').click(function () {
        console.log("CLICK");
        updateQuantityDisplaysInPaso1(); // Update quantity displays
        $('#paso-2').hide();
        $('#paso-1').show();
        setProgressBarWidth(25);
    });

    $('.order_to_home').click(function() {
        console.log("CLICK TO HOME");
        window.location.href = "index.html";
    });


    
 
$('#a_pedir_a_domicilio, .wheel').click(function() {
    window.location.href = "order.html";
  });
  
  $('#go_home').on('click', function () {
    window.location.href = 'index.html';
  });
  
  function showPopup() {
    scrollPosition = window.scrollY;
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

  function showPopup2() {
    scrollPosition = window.scrollY;
    console.log("holaaa")
    $("#popup-overlay2, .popup-container2").slideDown("200");
    $("#pag1").css("display", "none"); // Hide the rest of the page
    $(".header-book-table").css("display", "none"); // Hide the rest of the page
  
    // Smoothly scroll to the top
    $("html, pag1").animate({ scrollTop: 0 }, "fast");
  }
  
  // Function to hide the popup
  function hidePopup2() {
    $("#popup-overlay2, .popup-container2").slideUp("200");
   
    $("#pag1").css("display", ""); // Hide the rest of the page
    setTimeout(function () {
      // Code to execute after 2 seconds
      $(".header-book-table").css("position", "fixed"); // Hide the rest of the page
    }, 500);
    $(".header-book-table").css("display", ""); // Hide the rest of the page
  
  
    // Smoothly scroll back to the previous position
    $("html, pag1").animate({ scrollTop: scrollPosition }, "fast");
  
  }
  
  // Attach the click event to the user icon
  $(".burger-icon-book-table").on("click", function() {
    showPopup2();
  });
  
  // Attach the click event to the overlay and close button (if any)
  $(".close-popup-login2").on("click", function() {
    hidePopup2();
  });
  

  
    
    var privacyPolicyLink2 = document.getElementById("mini3");
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