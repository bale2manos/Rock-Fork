$(document).ready(function() {
    // Variables para llevar el seguimiento de los productos seleccionados
    // Function to update the count in the header
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



    
    

    // Función para iniciar el contador descendente en el paso 3
    function iniciarContador() {
        var tiempoRestante = 50; // 10 minutos en segundos
        var bar2 = document.getElementById('timer').ldBar;
        var contador = setInterval(function() {
            $('#tiempo-restante').text(tiempoRestante);
            tiempoRestante--;
            let percentage = (tiempoRestante/50)*100;
            bar2.set(100-percentage);
            if (tiempoRestante < 0) {
                clearInterval(contador);
                $('#paso-3').hide();
                window.location.href = 'index.html';
            }
        }, 1000);
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



// Click event for the "#next-step" button
$('#next_step').on('click', function () {
    $('#popup-formulario').hide();
    $('#popup-formulario-Paypal').hide();

    $('#formularioBtn').on('click', function () {
        console.log("hola");
        $('#popup-formulario').fadeIn();
    });

    $('#formularioBtnPaypal').on('click', function () {
        console.log("hola");
        $('#popup-formulario-Paypal').fadeIn();
    });
        
    $('#formularioBtn2').on('click', function () {
        $('#popup-formulario').fadeOut();
    });

    $('#formularioBtn3').on('click', function () {
        $('#popup-formulario-Paypal').fadeOut();
    });

    $('#revisionBtn').on('click', function () {
        $('#popup-formulario').fadeOut();
    });

    $('#revisionBtn2').on('click', function () {
        $('#popup-formulario').fadeOut();
    });
    // Check if there are products selected
    if (Object.keys(productosSeleccionados).length > 0) {
        // Call the function to show selected products
        showSelectedProducts();
    } else {
        alert('No hay productos seleccionados');
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
    
    // Iniciar el contador descendente cuando se inicie el paso 3
    $('#paso-2').on('click', '#revisionBtn', function() {

        console.log("PORQUE LLEGO AQUi")
        let name = $('#name').val();
        let tarjeta = $('#tarjeta').val();
        let date = $('#date').val();
        let cvv = $('#cvv').val();
        let email = $('#email_credito').val();
        if (name === "" || tarjeta === "" || date === "" || cvv === "" || email === "") {
            alert("Por favor, rellene todos los campos");
        }
        else{
        let bar2 = document.getElementById('timer').ldBar;
        bar2.set(0);
        console.log(bar2);
        $('#timer').css({
            width: '75%',
            height: '75%',
            'margin-top': '-10vmin'
        });
        

        iniciarContador();
        $('#paso-2').hide();
        $('#paso-3').show();
        }
    });

    $('#paso-2').on('click', '#revisionBtn2', function() {

        let email = $('#email_paypal').val();
        let password = $('#password').val();

        if (email === "" || password === "") {
            alert("Por favor, rellene todos los campos");
        }
        else{
        let bar2 = document.getElementById('timer').ldBar;
        bar2.set(0);
        console.log(bar2);
        $('#timer').css({
            width: '75%',
            height: '75%',
            'margin-top': '-10vmin'
        });
        

        iniciarContador();
        $('#paso-2').hide();
        $('#paso-3').show();
        }
    });

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
    });

    $('.order_to_home').click(function() {
        console.log("CLICK TO HOME");
        window.location.href = "index.html";
    });


    
 
$('#a_pedir_a_domicilio, .wheel').click(function() {
    window.location.href = "order.html";
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
  
      // Check if all fields are filled
      if (
        addressInput.value &&
        currentDateInput.value &&
        hourInput.value &&
        comensalesInput.value
      ) {
        // Display reservation message with input information
        var reservationMessage =
          "Mesa reservada. Información: " +
          "Dirección: " +
          addressInput.value +
          ", Fecha: " +
          currentDateInput.value +
          ", Hora: " +
          hourInput.value +
          ", Personas: " +
          comensalesInput.value;
  
        alert(reservationMessage);
  
        // Clear input fields
        addressInput.value = "";
        currentDateInput.value = "";
        hourInput.value = "";
        comensalesInput.value = "";
      } else {
        // Display message if any field is missing
        alert("Rellena todos los campos");
      }
    });
  



});