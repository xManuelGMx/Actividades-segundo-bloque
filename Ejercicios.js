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
function ejecutar6(){
    //Lo mismo del anterior :)
}
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