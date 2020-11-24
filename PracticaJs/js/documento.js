function saludar(){
    alert("hola mi primer script");
}
function sumar(){
    numero1=parseInt(document.getElementById("n1").value);
    numero2=parseInt(document.getElementById("n2").value);
    resultado=numero1+numero2;
    alert("La suma es:" + resultado);
}
function invertir(){
    var cadenaObtenida = document.getElementById("cadena").innerText;//obtenemos todo el label
    var vector=cadenaObtenida.split('');//arrreglo de caracteres
    var reversa=vector.reverse();//invertir el arreglo
    var cadenaInvertida=reversa.join('');//une el arreglo en una sola cadena
    document.write(cadenaInvertida);
}
function validarFormulario(){
    var nombres=document.getElementById("nombres").value;
    if(nombres==""){
        alert("por favor digite el usuario");
    }
}