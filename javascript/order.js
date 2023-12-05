$(document).ready(function() {
    // Variables para llevar el seguimiento de los productos seleccionados
    var productosSeleccionados = [];


    
    
    // Función para actualizar el contador en el paso 2
    function actualizarCesta(productoNuevo) {
        let cesta = $('#productos-en-cesta');
        let cestaItems = cesta.children();
    
        // Verifica si el producto ya está en la cesta
        let productoExistenteNuevo = cestaItems.filter(function() {
            return $(this).text().includes(productoNuevo.nombre);
        });
    
        if (productoExistenteNuevo.length > 0) {
            // Si el producto ya existe en la cesta, actualiza su cantidad
            let cantidadActual = parseInt(productoExistenteNuevo.text().match(/\d+/)[0]);
            cantidadActual = productoNuevo.cantidad;
            console.log("Cantidad producto nuevo:",productoNuevo.cantidad);
            productoExistenteNuevo.html(productoNuevo.nombre + ' - Cantidad: ' + cantidadActual + ' <button class="box eliminar"></button>');
        } else {
            // Si el producto no existe en la cesta, crea un nuevo elemento "li"
            let cestaItem = document.createElement("li");
            cestaItem.innerHTML = productoNuevo.nombre + ' - Cantidad: ' + productoNuevo.cantidad + ' <button class="box eliminar"></button';
            
            cesta.append(cestaItem);
        }
    }
    
    $('#productos-en-cesta').on('click', 'button.eliminar', function() {
        // Obtén el nombre del producto desde el texto del elemento "li"
        var productoNombre = $(this).parent().text().split(' - Cantidad:')[0];
    
        // Elimina el elemento "li" padre del botón
        $(this).closest('li').remove();
    
        // Elimina el producto correspondiente de productosSeleccionados
        productosSeleccionados = productosSeleccionados.filter(function(producto) {
            return producto.nombre !== productoNombre;
        });
    });

    $('#lista-productosUL').on('click', 'button.eliminar', function() {
        // Obtén el nombre del producto desde el texto del elemento "li"

        // Usar una expresión regular para extraer los valores
        let text = $(this).parent().text();

        var matches = text.match(/([^-]+) - Cantidad: (\d+) - Precio: €(\d+)/);

        // matches[1] contendrá el nombre
        var nombre = matches[1].trim();

        // matches[2] contendrá la cantidad como cadena, puedes convertirla a un número entero
        var cantidad = parseInt(matches[2], 10);

        // matches[3] contendrá el precio como cadena, también puedes convertirla a un número
        var precio = parseInt(matches[3], 10);
        console.log("NOMBRE", nombre);
        console.log("CANTIDAD", cantidad);
        console.log("PRECIO", precio);
        
    
        // Elimina el elemento "li" padre del botón
        $(this).closest('li').remove();
        $('#productos-en-cesta').children().filter(function() {
            return $(this).text().includes(nombre);
        }).remove();
    
        // Elimina el producto correspondiente de productosSeleccionados
        productosSeleccionados = productosSeleccionados.filter(function(producto) {
            return producto.nombre !== nombre;
        })
        
        var totalText = $('#total-pagar').text();
        console.log('TEXTO', totalText);
        var total = parseFloat(totalText.replace('Total a Pagar: $', ''));
        console.log('TOTAL', total);
        total -= precio * cantidad;
        console.log('TOTAL UPDATED', total);
        $('#total-pagar').text('Total a Pagar: $' + total);
        ;
    });
    
    
    

   

    // Función para iniciar el contador descendente en el paso 3
    function iniciarContador() {
        var tiempoRestante = 30; // 10 minutos en segundos
        var bar2 = document.getElementById('timer').ldBar;
        var contador = setInterval(function() {
            $('#tiempo-restante').text(tiempoRestante);
            tiempoRestante--;
            let percentage = (tiempoRestante/30)*100;
            bar2.set(100-percentage);
            if (tiempoRestante < 0) {
                clearInterval(contador);
                $('#paso-3').hide();
                window.location.href = 'index.html';
            }
        }, 1000);
    }

    // Cargar productos del restaurante y permitir la selección
    // Puedes cargar productos desde un servicio web o un archivo JSON
    // Aquí solo se muestra un ejemplo estático.
    var productos = [
        { nombre: 'Rock Burger', precio: 12, cantidad: 0, image: 'images/hamburguesa1.jpg' },
        { nombre: 'Blues Burger', precio: 12, cantidad: 0, image: 'images/hamburguesa2.jpg' },
        { nombre: 'Quesadillas', precio: 7, cantidad: 0, image: 'images/quesadillas.jpg' },
        { nombre: 'Nacho&Fork', precio: 6, cantidad: 0, image: 'images/nachos.jpg' },
        { nombre: 'Salchichas', precio: 4, cantidad: 0, image: 'images/salchichas.jpg' },
        { nombre: 'Rock&Rings', precio: 8, cantidad: 0, image: 'images/entrantes1.jpg' },
    ];
    
    var listaProductos = $('#product-list');
    var listaProductosUl = $('<ul></ul>');
    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        
        var imgElement = $('<img class="box">').attr('src', producto.image).attr('alt', producto.nombre).css({
            'width': '10vh',
            'height': '10vh',
            'object-fit': 'cover',  
            'margin-right': '3vw'
        });
        
        
        var productoLi = $('<li></li>');
        productoLi.append(imgElement);  
        productoLi.append(document.createTextNode(producto.nombre + ' - Precio: €' + producto.precio + ' '));
        productoLi.append($('<button class="seleccionar box"></button>'));
        
        productoLi.data('producto', producto);
        listaProductosUl.append(productoLi);
    }
    listaProductos.append(listaProductosUl);
    
    

     // Función para mostrar el paso 2 y el resumen del pedido
     $('#next_step').click(function() {
        console.log("CLICK");
        if (productosSeleccionados.length > 0) {
            $('#paso-1').hide();
            $('#paso-2').show();
            
            // Mostrar productos seleccionados y calcular el total a pagar
            var total = 0;
            var listaProductos = $('#lista-productosUL');
            listaProductos.empty();
            for (var i = 0; i < productosSeleccionados.length; i++) {
                var producto = productosSeleccionados[i];
                var imgElement = $('<img class="box">').attr('src', producto.image).attr('alt', producto.nombre).css({
                    'width': '10vh',
                    'height': '10vh',
                    'object-fit': 'cover',
                    'margin-right': '3vw'
                });
                //listaProductos.append('<li>' + producto.nombre + ' - Cantidad: ' + producto.cantidad + '</li>');
                total += producto.precio * producto.cantidad;
                var productoLi = $('<li></li>');
                productoLi.append(imgElement); 
                productoLi.append(document.createTextNode(producto.nombre + ' - Cantidad: '+ producto.cantidad +' - Precio: €' + producto.precio + ''));
                productoLi.append($('<button class="box eliminar"></button>'));
                
                productoLi.data('producto', producto);
                listaProductos.append(productoLi);
            }
            
            $('#total-pagar').text('Total a Pagar: $' + total);
        } else {
            alert("¿Estás seguro de que no quieres nada?");
        }

        
       
    });
    

    

    // Evento para seleccionar un producto
    listaProductos.on('click', '.seleccionar', function() {
        var productoLi = $(this).parent();
        var producto = productoLi.data('producto');
        var cantidad = parseInt(prompt('Ingrese la cantidad deseada:', '1'), 10);
        console.log("cantidad inicial",cantidad,'de producto',producto.nombre);

        if (!isNaN(cantidad) && cantidad > 0) {
            // Verifica si el producto ya está en productosSeleccionados
            var productoExistente = productosSeleccionados.find(function(item) {
                return item.nombre === producto.nombre;
            });

            if (productoExistente) {
                // Si el producto ya existe, actualiza su cantidad
                productoExistente.cantidad += cantidad;
                console.log("Esto es la cantidad del productoExistente al principio: ",productoExistente.cantidad);
                console.log("Este es el producto: ",productoExistente);
                actualizarCesta(productoExistente);
                
            } else {
                producto.cantidad = cantidad;
                // Si el producto no existe, agrégalo a productosSeleccionados
                productosSeleccionados.push(producto);
                console.log("Este es el producto: ",producto);
                actualizarCesta(producto);
            }

            // Llama a la función para actualizar la cesta
            
        }
    });


    // Evento para quitar la selección de un producto
    listaProductos.on('contextmenu', 'li', function(e) {
        e.preventDefault();
        var productoLi = $(this);
        var producto = productoLi.data('producto');
        var index = productosSeleccionados.indexOf(producto);
        if (index > -1) {
            productosSeleccionados.splice(index, 1);
            productoLi.remove();
            actualizarCesta();
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


        let name = $('#name').val();
        let tarjeta = $('#tarjeta').val();
        let date = $('#date').val();
        let cvv = $('#cvv').val();
        if (name === "" || tarjeta === "" || date === "" || cvv === "") {
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

    $('#selecciona-productos').click(function() {
        console.log("CLICK");
        $('#paso-2').hide();
        $('#paso-1').show();
    });

    $('.order_to_home').click(function() {
        console.log("CLICK TO HOME");
        window.location.href = "index.html";
    });


    
 

});