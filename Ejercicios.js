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
    alert("Ejercicio 4");
}