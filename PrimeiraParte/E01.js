function calcular() {
    console.log("Calculando ...")


    const input_01_value = Number(document.getElementById("numero_01").value)
    const input_02_value = Number(document.getElementById("numero_02").value)
    const input_03_value = Number(document.getElementById("numero_03").value)

    const resultado = input_01_value + input_02_value + input_03_value
    console.log(resultado)

    const inputResultado = document.getElementById("input_resultado")

    inputResultado.value = resultado
}