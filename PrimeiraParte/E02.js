function calcular() {
    console.log("Calculando ...")


    const input_01_value = Number(document.getElementById("numero_01").value)
    const input_02_value = Number(document.getElementById("numero_02").value)
    const input_03_value = Number(document.getElementById("numero_03").value)
   
    const input_01 = document.getElementById("numero_01")
    const input_02 = document.getElementById("numero_02")
    const input_03 = document.getElementById("numero_03")
    const inputs = [input_01, input_02, input_03]
    
    const resultado = input_01_value + input_02_value + input_03_value
    console.log(resultado)

    const inputResultado = document.getElementById("input_resultado")

    inputResultado.value = resultado
}
function adcionarEventos(inputs){
    console.log("Iniciando..")
    inputs.forEach(input =>{
        input.addEventListener("keyup", calcular)
    });
}