
function sumar(){
    //Obtener los valores de los campos de entrada
    //parseFloat: convierte a variable flotante
    //.getElementById: obtenemos el elemento con el id=number1
    //.value: obtiene el valor de el elemento con el id=number1
    let numero1 = parseFloat(document.getElementById("number1").value);
    let numero2 = parseFloat(document.getElementById("number2").value);
    //Descarta valores nulos de los inputs y les asigna un valor de 0
    if(isNaN(numero1)){
        numero1 = 0
        document.getElementById("number1").value = 0;
    }
    if(isNaN(numero2)){
        numero2=0;
        document.getElementById("number2").value = 0;
    }
    //sumar los números
    const resultado = numero1 + numero2;
    //Mostrar resutado
    //.textContent: modifica el contenido del elemento con id=resultado
    document.getElementById("resultado").textContent=resultado; 
    document.getElementById("operacion").textContent="+";               
}
function restar(){
    let numero1 = parseFloat(document.getElementById("number1").value);
    let numero2 = parseFloat(document.getElementById("number2").value);
    if(isNaN(numero1)){
        numero1 = 0
        document.getElementById("number1").value = 0;
    }
    if(isNaN(numero2)){
        numero2=0;
        document.getElementById("number2").value = 0;
    }
    const resultado = numero1 - numero2;
    document.getElementById("resultado").textContent=resultado;
    document.getElementById("operacion").textContent="-";
}
function multiplicar(){
    let numero1 = parseFloat(document.getElementById("number1").value);
    let numero2 = parseFloat(document.getElementById("number2").value);
    if(isNaN(numero1)){
        numero1 = 0
        document.getElementById("number1").value = 0;
    }
    if(isNaN(numero2)){
        numero2=0;
        document.getElementById("number2").value = 0;
    }
    const resultado = numero1 * numero2;
    document.getElementById("resultado").textContent=resultado;
    document.getElementById("operacion").textContent="×";
}
function dividir(){
    let numero1 = parseFloat(document.getElementById("number1").value);
    let numero2 = parseFloat(document.getElementById("number2").value);
    document.getElementById("operacion").textContent="÷";  
    if(isNaN(numero1)){
        document.getElementById("number1").value = 0;
        numero1=0;          
    }
    if(isNaN(numero2) || numero2==0){
        document.getElementById("resultado").textContent="∞";
        if(isNaN(numero2)){           
            document.getElementById("number2").value = 0;         
        }      
    }
    else{    
        const resultado = numero1 / numero2;
        document.getElementById("resultado").textContent=resultado;
        }
}

function limpiar(){
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("resultado").textContent = 0;  
    document.getElementById("operacion").textContent="± or ÷×";
}
