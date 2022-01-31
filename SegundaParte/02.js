

function calcularMedia(numeros){
let soma = 0
numeros.forEatch(numero =>{
    soma += numero
});
return soma/ numeros.length


}
 function executar(){

    const numeros = [10,20,30]
    const divResultado = document.getElementById("resultado")
   divResultado.innerHTML = calcularMedia(numeros)
 }