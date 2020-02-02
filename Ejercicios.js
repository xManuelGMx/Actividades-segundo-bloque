function ejecutar1(){
    //Programa que recibe valores numéricos hasta que el usuario ingrese 'Stop', los números son guardados en un arreglo.
    const array = [];
    let temp;
    do{
        temp = prompt("Ingrese  un número: ");
        if(isNaN(+temp)){

        }else{
            array.push(+temp);
        }

    }while(temp !== "Stop");
}
// --------------------------------------------------
function ejecutar2(){
    //Programa que recibe todo tipo de datos diferentes de 0, y los separa en arreglos por pares, impares y datos no numéricos.
    let n;
    const array = [];
    
    do{
        n = prompt("Ingrese el número");
        if(+n === 0){
        }else if(!isNaN(+n)){
            array.push(+n);
        }else{
            array.push(n);
        }
    }while(+n !== 0);
    console.log(array);
    const arrayPar = array.filter(e => (e % 2 === 0));
    const arrayImpar = array.filter(e => (e % 2 === 1));
    const arrayString = array.filter(e => (typeof e === "string"));
    alert("Arreglo Par: "+arrayPar+"\nArreglo Impar: "+arrayImpar+"\nArreglo NO numérico: "+arrayString);
}
// --------------------------------------------------
function ejecutar3(){
    // Programa que lee datos numéricos diferentes de cero (se detiene), los guarda en un arreglo y luego busca el mayor y el menor, y los elimina del arreglo original.
    const array = [];
    let n;
    let m = 99999999999999;
    let M = -99999999999999;
    do{
        n = +prompt("Ingrese un número: ");
        if(n !== 0){
            array.push(n);
            if(n < m){
                m = n;
            }else if(n > M){
                M = n;
            }
        }
        console.log("m:"+m+"|M:"+M);
    }while(n !== 0);
    console.log("Antes de eliminar: "+array);
    array.splice(array.indexOf(M),1);
    array.splice(array.indexOf(m),1);
    console.log("Después de eliminar: "+array);
}
// --------------------------------------------------
function ejecutar4(){
    // Programa que recibe un arreglo y busca el número más alto, y lanza excepciones si lo recibido no es un arreglo y si no se encuentran valores numéricos.
    (function masAlto(array) {
        if(!Array.isArray(array)) {
            throw new Error('No es arreglo');
        }
        let mayor = -Infinity;
        array.forEach((elemento) => {
        if (elemento > mayor) {
          mayor = elemento;
        }
      })
      if (mayor < -999999999999) {
        throw new Error('no es un valor numerico');
      }
      console.log('el mayor es', mayor);
    })(['a']);

}
// --------------------------------------------------
function ejecutar5(){
    // nombre,apellido,email
    class User{
        constructor(nombre, apellido, email){
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
        }
    }
    let usuario1 = new User(prompt("Ingrese el nombre del usuario"), prompt("Ingrese el apellido del usuario"), prompt("Ingrese el email del usuario"))
    alert("Nombre del usuario: "+usuario1.nombre+"\nApellido del usuario: "+usuario1.apellido+"\nEmail del usuario: "+usuario1.email);
}
// --------------------------------------------------
function ejecutar6(){
    //Lo mismo del anterior :)
    alert("Lo mismo del anterior");
}
// --------------------------------------------------
function ejecutar7(){
    class User{
    constructor(nombre, apellido, email, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.edad = edad
        }
        is_adult = function() {
            if(this.edad >= 18){
                return true;
            }else{
                return false;
            }
        }
        get_full_name = function() {
            return this.nombre+" "+this.apellido;
        }
    }
    let usuario1 = new User(prompt("Ingrese el nombre del usuario"), prompt("Ingrese el apellido del usuario"), prompt("Ingrese el email del usuario"), +prompt("Ingrese la edad del usuario: "))
    alert("Nombre del usuario: "+usuario1.get_full_name()+"\nEmail del usuario: "+usuario1.email+"\nEs mayor de edad: "+usuario1.is_adult());
    // alert(`Nombre: ${usuario1.get_full_name()}`)
}
// --------------------------------------------------
function ejecutar8() {
    class Perro{
        constructor(raza, nombre, peso, edad){
            this.raza = raza;
            this.nombre = nombre;
            this.peso = peso;
            this.edad = edad;
        }
    }

    let Perros = [];

    do{
        Perros.push(new Perro(prompt("Ingrese la raza del perro: "), prompt("Ingrese el nombre del perro: "), prompt("Ingrese el peso del perro: "), prompt("Ingrese la edad del perro: ")))
        Perros.forEach(element => {
            if(Perros[element].raza === "Stop"){
                Perros.pop();
            }
            
        });
    }while(Perros[0].raza !== "Stop")
    console.log(Perros)
}
// --------------------------------------------------
function ejecutar9() {
    let opc = 0;
    let usuarios = [];
    let productos = [];
    let listaPedidos = [];
    let usuarioSeleccionado;
    let productoSeleccionado;
    class user{
        constructor(nombre, apellido, email, telefono){
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.telefono = telefono;
        }
    }
    class product{
        constructor(nombre, precio){
            this.nombre = nombre;
            this.precio = precio;       
        }
    }
    class order{
        constructor(usuarioSeleccionado, productoSeleccionado){
            this.usuarioSeleccionado = usuarioSeleccionado;
            this.productoSeleccionado = productoSeleccionado;
        }
    }
    function usuario() {
        do{
            opc = prompt("Ingrese uno de los siguientes numerales: \na. Ingresar usuario\nb. Mostrar lista de usuarios\nc. Modificar usuario\nd. Atrás").toLowerCase();
            switch(opc){
                case 'a':
                    usuarios.push(crearUsuario());
                    break;
                case 'b':
                    mostrarUsuarios();
                    break;
                case 'c':
                    modificarUsuarios();
                    break;
                case 'd':
                    alert("Atrás");
                    break;
                default:
                    alert("Ingresó una opción no valida!!");
                    break;
            }
        }while(opc !== 'd')
    }
    function crearUsuario() {
        let nombre = prompt("Ingrese el nombre: ");
        let apellido = prompt("Ingrese el apellido: ");
        let email = prompt("Ingrese el email: ");
        let telefono = parseInt(prompt("Ingrese el telefono: "));

        return new user(nombre, apellido, email, telefono);
    }
    function mostrarUsuarios() {
        let mensaje = '';
        for (let i = 0; i < usuarios.length; i++) {
            mensaje += (`Usuario ${(i+1)}\nNombre: ${usuarios[i].nombre}\nApellido: ${usuarios[i].apellido}\nEmail: ${usuarios[i].email}\nTeléfono: ${usuarios[i].telefono}\n\n`);
        }
        alert(mensaje);
    }
    function modificarUsuarios() {
        do{
            opc = prompt("Ingrese uno de los siguientes numerales:\na. Seleccionar usuario\nb. Modificar nombre\nc. Modificar apellido\nd. Modificar email\ne. Modificar teléfono\nf. Atrás").toLowerCase();
            switch(opc){
                case 'a':
                    seleccionarUsuario();
                    break;
                case 'b':
                    usuarioSeleccionado.nombre = prompt(`Nuevo nombre del usuario:`);
                    break;
                case 'c':
                    usuarioSeleccionado.apellido = prompt(`Nuevo apellido del usuario:`);
                    break;
                case 'd':
                    usuarioSeleccionado.email = prompt(`Nuevo email del usuario:`);
                    break;
                case 'e':
                    usuarioSeleccionado.telefono = +prompt(`Nuevo telefono del usuario:`);
                    break;
                case 'f':
                    alert("Atrás");
                    break;
                default:
                    alert("Ingresó una opción no valida!!");
                    break;
            }
        }while(opc !== 'f')
    }
    function producto() {
        do{
            opc = prompt("Ingrese uno de los siguientes numerales: \na. Ingreso de productos\nb. Listado de productos\nc. Modificar producto\nd. Atrás").toLowerCase();
            switch(opc){
                case 'a':
                    productos.push(ingresarProducto());
                    break;
                case 'b':
                    mostrarProductos();
                    break;
                case 'c':
                    modificarProducto();
                    break;
                case 'd':
                    alert("Atrás");
                    break;
                default:
                    alert("Ingresó una opción no valida!!");
                    break;
            }
        }while(opc !== 'd')
    }
    function ingresarProducto() {
        let nombre = prompt("Ingrese el nombre: ");
        let precio = +prompt("Ingrese el precio: ");

        return new product(nombre, precio);
    }
    function mostrarProductos() {
        let mensaje = '';
        for (let i = 0; i < productos.length; i++) {
            mensaje += (`Nombre: ${productos[i].nombre}\nPrecio: $${productos[i].precio}\n\n`);
        }
        alert(`Productos:\n${mensaje}`);
    }
    function modificarProducto() {
        do{
            opc = prompt("Ingrese uno de los siguientes numerales:\na. Seleccionar producto\nb. Modificar nombre\nc. Modificar precio\nd. Atrás").toLowerCase();
            switch(opc){
                case 'a':
                    seleccionarProducto();
                    break;
                case 'b':
                    productoSeleccionado.nombre = prompt(`Nuevo nombre del producto:`);
                    break;
                case 'c':
                    productoSeleccionado.precio = prompt(`Nuevo precio del producto:`);
                    break;
                case 'd':
                    alert("Atrás");
                    break;
                default:
                    alert("Ingresó una opción no valida!!");
                    break;
            }
        }while(opc !== 'd')
    }
    function pedidos() {
        do{
            opc = prompt("Ingrese uno de los siguientes numerales: \na. Usuario que va a realizar la compra\nb. Producto que desea\nc. Confirmacion de compra\nd. Listado de todos los pedidos\ne. Atrás").toLowerCase();
            switch(opc){
                case 'a':
                    seleccionarUsuario();
                    break;
                case 'b':
                    seleccionarProducto();
                    break;
                case 'c':
                    confirmarPedido();
                    break;
                case 'd':
                    mostrarPedidos();
                    break;
                case 'e':
                    alert("Atrás");
                    break;
                default:
                    alert("Ingresó una opción no valida!!");
                    break;
            }
        }while(opc !== 'e')
    }
    function seleccionarUsuario() {
        let mensaje = '';
        for (let i = 0; i < usuarios.length; i++) {
            mensaje += (`Usuario ${[(i+1)]}: ${usuarios[i].nombre} ${usuarios[i].apellido}\n\n`);
        }
        usuarioSeleccionado = usuarios[+prompt(`Usuarios:\n${mensaje}`) - 1];
        alert(`El usuario seleccionado es ${usuarioSeleccionado.nombre} ${usuarioSeleccionado.apellido}`);
    }
    function seleccionarProducto() {
        let mensaje = '';
        for (let i = 0; i < productos.length; i++) {
            mensaje += (`Producto ${[(i+1)]}\nNombre: ${productos[i].nombre}\nPrecio: $${productos[i].precio}\n\n`);
        }
        productoSeleccionado = productos[+prompt(`Productos:\n${mensaje}`) - 1];
        alert(`El producto seleccionado es ${productoSeleccionado.nombre} ($${productoSeleccionado.precio})`);
    }
    function confirmarPedido() {
        let confirmacion = confirm(`El usuario "${usuarioSeleccionado.nombre} ${usuarioSeleccionado.apellido}" ha comprado el producto ${productoSeleccionado.nombre} ($${productoSeleccionado.precio})\n¿Es correcta la información?`);
        if (confirmacion) {
            listaPedidos.push(new order(usuarioSeleccionado, productoSeleccionado));
        }else{
            alert("Pedido cancelado");
        }
        usuarioSeleccionado = null;
        productoSeleccionado = null;
    }
    function mostrarPedidos() {
        let mensaje = '';
        for (let i = 0; i < listaPedidos.length; i++) {
            mensaje += (`Pedido #${(i+1)}\n${listaPedidos[i].usuarioSeleccionado.nombre} ${listaPedidos[i].usuarioSeleccionado.apellido} ==>  ${listaPedidos[i].productoSeleccionado.nombre} ($${listaPedidos[i].productoSeleccionado.precio})\n\n`);
        }
        alert(`Pedidos:\n${mensaje}`);
    }
    // Menú inicio
    do{
        opc = +prompt("Ingrese uno de los siguientes numerales: \n1. Usuarios\n2. Productos\n3. Pedidos\n4. Salir");
        switch(opc){
            case 1:
                alert("1. Usuarios");
                usuario();
                break;
            case 2:
                alert("2. Productos");
                producto();
                break;
            case 3:
                alert("3. Pedidos");
                pedidos();
                break;
            case 4:
                alert("4. Salir");
                break;
            default:
                alert("Ingresó una opción no valida!!");
                break;
        }
    }while(opc !== 4)
}